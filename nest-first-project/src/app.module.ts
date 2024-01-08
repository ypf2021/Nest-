import { Module } from '@nestjs/common';
import { AppController, ListController } from './app.controller';
import { AppService, ListService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module'
@Module({
  imports: [
    DemoModule,
    UserModule,
    // 动态模块导入，调用那个方法，并且可以传参 
    ConfigModule.fullRoot({path: '/ypf'})
  ],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule { }
