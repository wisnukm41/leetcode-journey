var climbStairs = function(n) {
    let sum = [1,2]
    for(let i = 2; i < n; i++) {
        sum[i] = sum[i-1] + sum[i-2]
    }
    return sum[n-1]
};