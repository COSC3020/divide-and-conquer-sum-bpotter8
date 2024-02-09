function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
        
    } else if (a.length === 1) {
        return a[0];
        
    } else if (a.length === 2) {
        return a[0] + a[1];
        
    } else {
        let arrSize = Math.floor(a.length / 3);
        
        let oneThree = a.slice(0, arrSize);
        let twoThree = a.slice(arrSize, 2 * arrSize);
        let threeThree = a.slice(2 * arrSize);
        
        let sumOne = divideAndConquerSum(oneThree);
        let sumTwo = divideAndConquerSum(twoThree);
        let sumThree = divideAndConquerSum(threeThree);
        
        let answer = sumOne + sumTwo + sumThree;
        return answer;
    }
}
