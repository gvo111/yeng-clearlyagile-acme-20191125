import {Get, Controller} from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  async getHello() {
      return 'Hello World!';
  }

}
