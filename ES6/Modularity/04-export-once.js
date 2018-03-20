let array = [1, 2, 3];
let json = {name: 'Reka', age: 23};

// 先定义，后通过 export {var1, var2, var...} 方式可以一次性批量导出
export {array, json};