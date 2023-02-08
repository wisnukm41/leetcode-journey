// Other People solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < nums.length - 1) {
    let max = 0;

    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] + i, max);
    }
    // 6, 8
    left = right + 1;
    right = max;

    res++;
  }
  return res;
};

// [2,3,1,1,4,1] = 6
// left = 1, right = 2, res = 1
// left = 3, right = 4, res = 2
// left = 5, right = 8, res = 3
//

console.log(jump([2, 3, 1, 1, 4, 1]));
