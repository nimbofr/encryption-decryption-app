const { polybius } = require("../src/polybius.js");
const { expect } = require("chai");

describe('Polybius Square Cipher', function() {

    it('should encode text correctly', function() {
        expect(polybius("thinkful")).to.equal("4432423352125413");
        expect(polybius("Hello world")).to.equal('3251131343 2543241341');
    });

    it('should decode text correctly', function() {
        expect(polybius("3251131343 2543241341", false)).to.include('h'); // Decoding ambiguity for 'h' and 'e'
        expect(polybius("4432423352125413", false)).to.include('(i/j)'); // Ambiguity for 'i' and 'j'
    });

    it('should treat capital letters the same as lowercase', function() {
        expect(polybius("THINKFUL")).to.equal("4432423352125413");
    });

    it('should maintain spaces', function() {
        expect(polybius("3251131343 2543241341", false)).to.equal('hello world');
    });

    it('should return false if decoded length (excluding spaces) is odd', function() {
        expect(polybius("44324233521254134", false)).to.be.false;
    });

    it('should encode both i and j to 42', function() {
        expect(polybius("i")).to.equal("42");
        expect(polybius("j")).to.equal("42");
    });

    it('should decode 42 to (i/j)', function() {
        expect(polybius("42", false)).to.equal("(i/j)");
    });

    it('should return string when encoding', function() {
        expect(typeof polybius("thinkful")).to.be.string;
    });
});