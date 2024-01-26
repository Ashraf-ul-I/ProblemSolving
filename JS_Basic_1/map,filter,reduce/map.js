
const arr = [5, 1, 3, 2, 6];

//transform it and get a new array from the original array lie

// Double - [10,2,6,4,4,12]

// so we get multiple by 2 of the old array ..to get this double new array we use map

//in map there need a function that what we do or what we wanted to do
const output = arr.map((x) => { return x * 2 });

const binary = (x) => {
    return x.toString(2);
}
const binaryMap = arr.map(binary);
const binaryMaparrow = arr.map((binary) => binary.toString(2));
console.log(binaryMaparrow);
console.log(output);


