'use strict';

// 1. Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
// 2. Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
// 3. Array.prototype.forEach(function(item, index){}) : 遍历数组
// 4. Array.prototype.map(function(item, index){}) : 遍历数组返回一个新的数组，返回加工之后的值
// 5. Array.prototype.filter(function(item, index){}) : 遍历过滤出一个新的子数组， 返回条件为true的值

let lst = [4, 3, 2, 1, 7, 4, 3, 2, 9, 8, 7, 5];

// 元素所在的第一个索引
console.log(lst.indexOf(7));

// 元素所在的最后一个索引
console.log(lst.lastIndexOf(7));

// 遍历操作
lst.forEach(function (item, idx) {
    console.log(idx + ' --> ' + item);
});

// 映射操作
let lst2 = lst.map(function (item, idx) {
    return item * 2;
});
console.log(lst2);

// 过滤操作，获取索引大于 4 并且值大于 5
lst2 = lst.filter(function (item, idx) {
    return idx > 4 && item > 5;
});
console.log(lst2);
