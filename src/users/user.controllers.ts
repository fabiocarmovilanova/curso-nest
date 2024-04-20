import { Controller, Get, Param } from '@nestjs/common';

type ParamUser = {
  id: string
}

@Controller()
export class UserController {
  @Get('/users/:id')
  findByid(@Param() params: ParamUser) {
    return 'usuario é o: ' + params.id;
  }
}
