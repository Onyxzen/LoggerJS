export function info(message: string): void;
export function error(message: string): void;
export function warn(message: string): void;
export function createLogger(
    type: string,
    color: string,
): (message: string) => void