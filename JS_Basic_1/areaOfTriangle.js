
function areaOfTriangle(a, b, c) {
    let s = semiPerimeter(a, b, c);
    let areaOfTriangle = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
    return areaOfTriangle;

}
function semiPerimeter(a, b, c) {
    let s = Math.abs((a + b + c) / 2);
    return s;

}

console.log(areaOfTriangle(5, 6, 7))