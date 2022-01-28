const Emitter = require('events')
const e = require('express')

const emitter = new Emitter()

const callback = (data, second, third) => { // or once
    console.log(`Вы прислали сообщение: ${data}`)
    console.log(`Второй аргумент: ${second}`)
}

emitter.on('message', callback)

emitter.emit('message', 'asadasdasd')
emitter.removeAllListeners()
emitter.removeListener('message', callback)



const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'Вы не указалли событие')
}