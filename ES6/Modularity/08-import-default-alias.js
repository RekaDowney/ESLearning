// 模块默认导出的变量在导入的时候实际上就是一次别名映射，不可以使用 User as MyUser 进行别名
import MyUser, {array, json as person} from "./06-export-default";

console.log(new MyUser('Reka').toString());

console.log(array, person);