const str_con_cat = (str1, str2) => {
    const m = Math.min(str1.leng, str2.length);
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);

};

console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));