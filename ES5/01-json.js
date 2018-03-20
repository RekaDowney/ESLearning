"use strict";

// ES5 引入 JSON 解析
let person = {username: 'Reka', age: 24};

// 将对象转成 JSON 字符串
let jsonPerson = JSON.stringify(person);

// 将 JSON 字符串转成对象
let personFromJson = JSON.parse(jsonPerson);

// object { username: 'Reka', age: 24 }
console.log(typeof person, person);
// string {"username":"Reka","age":24}
console.log(typeof jsonPerson, jsonPerson);
// object { username: 'Reka', age: 24 }
console.log(typeof personFromJson, personFromJson);