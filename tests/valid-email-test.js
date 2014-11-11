/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit
  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
var fs = require("fs");
var validator = require("../lib/valid-email.js");

exports.testValidator = function(test){
    test.expect(8); 
    var result = validator('@doe.com');
    test.equal(result, false, "User length check");
    result = validator('johndoe.com');
    test.equal(result, false, "No at check");
    result = validator('john@');
    test.equal(result, false, "Domain length check");
    result = validator('.john@doe.com');
    test.equal(result, false, "User starts with . check");
    result = validator('..john@doe.com');
    test.equal(result, false, "Two dots in user check");
    result = validator('john@doe$.com');
    test.equal(result, false, "Invalid character in domain check");
    result = validator('john@doe..com');
    test.equal(result, false, "Two dots in domain check");
    result = validator('john@doe.com');
    test.equal(result, true, "Valid email check");
    test.done();
};