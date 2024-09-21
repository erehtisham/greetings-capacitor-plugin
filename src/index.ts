import { registerPlugin } from '@capacitor/core';

import type { GreetingsPlugin } from './definitions'; 

const Greetings = registerPlugin<GreetingsPlugin>('Greetings', { 
  web: () => import('./web').then(m => new m.GreetingsWeb()),
});

export * from './definitions';
export { Greetings };
