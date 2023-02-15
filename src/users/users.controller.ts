import { Controller, Delete, Get, Put } from '@nestjs/common';
import { UserServices } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UserServices) {}

  //Get Users
  @Get('/getUsers')
  findAll(): string {
    return this.userServices.GetUser();
  }

  //Delete Users
  @Delete('/deleteUsers')
  deleteUsers(): string {
    return this.userServices.DeleteUser();
  }

  //Update Users
  @Put('/updateUsers')
  updateUsers(): string {
    return this.userServices.UpdateUser();
  }
}
