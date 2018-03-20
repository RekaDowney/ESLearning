// 导入时直接使用 export 的别名映射
import {numList, person} from "./09-export-alias";

// 导入时直接重命名默认导出
import MyUser from "./09-export-alias";

console.log(numList, person, new MyUser('Reka').toString());