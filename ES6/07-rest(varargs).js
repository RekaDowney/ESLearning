// 可变参数

function test(a, b) {
    console.log(a, b);
    console.log(arguments);
    console.log(arguments['0']);
    console.log(arguments['1']);
}

// test(999, 1000);

function rest(a, ...args) {
    console.log('第一个', a);
    args.forEach((item, idx) => console.log(idx + 1, item));
}

rest('99', 'B', 'C', 'D');

// 先需要将 arr2 数组插入到 arr1 的第三个成员后面
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [0, 9, 8, 7, 6];

let newArr = [...arr1.slice(0, 3), ...arr2, ...arr1.slice(3)];
console.log(newArr);