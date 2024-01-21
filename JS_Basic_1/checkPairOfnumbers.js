// function checkPair() {
//     let n = [1, 2, 24, 6, 17];
//     let sum = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === 50) {
//             return true;
//         } else {
//             sum = sum + n[i];
//         }
//     }
//     if (sum === 50) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkPair());

//In efficient way using the setwe can solved the problem like

function checkPair() {
    let n = [1, 2, 24, 6, 50];
    let complementSet = new Set();
    let hasValue50 = false;

    for (let i = 0; i < n.length; i++) {
        let currentNumber = n[i];
        let complement = 50 - currentNumber;

        // Check if the current element's complement exists in the set
        if (complementSet.has(complement)) {
            return true;
        }

        console.log("currentNumber is:" + currentNumber);

        // Add the current element to the set
        complementSet.add(currentNumber);
        let complementSetArray = Array.from(complementSet);
        console.log("complementSet is: " + complementSetArray);

        // Check if the current element is 50
        if (currentNumber === 50) {
            hasValue50 = true;
        }
    }
    // Check if there is a pair that adds up to 50 or if 50 itself is present
    return hasValue50 || false;
}

console.log(checkPair());

