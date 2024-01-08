import { Module, Global, DynamicModule } from '@nestjs/common';

type Options = {
    path: string
}
// Golbal() 装饰后，再由 app的module import进入，就可以在所有关联的模块中使用 这里的service了
@Global()
@Module({})
export class ConfigModule {
    // 动态模块，支持传入参数
    static fullRoot(options: Options): DynamicModule{
        return {
            module: ConfigModule,
            providers: [{
                provide: 'Config',
                useValue: { baseUrl: '/api' + options.path }
            }],
            exports: [{
                provide: 'Config',
                useValue: { baseUrl: '/api' + options.path }
            }]
        }
    }
}