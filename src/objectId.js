"use strict";
//机器ID
let MACHINE_ID = ~~(Math.random() * 0xFFFFFF);
//主键ID
let INDEX_ID = ~~(Math.random() * 0xFFFFFF);

/**
 * MongoDB的ObjectID.toHexString()
 * @returns ObjectID.toHexString()
 * @constructor
 */
function toHexString() {
    let time = ~~(Date.now() / 1000);
    let pid = (typeof process === 'undefined' ? Math.floor(Math.random() * 100000) : process.pid) % 0xFFFF;
    let inc = (INDEX_ID += 1) % 0xFFFFFF;
    let buffer = new Buffer(12);
    buffer[3] = time & 0xff;
    buffer[2] = (time >> 8) & 0xff;
    buffer[1] = (time >> 16) & 0xff;
    buffer[0] = (time >> 24) & 0xff;
    buffer[6] = MACHINE_ID & 0xff;
    buffer[5] = (MACHINE_ID >> 8) & 0xff;
    buffer[4] = (MACHINE_ID >> 16) & 0xff;
    buffer[8] = pid & 0xff;
    buffer[7] = (pid >> 8) & 0xff;
    buffer[11] = inc & 0xff;
    buffer[10] = (inc >> 8) & 0xff;
    buffer[9] = (inc >> 16) & 0xff;
    return buffer.toString("hex");
}
exports.toHexString = toHexString;