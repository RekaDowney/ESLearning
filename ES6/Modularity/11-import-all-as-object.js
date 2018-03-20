// 此时将 numList， person 和 default（实际上是 User 这个类）挂载在 data 上
// ⭐ 只有当模块采用 export {val as default} 导出时，模块的默认变量会以 default 变量挂载在 data 上 ⭐
import * as data from './09-export-alias';

// 使用 User 类时必须通过 new data.default() 方式使用
console.log(data.numList, data.person, new data.default('Reka').toString());
let User = data.default;
console.log(new User('Reka').toString());


// 此时将 numList， person 和 default（实际上是 User 这个类）挂载在 mData 上
// 同时将 User 这个类也映射 MUser 变量上
import MUser, * as mData from './09-export-alias';

console.log(mData.numList, mData.person, new mData.default('Reka').toString(), new MUser('Reka').toString());


// 此时会将 array，json 挂载在 data6 上，而 MyUser 则是 User 类的映射。 User 类没有挂载在 data6 上
// ⭐ 当模块采用 export default val 导出默认变量时，该默认变量不会被挂载在 data6 上 ⭐
import MyUser, * as data6 from './06-export-default';

console.log(data6.array, data6.json, new MyUser('Reka').toString());