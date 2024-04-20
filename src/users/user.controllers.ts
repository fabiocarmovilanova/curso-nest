import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/helloUser')
  hellorUser() {
    return 'Seja bem vindo';
  }
}
