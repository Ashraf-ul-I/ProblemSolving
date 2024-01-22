const checkSign = (x, y) => ((x < 0 && y > 0) || (x > 0 && y < 0))

console.log(checkSign(-10, 10));