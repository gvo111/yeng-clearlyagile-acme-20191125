import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {GreetingsController} from './greetings/greetings-controller';

@Module({
    controllers: [AppController, GreetingsController],
})
export class AppModule {}
