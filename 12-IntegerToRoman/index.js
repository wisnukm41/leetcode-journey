/**
 * @param {string} s
 * @return {number}
 */

// my Solution`
var romanToInt = function (s) {
  let val = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "M":
        val += 1000;
        break;
      case "D":
        val += 500;
        break;
      case "C":
        if (s[i + 1] == "D") {
          val += 400;
          i += 1;
        } else if (s[i + 1] == "M") {
          val += 900;
          i += 1;
        } else {
          val += 100;
        }
        break;
      case "L":
        val += 50;
        break;
      case "X":
        if (s[i + 1] == "L") {
          val += 40;
          i += 1;
        } else if (s[i + 1] == "C") {
          val += 90;
          i += 1;
        } else {
          val += 10;
        }
        break;
      case "V":
        val += 5;
        break;
      case "I":
        if (s[i + 1] == "V") {
          val += 4;
          i += 1;
        } else if (s[i + 1] == "X") {
          val += 9;
          i += 1;
        } else {
          val += 1;
        }
        break;
    }
  }
  return val;
};

// Same Approach with hash map
// var romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     const cur = sym[s[i]];
//     const next = sym[s[i + 1]];

//     if (cur < next) {
//       result += next - cur;
//       i++;
//     } else {
//       result += cur;
//     }
//   }

//   return result;
// };

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
