import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ParamUser = {
  id: string
}

type QueryUser = {
  p: string
  r: string
}

type BodyUser = {
  name: string,
  age: number
}

@Controller("/users")
export class UserController {
  @Get('/find/:id')
  findByid(@Param() params: ParamUser) {
    return 'usuario é o: ' + params.id;
  }

  @Get('/findbypages')
  findByPages(@Query() queries:any){
    return "Queries " + JSON.stringify(queries)
  }

  @Post('/create')
  create(@Body() data:BodyUser){
    return {
      ...data,
      id: randomUUID()
    }
  }
}
