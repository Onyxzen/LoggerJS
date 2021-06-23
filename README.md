# LoggerJS
☁️ A simple JavaScript logger

# Note
The NPM version is currently facing some technical issues.\
Please clone this GitHub repository if you want to use it with NodeJS

# Example
```js
// Deno
import * as logger from 'https://deno.land/x/loggerjs/mod.ts';

// NodeJS
import * as logger from '@onyxzen/loggerjs';

// Built-in logger types
logger.info('Info');
logger.error('Error');
logger.warn('Warning');
logger.log('Log');

// Custom logger maker
const info = logger.createLogger('Info', 'brightBlue');
info('test');
```

# Features
1. 4 built-in logger type
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
