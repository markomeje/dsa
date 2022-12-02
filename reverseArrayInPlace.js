function reverseArrayInPlace(array) {
    for (let i = 0; i < (array.length/2); i++) {
        var tempValue = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempValue;
    }

    return array;
}

var reverseArray = reverseArrayInPlace([false, 6, null, 'main', []]);
console.log(reverseArray);