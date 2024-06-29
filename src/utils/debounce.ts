export function debounce(func: Function, delay: number) {
    let timeoutId: any;
    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
