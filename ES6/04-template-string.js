// 模板字符串

let person = {username: 'Reka', age: 25};

let info = `My name is ${person.username}, I'm ${person.age} years ago!`;
console.log(info);

function constructUrl(queryKey) {
    return `https://google.com/?q=${queryKey}`;
}

console.log(constructUrl('https://stackoverflow.com'));