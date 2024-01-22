function addStringFirst_Last(str) {
    let mid_str = str.substring(1, str.length - 1);
    let firstWord = str.charAt(0);


    return firstWord + mid_str + firstWord;

}

function threeAddingString(str) {
    if (str.length < 3) {
        return "Length is not correct";
    }
    let lastThreeString = str.substring(str.length - 3, str.length);
    return lastThreeString + str + lastThreeString;

}

console.log(threeAddingString("Java"))
console.log(addStringFirst_Last("Python"))