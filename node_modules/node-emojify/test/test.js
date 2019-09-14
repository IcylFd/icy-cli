/* eslint-env mocha */

const expect = require('chai').expect
const emojify = require('../lib/emojify')

describe('emojify', () => {
  it('should convert an emoji correctly', () => {
    const result = emojify(':grinning:')
    expect(result).to.equal('😀')
  })

  it('should convert an emoji correctly at the beginning of sentance', () => {
    const result = emojify(':cat: should work at the beginning of sentance')
    expect(result).to.equal('🐈 should work at the beginning of sentance')
  })

  it('should convert an emoji correctly in the middle of sentance', () => {
    const result = emojify('Today the weather :thumbsdown: but tomorrow will be better')
    expect(result).to.equal('Today the weather 👎 but tomorrow will be better')
  })

  it('should convert an emoji correctly at the end of sentance', () => {
    const result = emojify('Node.js is :thumbsup:')
    expect(result).to.equal('Node.js is 👍')
  })

  it('should convert an emoji if the keyword is UPPERCASE', () => {
    const result = emojify('JavaScript is :FLAME:')
    expect(result).to.equal('JavaScript is 🔥')
  })

  it('should convert an emoji if the keyword is MiXedCaSe', () => {
    const result = emojify('I could go for a :TaCo:')
    expect(result).to.equal('I could go for a 🌮')
  })

  it('should do nothing if the word is not an emoji', () => {
    const result = emojify('I don\'t think this will ever be an emoji :seganike:')
    expect(result).to.equal('I don\'t think this will ever be an emoji :seganike:')
  })

  it('should do nothing if the word has a space in between the word and colons', () => {
    const result = emojify('This shouldn\'t work : smirk :')
    expect(result).to.equal('This shouldn\'t work : smirk :')
  })
})
