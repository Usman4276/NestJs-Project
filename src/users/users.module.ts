import { Module } from '@nestjs/common';
import { UserServices } from './user.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  providers: [UserServices],
  controllers: [UsersController],
  exports: [],
})
export class UsersModule {
  constructor() {
    console.log('UsersModule');
  }
}
