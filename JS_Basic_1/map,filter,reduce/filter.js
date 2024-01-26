//filter function is basically to filter the value inside the array

const arr = [5, 1, 3, 2, 6];

// filter all odd values from the array
const output = arr.filter((isEven) => { return isEven % 2 === 0 });
const GraterThen4 = arr.filter((isGreater4) => { return isGreater4 > 4 });

console.log(output)

console.log(GraterThen4);