/**
 * Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
 */
const replaceTheAdjacent = (n) => {

    if (n % 2 !== 0) {
        return false;
    }

    let result = 0;
    let x = 1;

    while (n !== 0) {
        let dg1 = n % 10;
        let dg2 = ((n - dg1) / 10) % 10;

        result += x * (10 * dg1 + dg2);

        n = Math.floor(n / 100);
        x *= 100;
    }
    return result;

}

console.log(replaceTheAdjacent(1234));