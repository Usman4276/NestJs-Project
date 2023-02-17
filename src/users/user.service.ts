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

  DeleteUser(id: string): {} {
    const delUserObject = this.user.filter((user) => {
      if (user.id === id) return user;
    });

    this.user.map((value: UserDto) => {
      if (value.id === id) {
        return this.user.splice(this.user.indexOf(value), 1);
      }
    });

    return {
      comment: 'user deleted successfully',
      deletedUser: delUserObject,
    };
  }

  UpdateUser(id: string, user: UserDto): {} {
    if (id && user) {
      const delUserObject = this.user.filter((user) => {
        if (user.id === id) return user;
      });

      this.user.map((item: UserDto) => {
        if (item.id === id) {
          item.name = user.name;
          item.password = user.password;
        }
      });

      return {
        comment: 'user updated successfully',
        updatedUser: delUserObject,
      };
    } else {
      return { error: 'empty input field' };
    }
  }
}
