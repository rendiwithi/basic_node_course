const os = require('os')
// info user
const user = os.userInfo()
console.log(user);

// uptime system
console.log(`system uptime on ${os.uptime()} secconds`);

const infoOs = {
    name: os.type(),
    realese: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(infoOs);