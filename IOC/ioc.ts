// 底层类
class A {
    name: string
    constructor(aname: string){
        this.name = aname;
    }
}

class B {
    name: string
    constructor(bname: string){
        this.name = bname;
    }
}

// IOC容器
class Ioc{
    private service: {[key: string]: any} = {};
    constructor(){};
    register(name: string, value: any): void{
        this.service[name] = value;
    }
    get(name: string): any{
        return this.service[name]
    }
}

// 注册依赖
let iocContainer = new Ioc();
iocContainer.register('a', new A("A"));
iocContainer.register('b', new B("B"));

// 获取依赖
class C{
    a: A;
    b: B;
    constructor(container: Ioc){
        this.a = container.get('a');
        this.b = container.get('b');
    }
}

// 写了一个中间件，来收集依赖，主要是为了解耦，减少维护成本