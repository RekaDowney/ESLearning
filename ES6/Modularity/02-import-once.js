import {numVal, val, array, json, pow, User} from './01-export-separately';

console.log(numVal, val, array, json, pow(2), pow(2, 3), new User('Reka').toString());

setTimeout(() => console.log(numVal, val, array, json, pow(2), pow(2, 3), new User('Reka').toString()), 700);

// array = [5, 6, 7]; // SyntaxError: 02-import.js: "array" is read-only
// 可以修改 array 的结构，array 变量指向的内存地址不变
array.push(4);
console.log(array);

// numVal = 11; // SyntaxError: 02-import.js: "numVal" is read-only
// json = {gender: 'male'}; // 不可以赋值 SyntaxError: 02-import.js: "json" is read-only

// 可以修改 json 的结构，json 变量指向的内存地址不变
json.gender = 'male';
console.log(json); // { name: 'Reka', age: 24, gender: 'male' }
