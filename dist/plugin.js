var capacitorGreetings = (function (exports, core) {
    'use strict';

    const Greetings = core.registerPlugin('Greetings', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.GreetingsWeb()),
    });

    class GreetingsWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GreetingsWeb: GreetingsWeb
    });

    exports.Greetings = Greetings;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
