// 数组支持 includes 查询

let arr = [1, 2, 34, 45, 'as', '12'];

console.log(arr.includes(12)); // false
console.log(arr.includes('12')); // true
console.log(arr.includes(34)); // true

// 从第二个元素（索引为 1）开始查询是否存在元素 2
console.log(arr.includes(2, 1)); // true

console.log(arr.includes(2, 2)); // false
