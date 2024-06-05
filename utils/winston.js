const winston = require('winston');
require('winston-daily-rotate-file');
// creates a new Winston Logger
const logger = new winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.DailyRotateFile({ filename: './logs/%DATE%.log', level: 'info', 'datePattern': 'yyyy-MM-DD', 'prepend': true }),
    ],
    exitOnError: false
});
module.exports = logger;