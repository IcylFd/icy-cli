// npm i handlebars metalsmith -D
const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const path = require('path');
const rm = require('rimraf').sync

module.exports = function (metadata = {}, src, dest = '.') {
    if (!src) {
        return Promise.reject(new Error(`无效的source：${src}`))
    }
    
    return new Promise((resolve, reject) => {
        Metalsmith(src)
        .metadata(metadata)
        .clean(false)
        .source('.')
        .destination(dest)
        .use((files, metalsmith, done) => {
            console.log(Object.keys(files));
            const meta = metalsmith.metadata()
            Object.keys(files).forEach(fileName => {
                if(fileName == 'package.json') {
                    const t = files[fileName].contents.toString()
                    files[fileName].contents = new Buffer(Handlebars.compile(t)(meta))
                }
            })
            done()
        }).build(err => {
            err ? reject(err) : resolve()
        })
    })
}
