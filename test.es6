import assert from 'assert';
import always from 'fj-always';

import cond from './';


function isOk(y, done) {
  return (x) => {
    assert.equal(y, x);
    done();
  };
}

describe('fj-cond', () => {

  let T = always(true);
  let isT = (x) => x === true;
  let eq = (x) => (y) => x === y;


  it('should call the first function whichs predicate is true', (done) => {
    assert.equal(cond([
        [isT, isOk(true, done)],
        [T, assert.fail]
    ])(true));
  });

  it('should call the first function whichs predicate is true', (done) => {
    assert.equal(cond([
        [eq(1), assert.fail],
        [eq(2), isOk(2, done)],
        [T, assert.fail]
    ])(2));
  });

  it('should call the first function whichs predicate is true', (done) => {
    assert.equal(cond([
        [eq(1), assert.fail],
        [eq(2), assert.fail],
        [eq(3), isOk(3, done)],
        [T, assert.fail]
    ])(3));
  });

  it('should call the first function whichs predicate is true', (done) => {
    assert.equal(cond([
        [eq(1), assert.fail],
        [T, isOk(2, done)]
    ])(2));
  });
});
