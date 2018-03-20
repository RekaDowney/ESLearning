// 解构赋值
// 对象的解构赋值
let person = {username: 'Rachel', age: 23};

// 将 person 对象的 username 属性和 und 属性分别赋值给 username 和 und 变量
let {username, und} = person;
console.log(username, und);

// 由于上面的解构赋值已经生命了 username 字段，因此下面的解构赋值会报语法错误
// SyntaxError: Identifier 'username' has already been declared
// let {username} = person;

let {age} = person;
console.log(age);

// 数组的解构赋值
let array = [1, 2, 3, 'four', true];
// 跳过前两个成员，将第三、四个成员分别赋值给 third 和 fourth 字段
let [, , third, fourth] = array;
console.log(third, fourth);

// 函数形参的解构复制
function info({username, age}) {
    console.log(username, age);
}

info(person);

