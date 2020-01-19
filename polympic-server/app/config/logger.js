const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.File({ filename: './log/error.log', level: 'error', maxsize: 5242880, maxFiles: 5 }),
    new transports.File({ filename: './log/trace.log', maxsize: 5242880, maxFiles: 5 })
  ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    )
  }));
}

module.exports = {
  logTheError: (error) => {
    logger.log('error', error);
  },
  LogTheInfo: (info) => {
    logger.log('info', info);
  },
  LogTheTransaction: (id, info, status = 'info') => {
    logger.log(status, `transactionId = ${id} -- ${info}`);
  }
};
