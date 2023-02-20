import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.body.name || !req.body.password) {
      res.json({ error: 'empty input fields' });
    } else {
      next();
    }
  }
}
