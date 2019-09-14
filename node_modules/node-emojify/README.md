[![npm](https://img.shields.io/npm/dw/node-emojify.svg)](https://www.npmjs.com/package/node-emojify)
[![Build Status](https://travis-ci.org/jesselpalmer/node-emojify.svg?branch=master)](https://travis-ci.org/jesselpalmer/node-emojify)
[![Coverage Status](https://coveralls.io/repos/github/jesselpalmer/node-emojify/badge.svg?branch=master)](https://coveralls.io/github/jesselpalmer/node-emojify?branch=master)
[![dependencies Status](https://david-dm.org/jesselpalmer/node-emojify/status.svg)](https://david-dm.org/jesselpalmer/node-emojify)
[![devDependencies Status](https://david-dm.org/jesselpalmer/node-emojify/dev-status.svg)](https://david-dm.org/jesselpalmer/node-emojify?type=dev)

# node-emojify

Transform text into emojis 🚀.

## Goal

The goal of the project is to support all of the emojis that can be
found at [Emojipedia](https://emojipedia.org/). The shortcodess (ex. `:fire:`) that are supported are
the ones that can be found Emojipedia. If the shortcode isn't in Emojipedia, then the shortcode in
Slack are used. If the shortcode isn't in Slack, then the shortcode in GitHub is used. If the
shortcode cannot be found in Emojipedia, Slack, or GitHub, then the name of the emoji in Emojipedia is
used and underscores are used to concatenate multiple words.

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
  npm install node-emojify
  ```

## Usage

Text that you would like to convert into emojis must be surrounded by colons, like `:grinning:`.

  ```js
  const emojify = require('node-emojify')

  const sentence = emojify('node is :thumbsup:')

  console.log(sentence)
  ```

  Output should be `node is 👍`

  If the emoji isn't supported the text will simply be ignored and not be transformed.
  
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
  
  If there is an emoji that you need and is not available, please file an [issue](https://github.com/jesselpalmer/node-emojify/issues) or create a [pull request](https://github.com/jesselpalmer/node-emojify/pulls).
  
## Tests

  ```bash
  npm test
  ```

## Contributing

Pull requests are welcome! Please make sure that any new or changed functionality need to have unit tests accompanied with the PR. Make sure that you lint (`npm run lint`) and test your code (`npm test`).
