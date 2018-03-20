// 通过 as 参数可以为导入的变量起别名
import {array as numList, json as person} from './04-export-once';

console.log(numList, person);