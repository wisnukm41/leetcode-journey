// My Solution
var isPalindrome = function (x) {
  arrNum = [];
  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    arrNum[i] = x[i];
  }

  iBehind = arrNum.length;
  for (let j = 0; j < arrNum.length; j++) {
    if (arrNum[j] != arrNum[iBehind - 1]) return false;
    iBehind -= 1;
  }

  return true;
};

// Official Solution
// var isPalindrome = function (x) {
//   //Short circuit
//   if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

//   let reverse = 0;

//   while (x > reverse) {
//     reverse = reverse * 10 + (x % 10);
//     x = ~~(x / 10);
//   }
//   // 1
//   // 12

//   return x === reverse || x === ~~(reverse / 10);
// };

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
