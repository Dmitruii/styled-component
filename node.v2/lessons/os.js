const os = require('os')
const cluster = require('cluster')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.cpus().length)

if (cluster.isMaster) { // Главный ли процес
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
        // kill - terminal command
    }
    cluster.on('exit', worker => {
        console.log(`Ворккер с pid ${worker} умер`)
        cluster.fork()
    })
} else {
    console.log(`Воркер с pid = ${process.pid} запущен`)
    setInterval(() => {
        console.log(`Воркер с pid = ${process.pid} ещё работает`)
    }, 5000)
}

// const cpus = os.cpus()
// console.log(process.pid)
// while (true) {}