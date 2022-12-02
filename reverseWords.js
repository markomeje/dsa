function reverseWords(string) {
    var wordsArray = string.split(' ');
    var reversedWordsArray = [];

    wordsArray.forEach((eachWord) => {
        var reversedWord = '';
        for(var i = eachWord.length - 1; i >= 0; i--) {
            reversedWord += eachWord[i];
        }
        reversedWordsArray.push(reversedWord);
    });

    return reversedWordsArray.join(' ');
}

var theString = reverseWords('My name is Mark Omeje');
console.log(theString);