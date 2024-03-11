// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input = "", alphabet = "", encode = true) {
    if (alphabet.length !== 26) return false;
    if (new Set(alphabet).size !== 26) return false;
    const newAlphabetArray = alphabet.toLowerCase().split("");
    const inputCharacterArray = input.toLowerCase().split("");
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    if (encode) {
      const mappedArray = inputCharacterArray.map((char) => {
        if (char === " ") return " ";
        return newAlphabetArray[alphabetArray.indexOf(char)];
      });
      return mappedArray.join("");
    }
    else{
      const mappedArray = inputCharacterArray.map((char) => {
        if (char === " ") return " ";
        return alphabetArray[newAlphabetArray.indexOf(char)];
      });
      return mappedArray.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
