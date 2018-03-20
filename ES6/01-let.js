// 与 var 相比，let 具有块级作用域

{
    let letVal = 'let';
    var varVal = 'var';
}

console.log(varVal);
// ReferenceError: letVal is not defined
console.log(letVal);

try {
    console.log(letVal);
} catch (e) {
    // ReferenceError: letVal is not defined
    console.log(e.toString());
}