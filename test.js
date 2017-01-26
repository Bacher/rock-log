const log = require('./index');

log('Simple log 1');
log.log('Simple log 2');
log.info('Information');
log.warn('Warning');
log.error('Danger!');


const myModuleLog = log.create('MY_MODULE');

myModuleLog('Simple log 1');
myModuleLog.log('Simple log 2');
myModuleLog.info('Information');
myModuleLog.warn('Warning');
myModuleLog.error('Danger!');
