const string_check = (str1) => (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py' ? str1 : `Py${str1}`);

console.log(string_check("Python"));

console.log(string_check("thon"));


const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);