// 数组扩展
// from 将伪数组封（例如 arguments 或者 document.getElementsByName() 结果）装成真实的数组
function arrayFromTest() {
    // 伪数组无法调用 forEach 方法
    // arguments.forEach((item, idx) => console.log(idx + ' --> ' + item));
    let anies = Array.from(arguments);
    anies.forEach((item, idx) => console.log(idx + ' --> ' + item));
}

arrayFromTest('i', 'b', 'e', 'z');

// of 将变长参数转成数组
let strings = Array.of('A', 'z', 'T', 'W', 'o', 1, false);
console.log(strings);

let arr = [4, 8, 1, 6, 32, 12, 7, 32];

// find 找到第一个满足条件的元素并返回
console.log(arr.find((value, idx, arr) => value > 10)); // 32

// findIndex 找到第一个满足条件的元素并返回元素对应索引
console.log(arr.findIndex((value, idx, arr) => value > 10)); // 4
