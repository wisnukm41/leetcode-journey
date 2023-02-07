// My Solution
var isSubsequence = function(s, t) {
    let search = -1;
    for(let i = 0; i < s.length ; i++){
        let index = t.indexOf(s[i], search + 1)

        if(index >= 0 && index >= search){
            search = index;
        } else {
            return false
        }
    }
    return true
};

// Other Solution
// var isSubsequence = function(s, t) {
//     const t_length = t.length;
//     let subsequence = 0;
//     for (let i = 0; i < t_length; i++) {
//       if (s[subsequence] === t[i]) {
//         // ! if it is matching, increment subsequence
//         subsequence++;
//       }
//     }
//     return subsequence === s.length
// };

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("aaaaaa", "bbaaaa"))