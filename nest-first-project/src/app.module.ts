import { Module } from '@nestjs/common';
import { AppController, ListController } from './app.controller';
import { AppService, ListService } from './app.service';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [DemoModule],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}
