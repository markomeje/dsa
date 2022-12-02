function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        mode: getMode(arr),
        median: getMedian(arr)
    }
}

function getMean(arr) {
    var sum = 0;
    arr.forEach(num => {
        sum += num;
    });

    var mean = sum / arr.length;
    return mean;
}

function getMedian(arr) {
    arr.sort((a, b) => a - b);
    var median = 0;
    var arrLength = arr.length;
    if(arrLength % 2 !== 0) {
        median = arr[Math.floor(arrLength / 2)];
    }else {
        var firstMiddle = arr[(arrLength / 2) - 1];
        var secondMiddle = arr[(arrLength / 2)];
        median = (firstMiddle + secondMiddle) / 2;
    }

    return median;
}

function getMode(arr) {
    var modeObject = {};
    arr.forEach(num => {
        if(!modeObject[num]) {
            modeObject[num] = 0;
        }
        modeObject[num]++;
    });

    var maxFrequency = 0;
    var modes = [];
    for(var num in modeObject) {
        if(modeObject[num] > maxFrequency) {
            modes = [ num ];
            maxFrequency = modeObject[num];
        }else if(modeObject[num] === maxFrequency) {
            modes.push(num);
        }
    }

    if(modes.length === Object.keys(modeObject).length) {
        modes = [];
    }

    return modes;
}

var mResult = meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);
console.log(mResult);
