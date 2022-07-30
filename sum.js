//sum.js
let sum = (num) => {
    // 1 + 2 + 3 +..... + n
    let result = 0;
    for(let i = 1; i <= num; i++){
        result += i;
    }
    return result;
};

console.log(sum(1));
console.log(sum(3));
console.log(sum(10));