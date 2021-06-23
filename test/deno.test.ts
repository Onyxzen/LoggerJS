import * as logger from '../src/index.js';

Deno.test('Logger', () => {
    console.log('\n');
    
    logger.info('Info');
    logger.error('Error');
    logger.warn('Warning')
    
    const info = logger.createLogger('Info', 'brightBlue');
    info('test');
});