import { Module } from '@nestjs/common';
import { AppController, ListController } from './app.controller';
import { AppService, ListService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DemoModule, UserModule],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}
