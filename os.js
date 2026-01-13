import os, { hostname, networkInterfaces, type, userInfo } from 'node:os';

console.log('Operating System Information:');
console.log({
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    arch: os.arch(),
    uptime: os.uptime(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
    hostname: os.hostname(),
    userInfo: os.userInfo(),
    networkInterfaces: os.networkInterfaces()
})