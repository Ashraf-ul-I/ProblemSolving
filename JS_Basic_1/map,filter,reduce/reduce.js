
const arr = [5, 1, 3, 2, 6];
//sum or max

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const output = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
})

console.log(output);
console.log(findSum(arr));

const users = [
    { firstname: "askhay", lastname: "saini", age: 26 },
    { firstname: "Ashraful", lastname: "islam", age: 24 },
    { firstname: "Sifat ", lastname: "Ullah", age: 24 },
    { firstname: "Deepika", lastname: "Padukun", age: 35 },
]

const results = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(results);

const resultsFilter = users.filter((x) => x.age < 26).map((x) => x.firstname);
console.log(resultsFilter);


const fName = users.reduce((acc, curr) => {
    if (curr.age < 26) {
        acc.push(curr.firstname);
    }
    return acc;
}, []);

console.log(fName);