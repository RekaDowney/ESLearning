let array = [1, 2, 3];
let json = {name: 'Reka', age: 23};

class User {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }
}

// export 导出时可以通过 as 实现别名导出， as default 相当 export default（只能够出现一次，export default 存在性互斥）
export {array as numList, json as person, User as default};