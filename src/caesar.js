// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input="", shift=0, encode = true) {
    const lookup = "abcdefghijklmnopqrstuvwxyz"
    if (shift === 0 || shift > 25 || shift < -25){
      return false
    }
    else{
    (!encode)? shift = shift * -1 : shift = shift
    const arrayInputString = input.split("")
    const newArrayString = arrayInputString.map((letter)=>{
      if (!lookup.includes(letter.toLowerCase())){
        return letter
      }
      else{
      const lowerCaseLetter = letter.toLowerCase()
      const index = lookup.indexOf(lowerCaseLetter)
      let newIndex = index + shift
      newIndex = (newIndex + 26) % 26
      return lookup[newIndex]
    }})
    return newArrayString.join("")
  }
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };