export let numVal = 999;

let val = 'hello';
export {val};
// 变量导出后的重新赋值
setTimeout(() => val = 'world', 500);

export let array = [1, 2, 3];

export let json = {
    name: "Reka",
    age: 24
};

export function pow(base, exponential = 2) {
    return base ** exponential;
}

export class User {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }
}