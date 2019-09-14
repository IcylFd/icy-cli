[![Build Status](https://travis-ci.org/jesselpalmer/node-emojis.svg?branch=master)](https://travis-ci.org/jesselpalmer/node-emojis)
[![Coverage Status](https://coveralls.io/repos/github/jesselpalmer/node-emojis/badge.svg?branch=master)](https://coveralls.io/github/jesselpalmer/node-emojis?branch=master)
[![dependencies Status](https://david-dm.org/jesselpalmer/node-emojis/status.svg)](https://david-dm.org/jesselpalmer/node-emojis)
[![devDependencies Status](https://david-dm.org/jesselpalmer/node-emojis/dev-status.svg)](https://david-dm.org/jesselpalmer/node-emojis?type=dev)

# node-emojis

Emojis that you can use in your application 😊

## Goal

The goal of the project is to support all of the emojis that can be
found at [Emojipedia](https://emojipedia.org/).

## Support Status

Below is a table of the emojis that are supported by version. There may be some emojis that are
supported in the different verisons, but there hasn't been a concerted effort to add all emojis from
that version.

<table>
  <tr>
    <th>Verison</th>
    <th>Status</th>
  </tr>
  <tr>
    <td><a href=https://emojipedia.org/emoji-1.0/>Emoji 1.0</a></td>
    <td>In development 🙂</td> 
  </tr>
  <tr>
    <td><a href=https://emojipedia.org/emoji-2.0/>Emoji 2.0</a></td>
    <td>Not supported yet 🙁</td>  
  </tr>
  <tr>
     <td><a href=https://emojipedia.org/emoji-3.0/>Emoji 3.0</a></td>
    <td>Not supported yet 🙁</td>  
  </tr>
  <tr>
     <td><a href=https://emojipedia.org/emoji-4.0/>Emoji 4.0</a></td>
    <td>Not supported yet 🙁</td>  
  </tr>
  <tr>
    <td><a href=https://emojipedia.org/emoji-5.0/>Emoji 5.0</a></td>
    <td>Not supported yet 🙁</td>  
  </tr>
  <tr>
    <td><a href=https://emojipedia.org/emoji-11.0/>Emoji 11.0</a></td>
    <td>Not supported yet 🙁</td>  
  </tr>
  <tr>
     <td><a href=https://emojipedia.org/emoji-12.0/>Emoji 12.0</a></td>
    <td>Not supported yet 🙁</td>  
  </tr>
</table>

## Installation

  ```bash
  npm install node-emojis
  ```

## Usage

Just import the emojis into your app. It is an object with the emoji name as the key and the actual emoji as the value.

Sample usage:

  ```js
  const emojis = require('node-emojis')

  console.log(emojis.smile)
  ```

  Output should be `😄`
  
### Supported emojis
  
  Supported emojis can be found in different files using the table below:
  
  <table>
    <tr>
      <th>Category</th>
      <th>Filename</th>
    </tr>
    <tr>
      <td>🐈 Animal</td>
      <td><a href="https://github.com/jesselpalmer/node-emojis/blob/master/lib/emojis/animal-emojis.js">animal-emojis.js</a></td>
    </tr>
    <tr>
      <td>🍔 Food</td>
      <td><a href="https://github.com/jesselpalmer/node-emojis/blob/master/lib/emojis/food-emojis.js">food-emojis.js</a></td>
    </tr>
    <tr>
      <td>🔥 Nature</td>
      <td><a href="https://github.com/jesselpalmer/node-emojis/blob/master/lib/emojis/nature-emojis.js">nature-emojis.js</a></td>
    </tr>
    <tr>
      <td>🙃 People</td>
      <td><a href="https://github.com/jesselpalmer/node-emojis/blob/master/lib/emojis/people-emojis.js">people-emojis.js</a></td>
    </tr>
    <tr>
      <td>🗻 Travel</td>
      <td><a href="https://github.com/jesselpalmer/node-emojis/blob/master/lib/emojis/travel-emojis.js">travel-emojis.js</a></td>
    </tr>
   </table>
  
  If there is an emoji that you need and is not available, please file an [issue](https://github.com/jesselpalmer/node-emojis/issues) or create a [pull request](https://github.com/jesselpalmer/node-emojis/pulls).
  
## Tests

  ```bash
  npm test
  ```

## Contributing

Pull requests are welcome! It's super easy to add new emojis! Just go to [https://github.com/jesselpalmer/node-emojis/tree/master/lib/emojis](https://github.com/jesselpalmer/node-emojis/tree/master/lib/emojis) and if you find emojis that are missing from [Emojipedia](https://emojipedia.org/) just create a PR adding the missing emoji.

Please make sure that any new or changed functionality need to have unit tests accompanied with the PR. Make sure that you lint (`npm run lint`) and test your code (`npm test`).
