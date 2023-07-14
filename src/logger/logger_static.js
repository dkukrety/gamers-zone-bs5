// Ref
// https://www.scaler.com/topics/javascript/static-methods-in-javascript/

class Logger {
    static logLevel = 'info';

    static setLogLevel(level) {
        Logger.logLevel = level;
        console.log(`Log level set to ${level}`);
    }

    static log(message) {
        if (Logger.shouldLog()) {
            console.log(`[${Logger.logLevel.toUpperCase()}] ${message}`);
        }
    }

    static shouldLog() {
        const levels = ['info', 'warning', 'error'];
        return levels.indexOf(Logger.logLevel) >= levels.indexOf('info');
    }
}

Logger.setLogLevel('warning');
Logger.log('This is an informational message.'); // Will not be logged

Logger.setLogLevel('info');
Logger.log('This is another informational message.'); // Will be logged
