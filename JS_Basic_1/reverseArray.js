/**
 * Write a JavaScript program to reverse the elements of a given array of integers of length 3. 
 */

const reverseArray = (arr) => {
    let val;
    let length = arr.length;
    let newArr = [];
    if (length > 3) {
        while (length > 0) {
            val = arr.pop();
            newArr.push(val);
            length--;
        }
        return newArr;
    } else {
        return "Not Valid Length";
    }

}
console.log(reverseArray([1, 2, 3, 4, 5]));