/**
 * Author:Ashraful Islam
 * Created at- 1-21-2024
 * Prbolem: Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
 */

console.log('--------------------');

for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 7);

    if (d.getDay() === 0) {
        console.log("1st January is being a Sunday " + year);
    }
}

console.log('--------------------');