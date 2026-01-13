// process in Node.js provides information and control over the current Node.js process.

const { ppid, argv, cwd } = require("node:process");

console.log({
    version: process.version,
    platform: process.platform,
    arch: process.arch,
    pid: process.pid,
    ppid : process.ppid,
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
    argv: process.argv,
    cwd: process.cwd()
})

// environment variables
console.log('Environment Variables:', process.env);
