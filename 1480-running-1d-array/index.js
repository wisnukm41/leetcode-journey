/**

 * @param {number[]} nums

 * @return {number[]}

 */

// my solution
var runningSum = function(nums) {

    let arrTotal = [nums[0]];

    for(let i = 1; i < nums.length; i++){

        arrTotal[i] = nums[i] + arrTotal[i-1];

    }

    return arrTotal;

};

// faster solution but more memory
var runningSum = function(nums) {
    let sum=0,res=[];
    for(let i=0; i<nums.length; i++){
        sum+=nums[i];
        res.push(sum);
    }
    return res;
};

runningSum([1,2,3,4]);
runningSum([1,1,1,1,1]);
runningSum([3,1,2,10,1]);