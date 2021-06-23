# LoggerJS
☁️ A simple JavaScript logger

# Example
```js
logger.info('Info');
logger.error('Error');
logger.warn('Warning')

const info = logger.createLogger('Info', 'brightBlue');
info('test');
```

# Features
1. 3 built-in function
2. Custom logger maker
3. Supports background color and underlines
4. No `node_modules`
3. Deno support

# Package
1. [NPM](https://www.npmjs.com/package/@onyxzen/loggerjs 'LoggerJS')
2. [Deno](https://deno.land/x/loggerjs 'LoggerJS')

# Installation
### NPM
```sh
$ npm i @onyxzen/loggerjs
```

### Deno
```
$ deno install https://deno.land/x/loggerjs/mod.ts
```
