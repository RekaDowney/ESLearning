'use strict';

function method(data) {
    console.log(this, data);
}

let person = {username: 'Reka', age: 25};

// 回顾：call 和 apply
// call 方式将函数的参数以可变参数形式传入，同时第一个参数用于 this 绑定结果，因此此时函数的 this 变成 person。同时立即执行函数
console.error('call 方式');
method.call(person, 'Rachel');

// apply 方式将函数的参数以数组形式传入，同时第一个参数用于 this 绑定结果，因此此时函数的 this 变成 person。同时立即执行函数
console.error('apply 方式');
method.apply(person, ['Rachel']);

// bind 方式直接将第一个参数用于 this 绑定结果，因此此时函数的 this 变成 person，同时返回 this 绑定后的新函数
// 由于 bind 不是立即执行函数，因此想要执行函数必须通过 (param1, param2) 方式执行
console.error('bind 方式');
let newMethod = method.bind(person);
newMethod('Rachel');