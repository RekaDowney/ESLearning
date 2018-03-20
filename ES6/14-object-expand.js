// 对象方法扩展
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

let target = {};
let source1 = {username: 'Reka', age: 24};
let source2 = {username: 'Reka', age: 25};
let source3 = {username: 'Reka', age: 25, gender: 'male'};
let assign = Object.assign(target, source1, source2, source3);
console.log(assign);
console.log(target);

