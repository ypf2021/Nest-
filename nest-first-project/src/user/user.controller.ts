import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Headers, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(@Query() query) {
    console.log('请求参数', query);
    return {
      code: 200,
      message: query.name
    }
  } 

  // get 请求 动态参数
  @Get(':id')
  findOne(@Param() param) {
    console.log('请求参数', param);
    return {
      code: 200,
      message: param.id
    }
  }

    // post 请求 @Body 中可以加入特定的参数名
    @Post()
    @HttpCode(500)
    Create(@Body('age') age) {
      console.log('请求参数age', age);
      return {
        code: 200,
        message: age
      }
    }

}

// @Request()	                  req          
// @Response()	                res                   
// @Next()	                    next
// @Session()	                  req.session
// @Param(key?: string)       	req.params/req.params[key]s
// @Body(key?: string)	        req.body/req.body[key]
// @Query(key?: string)	        req.query/req.query[key]
// @Headers(name?: string)   	  req.headers/req.headers[name]
// @HttpCode
