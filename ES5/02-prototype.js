"use strict";

// 以指定对象为原型创建新的对象（为新的对象指定新的属性，并对属性进行描述）
// Object.create(prototype, [descriptors])

let person = {username: 'Reka', age: 24};

// * value : 指定值
// * writable : 标识当前属性值是否是可修改的, 默认为true
// * **get方法** : 用来得到当前属性值的回调函数
// * **set方法** : 用来监视当前属性值变化的回调函数
let newPerson = Object.create(person, {
    gender: {
        value: 'Male', // 指定默认值
        writable: true, // 标识当前属性是否可修改，默认为 false
        configurable: true, // 标识当前属性是否可删除，默认为 false
        enumerable: true, // 标识当前属性是否可以被 for in 枚举，默认为 false
    }
});

/*
console.log(newPerson.gender);
// 属性写入操作
newPerson.gender = 'Female';

// 属性删除操作
delete newPerson.gender;

// 属性遍历操作
for (let prop in newPerson) {
    console.log(prop);
}
*/

// 定义一个 fullName 属性，默认 undefined，不可以通过 value 配置项设置默认值
Object.defineProperty(newPerson, 'fullName', {
    // 方法里的 this.value 表示当前属性，如果使用 this.fullName 将会造成 get 或者 set 死循环
    get: function () { // 获取属性时调用属性的 get 方法
        console.info('get');
        return this.value;
    },
    set: function (fullName) { // 设置属性时调用属性的 set 方法
        console.info('set');
        this.value = fullName;
    }
});

// 定义多个属性，默认都是 undefined，不可以通过 value 配置项设置默认值
Object.defineProperties(newPerson, {
    // 方法里的 this.value 表示当前属性，如果使用 this.address 将会造成 get 或者 set 死循环
    address: {
        // 这里不可以定义 writable 配置项
        // writable: true,
        get: function () {
            return this.value;
        },
        set: function (address) {
            this.value = address;
        }
    },
    tel: {
        get: function () {
            return this.value;
        },
        set: function (tel) {
            this.value = tel;
        }
    }
});

newPerson.fullName = newPerson.username + ' full';
console.log(newPerson.fullName);
newPerson.address = 'Guangdong';
console.log(newPerson.address);
newPerson.tel = '18814235674';
console.log(newPerson.tel);