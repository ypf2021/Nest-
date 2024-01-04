
import axios from 'axios' 
// 使用装饰器封装请求功能

const Get = (url: string): MethodDecorator => {
    return function (target: any, key: any, descriptor: PropertyDescriptor): void {
        const fn = descriptor.value;
        axios.get(url).then(res => {
            fn(res, { status: 200, message: '请求成功' })
        }, err => {
            fn(err, { status: 500, message: '请求失败' })
        })
    }
}

class Controller {
    constructor() {};
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(result: any, status: {status: number, mnessage: string}) {
        if(status.status === 200){
            console.log(result.data.result.list, status)
        }
    }
}