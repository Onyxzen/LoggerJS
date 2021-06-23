import { style } from './color.js';
import { time } from './time.js';

/**
 * @param {string} messsage
 * The string to log
 * 
 * @returns {void}
 * Return `void`
 * 
 * @example
 * ```js
 * info('Info');
 * ```
 */
export function info(messsage) {
    return console.log(`(${style.green}Info${style.reset}): [${style.brightBlue}${time()}${style.reset}]: ${messsage}`);
}

/**
 * @param {string} messsage
 * The string to log
 * 
 * @returns {void}
 * Return `void`
 * 
 * @example
 * ```js
 * error('Error');
 * ```
 */
export function error(messsage) {
    return console.log(`(${style.red}Error${style.reset}): [${style.brightBlue}${time()}${style.reset}]: ${messsage}`);
}

/**
 * @param {string} messsage
 * The string to log
 * 
 * @returns {void}
 * Return `void`
 * 
 * @example
 * ```js
 * warn('Warning');
 * ```
 */
export function warn(messsage) {
    return console.log(`(${style.red}${style.yellow}Warning${style.reset}): [${style.brightBlue}${time()}${style.reset}]: ${messsage}`);
}

/**
 * @param {string} type
 * The type to log
 * 
 * @param {string} color
 * The color of the type
 * 
 * @returns {(message: string) => void}
 * Return a new function
 * 
 * @example
 * ```js
 * warn('Warning');
 * ```
 */
export function createLogger(type, color) {
    if (!(color in style)) {
        throw new TypeError(`Unssopperted color: ${color}`);
    }

    /**
     * @param {string} messsage
     * The string to log
     * 
     * @returns {void}
     * Return `void`
     */
    return function(message) {
        return console.log(`(${style[color]}${type}${style.reset}): [${style.brightBlue}${time()}${style.reset}] ${message}`);
    }
}