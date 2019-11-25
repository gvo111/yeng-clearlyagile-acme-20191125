import {Get, Controller, Param} from '@nestjs/common'
import {Greeting, GreetingsBuilder} from './greetings-builder';
import {StandardResponse} from '../types/standard-response';

@Controller('greetings')
export class GreetingsController {

    @Get()
    getDefaultGreeting(): StandardResponse<Greeting> {
        const greetingsBuilder = new GreetingsBuilder();
        const data = greetingsBuilder.build();

        return {error: null, data };
    }

}
