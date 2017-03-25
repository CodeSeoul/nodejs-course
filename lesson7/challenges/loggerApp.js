// export the warn, info and error functions so we can use it in logger-app.js
// by assigning it to the exports object.

var logger = require('./logger');

logger.info('This is some information');
logger.warn('something bad is happening');
