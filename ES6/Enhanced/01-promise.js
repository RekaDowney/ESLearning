// ES 标准化 Promise（jQuery 通过 Deferred 实现 Promise）

/*
// 不使用 Promise 时
function addAsync(addend, augend, afterAddFunc) {
    if ((typeof addend !== 'number') || (typeof augend !== 'number')) {
        throw new TypeError('number required');
    }
    setTimeout(() => afterAddFunc(addend + augend), 300);
}

// 回调调用容易陷入 callback hell
addAsync(1, 2, result => {
    console.log('1 + 2 =', result);
    if (result < 5) {
        console.log('result less than 5, add again');
        addAsync(result, 2, result => {
            console.log('1 + 2 + 2 =', result);
            if (result < 5) {
                console.log('result less than 5, add again');
            }
        });
    }
});
*/


function addAsync(addend, augend) {
    return new Promise(function (resolve, reject) {
        if ((typeof addend !== 'number') || (typeof augend !== 'number')) {
            throw new TypeError('number required');
        }
        setTimeout(() => resolve(addend + augend), 1000);
    });
}

/*
addAsync(1, 2)
    .then(value => {
        console.log(value);
        if (value < 5) {
            console.log('result less than 5, add again');
            return addAsync(value, 2);
        }
    }, errorReason => {
        console.error('发生异常: ', errorReason);
    })
    .then(value => {
        console.log(value);
        if (value < 5) {
            console.log('result less than 5, add again');
            return addAsync(value, 2);
        }
    })
    // 由于上一个 then 在条件判断时不满足，因此 Promise 自动封装成类 resolve(undefined)
    .then(value => {
        console.log(value);
        if (value < 5) {
            console.log('result less than 5, add again');
            return addAsync(value, 2);
        }
    })
    .catch(errorReason => {
        console.error('发生异常', errorReason);
    });

console.log('AAA');
*/

// 以上 addAsync 程序执行结果：
// AAA
// 3
// result less than 5, add again
// 5
// undefined

/*
addAsync('1', 32)
    .then(result => {
        console.log(result);
    }, errorReason => {
        // TypeError: number required
        console.error(errorReason);
    })
    // 由于第一次执行结果已经在 then 里面捕获处理了，因此这里 then 被封装成 resolve(undefined) 的回调
    .then(result => {
        console.log(result);
    })
    // 由于第一个 then 已经捕获处理了异常，因此这个 catch 不需要执行
    .catch(errorReason => {
        console.error(errorReason);
    });
*/

// 以上 addAsync 程序执行结果：
/*
TypeError: number required
    at L:\Code\WebStorm_Code\ESLearning\ES6\Enhanced\01-promise.js:31:19
    at new Promise (<anonymous>)
    at addAsync (L:\Code\WebStorm_Code\ESLearning\ES6\Enhanced\01-promise.js:29:12)
    at Object.<anonymous> (L:\Code\WebStorm_Code\ESLearning\ES6\Enhanced\01-promise.js:77:1)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
undefined
 */


addAsync('1', 32)
    .then(result => {
        console.log('then1', result);
    })
    .then(result => {
        console.log('then2', result);
    })
    // 由于上述的所有 then 都没有捕获处理异常，因此这里会被 catch 捕获处理，此时 then 都不执行
    .catch(errorReason => {
        console.error('catch', errorReason);
    });

/*
catch TypeError: number required
    at L:\Code\WebStorm_Code\ESLearning\ES6\Enhanced\01-promise.js:31:19
    at new Promise (<anonymous>)
    at addAsync (L:\Code\WebStorm_Code\ESLearning\ES6\Enhanced\01-promise.js:29:12)
    at Object.<anonymous> (L:\Code\WebStorm_Code\ESLearning\ES6\Enhanced\01-promise.js:112:1)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
*/