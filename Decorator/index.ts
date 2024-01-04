// 装饰器是一种特殊的类型声明，他可以附加在类，方法，属性，参数上面，可以修改他们的行为

// 首先需要开启 experimentalDecorators 选项

// 类装饰器
const classDecorator: ClassDecorator = (target: Function) => {
    // 参数 target 是当前装饰的构造函数本身
    console.log("类：", target);
    target.prototype.__name = "xxx";
}

@classDecorator // 经过装饰器时会自动执行，打印 类：[class Person]
class Person {
    constructor() { };
}

const p: any = new Person();
console.log(p.__name); // xxx
console.log('----------------')


// 方法装饰器

const methodDecorator: MethodDecorator = (target: any, key: string | symbol, descriptor: PropertyDescriptor) => {
    // 参数 target 是当前装饰的构造函数的 原型对象. key 当前装饰的方法名 descriptor 当前装饰的方法描述
    console.log("原型对象：", target);
    console.log("方法名key：", key);
    console.log("方法描述：", descriptor);
}

class Xiaoman {
    public name: string
    constructor() {
        this.name = ''
    }
    @methodDecorator
    getName(name: string, age: number) {
        return this.name
    }
}
console.log('----------------')


// 属性装饰器
const propertyDecorator: PropertyDecorator = (target: any, key: string | symbol) => {
    // key: 类的原型对象；key是健名
    console.log("原型对象：", target);
    console.log("方法名key：", key);
}


class Xiaoman2 {
    @propertyDecorator
    public name: string
    constructor() {
        this.name = ''
    }
    getName() {
        return this.name
    }
}

console.log('----------------')

// 参数装饰器
const parameterDecorator: ParameterDecorator = (target: any, key: string | symbol | undefined, index: number) => {
    // key: 类的原型对象；key是健名; index是参数索引
    console.log("原型对象：", target);
    console.log("方法名key：", key);
    console.log("参数索引：", index);
}

class Xiaoman3 {
    public name: string
    constructor() {
        this.name = ''
    }
    getName(name: string, @parameterDecorator age: number) {
        return this.name
    }
}