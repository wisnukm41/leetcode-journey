// my solution
// var pivotIndex = function(nums) {
//     for(let i = 0; i < nums.length ; i++){
//         let left = 0,right = 0;
//         for(let j = i+1; j < nums.length ; j++){
//             right += nums[j];
//         }
//         for(let k = 0; k < i ; k++){
//             left += nums[k];
//         }
//         console.log(left)
//         console.log(right)
//         if(left == right) return i
//     }
//     return -1;
// };

// Other solution
var pivotIndex = (nums) => {
    let total = 0;
    for(let i = 0 ; i < nums.length ; i ++) total += nums[i]

    left = 0;
    for(let j = 0 ; j < nums.length ; j++){
        if(left * 2 == total - nums[j]){
            return j
        }
        left += nums[j];
    }
}

console.log(pivotIndex([1,7,3,6,5,6]))