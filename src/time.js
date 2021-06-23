/**
 * @param {number} ms
 * The current timestamp. Defaults to `Date.now()`
 * 
 * @returns {string}
 * The formatted time string
 * 
 * @example
 * ```js
 * console.log(time()); // 13:55:26
 * ```
 */
export function time(ms = Date.now()) {
    const time = new Date(ms).toString().split(/ +/);
    return time[4]
}