import { Module } from '@nestjs/common';
import { UserController } from './users/user.controllers';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
