// 形参默认值

function withDefault(x = 1, y = 100) {
    return x + y;
}

let wd = (x = 1, y = 100) => x + y;

console.log(withDefault(12) === 112);
console.log(wd() === 101);
console.log(wd(99) === 199);