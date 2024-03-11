// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input = "", encode = true) {
    const encodeLookup = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };

    if (encode) {
      const inputArray = input.toLowerCase().split("");
      const newArray = inputArray.map((char) => {
        return encodeLookup[char] || char;
      });
      return newArray.join("");
    } else {
      // Check for odd length excluding spaces
      if (input.replace(/ /g, "").length % 2 !== 0) return false;

      return input
        .split(" ")
        .map((word) => {
          const pairs = word.match(/(..)/g) || []; // Split into pairs
          return pairs
            .map((charduo) => {
              for (const key in encodeLookup) {
                if (encodeLookup[key] === charduo) {
                  if (charduo === "42") return "(i/j)";
                  return key;
                }
              }
            })
            .join("");
        })
        .join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
