import { Controller, Get } from '@nestjs/common';
import { AppService, ListService } from './app.service';

// / 路由
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// /list 路由
@Controller('/list')
export class ListController {
  constructor(private readonly appService: ListService) {}

  @Get()
  getList(): string {
    return this.appService.getList();
  }
}
