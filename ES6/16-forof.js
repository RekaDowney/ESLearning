// for of
// 遍历 数组、伪数组（例如 arguments）、Set、Map、字符串

for (let char of 'A1B23C') {
    console.log(char);
}

console.log();
console.log();

for (let item of [1, 'A', 9]) {
    console.log(item);
}

console.log();
console.log();

for (let item of new Set(['Q', 'yu', 5, 'zx'])) {
    console.log(item);
}

console.log();
console.log();

for (let entry of new Map([['k', 'v'], [1, 999]])) {
    console.log(entry); // [ 'k', 'v' ] 和 [ 1, 999 ] 数组
}

console.log();
console.log();

// 不可以使用 {} 对象解构赋值，应该使用 [] 数组解构赋值
// for (let {k, v} of new Map([['k', 'v'], [1, 999]])) {
//     console.log(k, '-->', v); // undefined '-->' undefined
// }

for (let [k, v] of new Map([['k', 'v'], [1, 999]])) {
    console.log(k, '-->', v); // k --> v 和 1 '-->' 999
}
