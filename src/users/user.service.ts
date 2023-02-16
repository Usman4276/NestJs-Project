import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserServices {
  public user: UserDto[] = [];

  AddUser(user: UserDto): string {
    //id auto-generated
    user.id = uuidv4();
    this.user.push(user);
    return 'user added successfully';
  }
  GetUser(): UserDto[] {
    return this.user;
  }
  DeleteUser(id: string): string {
    //filtering the user by id from the array of objects
    const delUserIndex = this.user.filter((currentObj) => {
      if (currentObj.id === id) return this.user.indexOf(currentObj);
    });
    console.log(
      '🚀 ~ file: user.service.ts:23 ~ UserServices ~ delUserIndex ~ delUserIndex',
      delUserIndex,
    );

    // if(delUserIndex) this.user.splice(delUserIndex,1);
    return 'user deleted successfully';
  }
  UpdateUser(): string {
    return 'user is updatedd';
  }
}
