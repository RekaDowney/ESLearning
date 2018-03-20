// 字符串扩展
let source = 'ab2334DSE';
// 是否以指定字符开头
console.log(source.startsWith('ab')); // true
console.log(source.startsWith('Ab')); // false

// 是否以指定字符结尾
console.log(source.endsWith('SE')); // true
console.log(source.endsWith('sE')); // false

// 是否包含指定字符
console.log(source.includes('2334')); // true
console.log(source.includes('234')); // false

// 字符串重复
console.log(source.repeat(3)); // ab2334DSEab2334DSE


// 数值扩展
// 所有的进制前缀都建议使用小写字母
// 二进制
console.log(0B1010 === 10);
console.log(0b1010 === 10);
// 八进制
console.log(0O75 === 61);
console.log(0o75 === 61);
// 十六进制
console.log(0X3F === 63);
console.log(0x3F === 63);

// Number.isFinite 是否是有限数
console.log(Number.isFinite(987654321)); // true
console.log(Number.isFinite(987654321.123)); // true
console.log(Number.isFinite(Infinity)); // false

// isNaN 是否是 NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.parseInt('ab0es')));  // true
console.log(Number.isNaN(1234)); // false

// isInteger 是否是整数
Number.isInteger(123); // true
Number.isInteger(123.0); // true
Number.isInteger(123.45); // false

// parseInt 将字符串转成数字
console.log(Number.parseInt('123', 10) === 123); // true
console.log(Number.parseInt('123', 8) === 83); // true
console.log(Number.parseInt('10', 16) === 16); // true

// trunc 直接将小数点去掉
console.log(Math.trunc(12.34)); // 12
console.log(Math.trunc(12.45)); // 12
console.log(Math.trunc(12.56)); // 12

