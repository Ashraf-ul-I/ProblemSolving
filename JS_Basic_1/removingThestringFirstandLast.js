
const first_last = (str1) => {
    if (str1.length <= 1) {
        return str1;
    }

    const mid_char = str1.substring(1, str1.length - 1);
    console.log((str1.charAt(str1.length - 1)));
    console.log(mid_char);
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}

console.log(first_last('python'));