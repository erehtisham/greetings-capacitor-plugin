import { WebPlugin } from '@capacitor/core';
import type { GreetingsPlugin } from './definitions';
export declare class GreetingsWeb extends WebPlugin implements GreetingsPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
