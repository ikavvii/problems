/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  let shortString, longString;

  if (str1.length > str2.length) {
    longString = str1;
    shortString = str2;
  } else {
    longString = str2;
    shortString = str1;
  }

  let gcdLengthPossible = longString.length / 2;
  //   console.log(gcdLengthPossible);

  let gcd = "";

  let isGCD = false;

  while (gcdLengthPossible > 0 && !isGCD) {
    for (let i = 0; i < shortString.length; i++) {
      if (gcd.length <= gcdLengthPossible) {
        if (str1[i] === str2[i]) {
          gcd += str1[i];
        } else {
          gcd = "";
        }
      }
    }
    isGCD = longString.split(gcd).every((c) => c === "");

    if (!isGCD) {
      gcdLengthPossible--;
      gcd = ''
    }
  }

  return isGCD ? gcd : "";
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);

