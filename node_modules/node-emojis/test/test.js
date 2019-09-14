/* eslint-env mocha */

const expect = require('chai').expect
const emojis = require('../lib/emojis')

describe('emojis', () => {
  it('should return a successful emoji', () => {
    expect(emojis.boar).to.equal('🐗')
  })
})
