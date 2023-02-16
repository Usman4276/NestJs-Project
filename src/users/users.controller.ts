import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { UserServices } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UserServices) {}

  //Add user
  @Post('/addUser')
  addUser(@Body() user: UserDto): string {
    return this.userServices.AddUser(user);
  }

  //Get Users
  @Get('/getUsers')
  findAll(): UserDto[] {
    return this.userServices.GetUser();
  }

  //Delete Users
  @Delete('/deleteUsers/:id')
  deleteUsers(@Param('id') id: string): string {
    return this.userServices.DeleteUser(id);
  }

  //Update Users
  @Put('/updateUsers')
  updateUsers(): string {
    return this.userServices.UpdateUser();
  }
}
