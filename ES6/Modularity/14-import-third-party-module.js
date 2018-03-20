// 导入第三方模块时，不可以以 ./ 或者 ../ 前缀开头
// jQuery requires a window with a document
// import $ from 'jquery';

// 由于 jQuery 必须在浏览器环境下使用，因此这里改用 lodash 做第三方模块导入实例
import _ from 'lodash';


console.log(_.toString());

let pow = (base, exp = 2) => base ** exp;

let square = n => pow(n);

// 这里初步估计是因为 pow 允许接收两个函数，但是 map 方法要求映射函数只能够接收一个参数造成计算出问题
// console.log(_.map([1, 2, 3], pow)); // [ 1, 2, 9 ]

// 将 1，2，3 分别平方后汇聚到数组中
console.log(_.map([1, 2, 3], square)); // [ 1, 4, 9 ]