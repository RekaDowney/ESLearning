// promise 异步编程

let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let number = Math.round(Math.random() * 10);
        console.log('当前值为：', number);
        if (number >= 5) {
            resolve(number);
        } else {
            reject(`number[${number}] less than 5`);
        }
    }, 1000);
});

let onfulfilled = result => console.log('请求成功', result);
let onrejected = error => console.error('发生异常', error);

promise.then(onfulfilled, onrejected);
