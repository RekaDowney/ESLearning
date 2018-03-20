function addAsync(addend, augend, timeout = 50) {
    return new Promise(function (resolve, reject) {
        if ((typeof addend !== 'number') || (typeof augend !== 'number')) {
            throw new TypeError('number required');
        }
        setTimeout(() => resolve(addend + augend), timeout);
    });
}


// 多次执行的方式一
let resultList = [];
addAsync(1, 2)
    .then(result => {
        resultList.push(result);
        return addAsync(2, 3);
    })
    .then(result => {
        resultList.push(result);
        console.log(resultList);
    });

// Promise.all([promise...]) 接收 Promise 数组参数，等待所有的异步任务执行完毕后再执行 then
Promise.all([addAsync(1, 2), addAsync(2, 3)])
    .then(result => {
        // 返回的结果
        console.log(result);
    });

// 只要有一个 Promise 报错，都将导致 all 失败 all TypeError: number required
Promise.all([addAsync('1', 2), addAsync(2, 3)])
    .then(result => {
        // 返回的结果
        console.log(result);
    }, errorReason => {
        console.error('all', errorReason);
    });

// Promise.race([promise...]) 接收 Promise 数组参数，等待其他任何一个 Promise 执行完毕后立即执行 then，同时取消剩余的 Promise
Promise.race([addAsync(1, 20, 200), addAsync(20, 20)])
    .then(result => {
        console.log(result);
    }, errorReason => {
        console.error(errorReason);
    });

// 只要有一个 Promise 报错，都将导致 race 失败 race TypeError: number required
Promise.race([addAsync(1, '20', 200), addAsync(20, 20)])
    .then(result => {
        console.log(result);
    }, errorReason => {
        console.error('race', errorReason);
    });


setTimeout(() => {

    console.log();
    console.log();
    console.log();

// Promise.resolve(object) 直接将 object 作为 Promise 成功执行的结果
    Promise.resolve({username: 'Reka', age: 25})
        .then(result => console.log(result));

// 上面的 Promise.resolve() 等价于下面的语句
    new Promise((resolve, reject) => resolve({username: 'Reka', age: 25}))
        .then(result => console.log(result));

// Promise.reject(object) 直接将 object 作为 Promise 执行失败的结果
    Promise.reject({code: 400, message: 'Bad Request'})
        .then(null, errorReason => console.error(errorReason));

// 上面的 Promise.resolve() 等价于下面的语句
    new Promise((resolve, reject) => reject({code: 400, message: 'Bad Request'}))
        .catch(errorReason => console.error(errorReason));

}, 1000);
