// export * from 'otherModule' 可以直接将其他模块导出的变量在本模块中导出
// 主要问题：其他模块的变量名不可以在本模块中出现重新赋值操作。（通常不建议使用 export * from 语法）
export * from './04-export-once';

// 导出常量
export const PI = 3.1415926;

// TypeError: Cannot set property json of #<Object> which has only a getter
/*
export let json = {
    name: 'Reka',
    gender: 'male'
};
*/