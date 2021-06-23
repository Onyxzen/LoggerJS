import * as logger from '../src/index.js';

logger.info('Info');
logger.error('Error');
logger.warn('Warning');
logger.log('Log');

const info = logger.createLogger('Info', 'brightBlue');
info('test');