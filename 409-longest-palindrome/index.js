// My Solution
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let obj = {}, output = 1;

    for(let i = 0; i < s.length ; i++){
        if(s[i] in obj){
            obj[s[i]] += 1;
        } else {
            obj[s[i]] = 1;
        }
    }

    obj[' '] = 0;

    let values = Object.values(obj);
    let odd = 0;

    for (let i = 0; i < values.length; i++) {
        if(values[i] % 2 == 1) {
            output += values[i] - 1
            odd++;
        } else {
            output += values[i] 
        }
    }

    if(odd == 0) output--

    return output;
};

console.log(longestPalindrome('ll'))
console.log(longestPalindrome('cccaa'))