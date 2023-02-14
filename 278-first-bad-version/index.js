var solution = function(isBadVersion) {
    return function(n) {
        let nBad = n;
        let nGood = 0;
        while (nBad - nGood > 1) {
            let nCurr = Math.round((nBad + nGood)/2); // center
            if (isBadVersion(nCurr)) {                // only one API call
                nBad = nCurr;
            } else {
                nGood = nCurr;
            }
        }
        return nBad;
    };
};