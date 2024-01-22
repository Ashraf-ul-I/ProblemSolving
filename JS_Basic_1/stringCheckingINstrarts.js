const stringCheck = (str, check) => {
    let strJava = str.substring(0, check.length);
    if (strJava === check) {
        return true;
    } else {
        return false;
    }

}

console.log(stringCheck("Javascript", "Java"));

