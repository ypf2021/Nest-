import { Controller, Get } from '@nestjs/common';
import { AppService, ListService } from './app.service';
import { UserService } from './user/user.service';

// / 路由
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get()
  getHello(): string {
    return this.userService.findAll();
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
