"use strict";
var isbn = [1, 1, 1, 2, 2, 2, 3, 3, 3, 9];
var sum = (isbn[0] * 1) + (isbn[1] * 2) + (isbn[2] * 3) +
    (isbn[3] * 4) + (isbn[4] * 5) + (isbn[5] * 6) + (isbn[6] * 7) +
    (isbn[7] * 8) + (isbn[8] * 9) + (isbn[9] * 10);
console.log(isbn[0], isbn[1], isbn[2], isbn[3], isbn[4], isbn[5], isbn[6], isbn[7], isbn[8], isbn[9]);
for (var x = 0; x < isbn.length; x++) {
    if (isbn[0] == "X" || isbn[1] == "X" || isbn[2] == "X" ||
        isbn[3] == "X" || isbn[4] == "X" || isbn[5] == "X" || isbn[6] == "X" ||
        isbn[7] == "X" || isbn[8] == "X" || isbn.length != 10) {
        console.log(" --> false <--");
    }
    else if (isbn.length == 10) {
        if (sum % 11 == 0) {
            if (isbn[9] == "X" || isbn[9] >= 0 || isbn[9] <= 9) {
                console.log(" --> true <--");
            }
            else
                console.log(" <-- false <--");
        }
        else
            console.log(" <-- false <--");
    }
    else
        console.log(" <-- false <--");
}
