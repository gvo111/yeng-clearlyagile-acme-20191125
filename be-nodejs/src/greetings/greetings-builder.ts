export interface Greeting {
    text: string;
}

export class GreetingsBuilder {

    build(): Greeting {
        return {text: 'Hello, World!'};
    }
}
