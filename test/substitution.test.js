const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
    it("should encode 'thinkful'", () => {
        const result = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(result).to.equal('jrufscpw');
    });

    it("should encode 'You are an excellent spy'", () => {
        const result = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(result).to.equal('elp xhm xf mbymwwmfj dne');
    });

    it("should decode 'jrufscpw'", () => {
        const result = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(result).to.equal('thinkful');
    });

    it("should encode 'message'", () => {
        const result = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(result).to.equal('y&ii$r&');
    });

    it("should decode 'y&ii$r&'", () => {
        const result = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(result).to.equal('message');
    });

    it("should return false when alphabet is too short", () => {
        const result = substitution("thinkful", "short");
        expect(result).to.equal(false);
    });

    it("should return false when alphabet characters are not unique", () => {
        const result = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(result).to.equal(false);
    });
});

