import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  //Get Users
  @Get('/getUsers')
  findAll(): string {
    return 'here is the user';
  }

  //Delete Users
  @Delete('/deleteUsers')
  deleteUsers(): string {
    return 'user deleted';
  }

  //Update Users
  @Put('/updateUsers')
  updateUsers(): string {
    return 'user updated';
  }
}
