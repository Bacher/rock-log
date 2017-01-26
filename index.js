/**
 * @typedef {Object} GlobalLog
 * @property {Function} create
 * @property {Function} info
 * @property {Function} warn
 * @property {Function} error
 */

/**
 * @typedef {Object} Log
 * @property {Function} info
 * @property {Function} warn
 * @property {Function} error
 */

/**
 * Create new named log instance
 * @param {string} mName - module name
 * @returns {Log}
 */
function create(mName) {
    var moduleName;

    if (mName !== '__GLOBAL') {
        moduleName = '[' + String(mName) + ']';
    }

    var log = createFunc('log', null);

    log.log = log;
    log.info = createFunc('info', '[I]');
    log.warn = createFunc('warn', '[W]');
    log.error = createFunc('error', '[E]');

    function createFunc(logName, letter) {
        return function() {
            var args = Array.prototype.slice.call(arguments);

            if (moduleName) {
                args.unshift(moduleName);
            }

            if (letter) {
                args.unshift(letter);
            }

            _log(logName, args);
        };
    }

    return log;
}

function ts() {
    var now = new Date();
    return now.getFullYear() + '-' + nn(now.getMonth() + 1) + '-' +nn(now.getDate()) + ' ' + nn(now.getHours()) + ':' + nn(now.getMinutes()) + ':' + nn(now.getSeconds());
}

function nn(_val) {
    var val = String(_val);

    if (val.length < 2) {
        return '0'.repeat(2 - val.length) + val;
    } else {
        return val;
    }
}

function _log(output, args) {
    args.unshift(ts());
    console[output].apply(console, args);
}

/** @type {GlobalLog} */
var globalLog = create('__GLOBAL');
globalLog.create = create;

/** @type {GlobalLog} */
module.exports = globalLog;
