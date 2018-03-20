// 箭头运算符
// 形参列表部分
// 无形参，必须携带 ()
let noParam = () => console.log('noParam is called');
noParam(); // noParam is called

// 仅有一个形参，可以省略 ()
let oneParam = (data) => console.log(`oneParam is called, data is ${data}`);
oneParam('One'); // oneParam is called, data is One
oneParam = data => console.log(`oneParam is called, data is ${data}`);
oneParam('One'); // oneParam is called, data is One

// 不止一个形参，不可以省略 ()
let moreThanOneParam = (x, y) => console.log(x + y);
moreThanOneParam(1, 2); // 3

// 函数体部分
// 仅有一条语句或者表达式，可以省略 {}，可以省略 return 语句，默认将该语句或者表达式的返回值作为函数的返回值
let expressionBody = (x, y) => x + y;
console.log(expressionBody(1, 2)); // 3
let statementBody = (x, y) => console.log(x + y);
console.log(statementBody(1, 2)); // undefined，这是因为 console.log 方法返回值为 undefined

// 不止一条语句或者表达式，此时不可以省略 {}，默认返回值都是 undefined，必须通过 return 语句强制指明返回内容
let defaultReturn = data => {
    console.log('defaultReturn', data);
    data.toLowerCase();
};
console.log(defaultReturn('Default')); // defaultReturn default // undefined

let explicitReturn = data => {
    console.log('explicitReturn', data);
    return data.toLowerCase();
};
console.log(explicitReturn('Explicit')); // explicitReturn explicit // undefined

// 箭头函数体的 this 指向问题
// 如果箭头函数的外层存在函数，箭头函数体的 this 就是外层函数的 this
// 如果箭头函数的外层不存在函数，则箭头函数体的 this 是 window
let outerInner = {
    outer() {
        (() => console.log('inner', this))();
    }
};
outerInner.outer();