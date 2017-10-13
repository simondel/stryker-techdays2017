var assert = require('chai').assert;
var isOldEnough = require('../src/app');

describe('User', () => {
    it('is old enough', () => {
        var user = { name: 'Simon', age: 24 };
        assert.equal(isOldEnough(user), true);
    });
});
    