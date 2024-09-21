import { WebPlugin } from '@capacitor/core';

import type { GreetingsPlugin } from './definitions';

export class GreetingsWeb extends WebPlugin implements GreetingsPlugin { 
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);  
    return options;
  }
}
