const reverseString = function(word) {
    let reversedString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedString += word[i];
    }
    return reversedString;
    // return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
