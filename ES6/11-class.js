class Animal {
    constructor(name) {
        this.name = name;
    }

    info() {
        return `Animal{name:${this.name}}`;
    }
}

class Bird extends Animal {

    // 静态方法
    static getClassName() {
        return 'Bird(Animal)';
    }

    constructor(name = 'Bird', flyable = true) {
        super(name);
        this.flyable = flyable;
    }

    info() {
        return `Bird{name=${this.name}, flyable=${this.flyable}}`;
    }
}

class Beast extends Animal {
    constructor(name = 'Beast', runnable = false) {
        super(name);
        this.runnable = runnable;
    }

    info() {
        return `Beast{name=${this.name}, runnable=${this.runnable}}`;
    }
}

let weka = new Bird('Weka');
let tiger = new Beast('tiger', true);

console.log(weka.info());
console.log(tiger.info());

console.log(Bird.getClassName());
// console.log(weka.getClassName()); // weka.getClassName is not a function
