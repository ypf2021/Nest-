import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Headers, HttpCode, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'

import type { createUserBody } from './type'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('code')
  createCaptcha(@Req() req, @Res() res) {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50, //文字大小
      width: 100,  //宽度
      height: 34,  //高度
      background: '#cc9966',  //背景颜色
    })
    req.session.code = captcha.text
    console.log('setSession')
    res.type('image/svg+xml')
    res.send(captcha.data)
  }

  @Post('create')
  createUser(@Body() body: createUserBody, @Req() req, @Res() res){
    console.log(body)
    // res.type('application/json')
    const {code, password, userName} = body
    let responseContent = {}
    if(password != '' && userName != '' && code != ''){
      console.log('session/code', req.session.code.toLocaleLowerCase(), '/',code.toLocaleLowerCase())
      if(code.toLocaleLowerCase() !== req.session.code.toLocaleLowerCase()){
        responseContent = {msg: '验证码错误', code: '-1'}
      } else {
        responseContent = {msg: '创建成功', code: '0000'}
      }
    } else {
      responseContent = {msg: '信息输入不完整', code: '-1'}
    }
    res.send(JSON.stringify(responseContent))
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
