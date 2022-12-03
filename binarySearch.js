function binarySearch(numArr, key) {
    var numArrLength = numArr.length;
    var middleIndex = Math.floor(numArrLength / 2);
    var middleElement = numArr[middleIndex];

    if(middleElement === key) {
        return true;
    }else if(numArrLength > 1) {
        return middleElement > key ? binarySearch(numArr.splice(0, middleIndex), key) : binarySearch(numArr.splice(middleIndex, numArrLength), key);
    }else {
        return false;
    }

}

console.log(binarySearch([23, 45, 47, 56, 67, 71, 74, 98], 71));