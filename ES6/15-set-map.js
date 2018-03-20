// Set

// 构造方法
// Set()
// Set(Iterable)，通常为 Set(array)

// 方法
// add(value) 该方法返回 set 对象本身，支持链式调用
// delete(value)
// has(value)
// clear()

// 字段
// size

let set = new Set();
console.log(set.size, set);
set = new Set([1, 2, 3, 4, 3, 2, 1]);
console.log(set.size, set);
set.add('we');
set.delete(3);
console.log(set.size, set);
console.log(set.has('we'));
set.clear();
console.log(set.size, set);

set = new Set();
set.add(1).add(2).add(3).add(4);
console.log(set.size, set);


// 数组结合 Set 可以实现去重
let arr = [1, 2, 3, 3, 3, 2];
console.log(arr.length, arr);
// Array.from 将类数组结构整合成数组
arr = Array.from(new Set(arr));
console.log(arr.length, arr);


console.log();
console.log();
console.log();
console.log();

// Map

// 构造方法
// Map()
// Map([[K1, V1], [K2, V2]])

// 方法
// set(key, value)
// delete(key)
// get(key)
// has(key)
// clear()

// 字段
// size

let map = new Map();
console.log(map.size, map);

map = new Map([['k', 'v'], [12, {username: 'Reka', age: 25}]]);
console.log(map.size, map);
map.set('key', 9999);
console.log(map.size, map);
console.log(map.has('key'));
console.log(map.get('12')); // undefined
console.log(map.get(12)); // { username: 'Reka', age: 25 }

map.delete(12);
console.log(map.size, map);

map.clear();
console.log(map.size, map);
