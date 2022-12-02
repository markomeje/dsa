function twoSum(numArr, sum) {
    var pairs = [];
    var hashTable = [];
    
    for (let i = 0; i < numArr.length; i++) {
        const currElement = numArr[i];
        var counterPart = sum - currElement;
        if(hashTable.indexOf(counterPart) !== -1) {
            pairs.push([ currElement, counterPart]);
        }
        hashTable.push(currElement);
    }

    return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 5))