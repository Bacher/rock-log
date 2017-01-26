# Log helper

### Usage examples:

```javascript
const log = require('rock-log');

log('Simple log 1');
log.log('Simple log 2');
log.info('Information');
log.warn('Warning');
log.error('Danger!');
```
##### Output:
```
2017-01-26 13:54:22 Simple log 1
2017-01-26 13:54:22 Simple log 2
2017-01-26 13:54:22 [I] Information
2017-01-26 13:54:22 [W] Warning
2017-01-26 13:54:22 [E] Danger!

```

### And with module name:

```javascript
const myModuleLog = require('rock-log').create('MY_MODULE');

myModuleLog('Simple log 1');
myModuleLog.log('Simple log 2');
myModuleLog.info('Information');
myModuleLog.warn('Warning');
myModuleLog.error('Danger!');
```

##### Output:
```
2017-01-26 13:54:22 [MY_MODULE] Simple log 1
2017-01-26 13:54:22 [MY_MODULE] Simple log 2
2017-01-26 13:54:22 [I] [MY_MODULE] Information
2017-01-26 13:54:22 [W] [MY_MODULE] Warning
2017-01-26 13:54:22 [E] [MY_MODULE] Danger!

```
