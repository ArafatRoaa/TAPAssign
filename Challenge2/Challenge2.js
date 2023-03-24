var solution = function lostNumber(numbers) {
    let n = numbers.length; 
    let targetSum = n*(n+1)/2;
    let actualSum = 0;

    for(let i=0; i<n; i++){
        actualSum += numbers[i];
    }

    return targetSum - actualSum;
}