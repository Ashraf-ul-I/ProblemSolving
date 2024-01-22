
const removeCharacter = (str, charPos) => {
    const strArray = str.split('');
    console.log("Splitting value: " + strArray);
    while (charPos < strArray.length - 1) {
        strArray[charPos] = strArray[charPos + 1];//prottekta character er charposition e tar porer value ta diye replace kora hocche
        //ebhave last porjontto jabe
        console.log("In the loop:" + strArray)
        charPos++;

    }
    console.log("after the loop" + strArray);
    strArray.pop();//why pop? because at and of the string for seplacing the character of charpos+1 last e double same n thakbe pythonn erokom so n take pop kore pyton kora hoiche.thats why we used pop
    console.log("After popping the loop" + strArray);
    let result = strArray.join('');
    console.log("Result is after join" + result);
    return result;
}

// Test cases
let str1 = "Python";
str1 = removeCharacter(str1, 0);
console.log(str1);

let str2 = "Python";
str2 = removeCharacter(str2, 3);
console.log(str2);

let str3 = "Python";
str3 = removeCharacter(str3, 5);
console.log(str3);