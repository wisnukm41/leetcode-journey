// My Solution
var isIsomorphic = function(s, t) {
    let pair = {};

    if(s.length != t.length) return false

    for(let i = 0 ; i <s.length ; i++){
        let key = s[i]
        let val = t[i]
        if(key in pair){
            if(pair[key] != val) return false
        } else {
            if(Object.values(pair).includes(val)) return false
            pair[key] = val
        }
      
    }
    return true
};

// Others Solution
var isIsomorphic = function(s, t) {

    for (let i = 0; i < s.length; i++) {

    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {

        return false;

    }

  }

  return true;

};



console.log(isIsomorphic("egg","add"))
console.log(isIsomorphic("foo","bar"))
console.log(isIsomorphic("paper","title"))
console.log(isIsomorphic("bbbaaaba","aaabbbba"))
console.log(isIsomorphic("bcb","aaa"))