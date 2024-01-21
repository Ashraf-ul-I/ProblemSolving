let today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

//add leading zero if the day is less then 10

if (dd < 10) {
    dd = '0' + dd;
}


if (mm < 10) {
    mm = '0' + mm;
}
// Format the date as mm-dd-yyyy and log it
today = mm + '-' + dd + '-' + yyyy;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = mm + '/' + dd + '/' + yyyy;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = dd + '-' + mm + '-' + yyyy;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = dd + '/' + mm + '/' + yyyy;
console.log(today);
