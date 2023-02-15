import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServices {
  GetUser(): string {
    return 'user has got';
  }
  DeleteUser(): string {
    return 'user is deleted';
  }
  UpdateUser(): string {
    return 'user is updated';
  }
}
