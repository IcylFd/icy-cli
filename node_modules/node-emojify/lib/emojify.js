const emojis = require('node-emojis')

const isWordEscaped = word => {
  const firstChar = word.charAt(0)
  const lastChar = word.slice(-1)

  return firstChar === ':' && lastChar === ':'
}

const getEmoji = word => {
  const trimmedWord = word.slice(1, word.length - 1).toLowerCase()

  return emojis[trimmedWord] || word
}

const emojify = text => {
  const words = text.split(' ')
  const numOfWords = words.length

  for (let i = 0; i < numOfWords; i++) {
    const currentWord = words[i]

    if (isWordEscaped(currentWord)) {
      words[i] = getEmoji(currentWord)
    }
  }

  return words.join(' ')
}

module.exports = emojify
