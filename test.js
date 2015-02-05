"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var always = _interopRequire(require("fj-always"));

var cond = _interopRequire(require("./"));




function isOk(y, done) {
  return function (x) {
    assert.equal(y, x);
    done();
  };
}

describe("fj-cond", function () {
  var T = always(true);
  var isT = function (x) {
    return x === true;
  };
  var eq = function (x) {
    return function (y) {
      return x === y;
    };
  };


  it("should call the first function whichs predicate is true", function (done) {
    assert.equal(cond([[isT, isOk(true, done)], [T, assert.fail]])(true));
  });

  it("should call the first function whichs predicate is true", function (done) {
    assert.equal(cond([[eq(1), assert.fail], [eq(2), isOk(2, done)], [T, assert.fail]])(2));
  });

  it("should call the first function whichs predicate is true", function (done) {
    assert.equal(cond([[eq(1), assert.fail], [eq(2), assert.fail], [eq(3), isOk(3, done)], [T, assert.fail]])(3));
  });

  it("should call the first function whichs predicate is true", function (done) {
    assert.equal(cond([[eq(1), assert.fail], [T, isOk(2, done)]])(2));
  });
});