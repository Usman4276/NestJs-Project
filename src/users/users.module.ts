import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserMiddleware } from './middleware/user.middleware';
import { UserServices } from './user.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  providers: [UserServices],
  controllers: [UsersController],
  exports: [],
})
export class UsersModule implements NestModule {
  constructor() {
    console.log('UsersModule constructor...');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .exclude({ path: 'users/getUsers', method: RequestMethod.GET })
      .forRoutes(UsersController);
  }
}
