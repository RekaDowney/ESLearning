let username = 'Reka';
let age = 25;

// username 属性的值为 username 变量，因此可以省略
// age 属性的值为 age 变量，因此可以省略
// getName 方法省略了 :function 前缀
let person = {
    username, age, getName() {
        return this.username;
    }
};

console.log(person);
console.log(JSON.stringify(person), person.getName());