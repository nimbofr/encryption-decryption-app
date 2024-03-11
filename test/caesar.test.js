const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe('caesar function', () => {
  it('should encode a string with a positive shift', () => {
    expect(caesar('hello', 3, true)).to.equal('khoor');
  });

  it('should decode a string with a negative shift', () => {
    expect(caesar('khoor', 3, false)).to.equal('hello');
  });

  it('shifts greater than -25 are false', () => {
    expect(caesar('abc', 30, true)).to.equal(false);
  });

  it('shifts less than -25 are false', () => {
    expect(caesar('xyz', -30, true)).to.equal(false);
  });

  it('should handle non-alphabetic characters', () => {
    expect(caesar('123!@#', 5, true)).to.equal('123!@#');
  });

  it('should handle empty string input', () => {
    expect(caesar('', 5, true)).to.equal('');
  });

  it('should return false if shift is 0', () => {
    expect(caesar('hello', 0, true)).to.equal(false);
  });

  it('should return false if shift is not provided', () => {
    expect(caesar('hello')).to.equal(false);
  });

  it('should maintain spaces', () => {
    expect(caesar('hello world', 1, true)).to.equal('ifmmp xpsme');
  });

  it('should wrap around the alphabet', () => {
    expect(caesar('z', 3, true)).to.equal('c');
  });

  it('should ignore capital letters', () => {
    expect(caesar('HeLLo WoRLd', 1, true)).to.equal('ifmmp xpsme');
  });
});

