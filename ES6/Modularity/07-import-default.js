import User, {array, json as person} from "./06-export-default";
// 模块默认导出的变量必须放在 {} 语句块之前，不可以放在{}内部（运行时报错）或者{}之后（语法错误）
// import {array, json as person}, User from "./06-export-default";
// import {User, array, json as person} from "./06-export-default";

console.log(new User('Reka').toString());

console.log(array, person);