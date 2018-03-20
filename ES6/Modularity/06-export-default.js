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

export {array, json};
// 通过 export default 可以导出当前模块的默认变量，此时 import 的时候可以将该变量写在 {} 语法前面
export default User;
// 每个模块只能够有一个 export default 语句。
// export default array; // SyntaxError: 06-export-default.js: Only one default export allowed per module. (17:0)