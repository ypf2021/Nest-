import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserService2 } from './user.service2';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
  {
    // 1. 直接使用类 语法糖的拆解
    provide: 'yanpengfei',
    useClass: UserService
  },
  // 2.自定义注入内容
  {
    provide: 'JD',
    useValue: ['TB', 'JD', 'JD']
  },
  UserService2,
  // 3. 使用工厂函数注入，可以使用其他的service或者复杂的逻辑处理
  {
    provide: 'FactoryService',
    // 用inject注入，再在useFactory中作为参数传递
    inject: [UserService2],
    useFactory: (UserService2: UserService2) => {
      // 在这里可以进行操作，最后return不同的类，也可以依赖别的类。
      console.log(UserService2.findAll())
      return 123  
    }
  }],
  // user 的 Service 想暴露给 其他模块使用就可以使用exports 导出该服务
  exports: [UserService]

})
export class UserModule {}
