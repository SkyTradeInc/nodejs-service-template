const moment = require('moment');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      timestamp: () => moment().format('YYYY-MM-DD hh:mm:ss'),
      prettyPrint: true,
      colorize: true,
      humanReadableUnhandledException: true,
      level: 'debug',
    }),
  ],
});

module.exports = logger;
