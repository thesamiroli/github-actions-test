const utils = require('../utils');
const assert = require('assert');
const mocha = require('mocha');


describe('Meaning of Life', function () {
    it('Should return the meaning of life', function () {
        assert.strictEqual(utils.getTheMeaningOfLife(), 42);
    })
})

describe('Square', function () {
    it('Should return the square', function () {
        assert.strictEqual(utils.square(4), 16);
    })
})