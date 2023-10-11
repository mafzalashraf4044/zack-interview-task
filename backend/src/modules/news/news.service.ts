import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserService {
  async getTopStories(): Promise<boolean> {
    return true;
  }
}
