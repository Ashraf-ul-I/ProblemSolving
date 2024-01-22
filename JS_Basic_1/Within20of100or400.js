function checkingRange(x) {
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}

console.log(checkingRange(80))