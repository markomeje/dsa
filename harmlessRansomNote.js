function harmlessRansomNote(noteText, magazineText) {
    var noteTextArr = noteText.split(' ');
    var magazineTextArr = magazineText.split(' ');
    var magazineTextObj = {};

    magazineTextArr.forEach((word) => {
        if (!magazineTextObj[word]) {
            magazineTextObj[word] = 0;
        }

        magazineTextObj[word]++;
    });

    var noteIsPossible = true;
    noteTextArr.forEach((word) => {
        if (magazineTextObj[word]) {
            magazineTextObj[word]--;
            noteIsPossible  = false;
        }else {
            noteIsPossible = true;
        }
    });

    return noteIsPossible;
}

console.log(harmlessRansomNote('This is the ball for the main play', 'The ball is amount the main things and is coming for the ball'))