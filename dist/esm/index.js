import { registerPlugin } from '@capacitor/core';
const Greetings = registerPlugin('Greetings', {
    web: () => import('./web').then(m => new m.GreetingsWeb()),
});
export * from './definitions';
export { Greetings };
//# sourceMappingURL=index.js.map