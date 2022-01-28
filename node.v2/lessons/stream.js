// Readable - чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')
const http = require('http')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => console.log('Закончил читать'))
// stream.on('open', () => console.log('Начали читать'))
// stream.on('error', (e) => console.log(e))

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

for (let i = 1000; i > 0 ; i = i - 7) {
    writableStream.write(`${i} = ${i} - 7 \n`)
}

writableStream.end()
writableStream.close()
writableStream.destroy()

http.createServer((req, res) => {
    // req = readable stream
    // req = writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
    // stream.on('data', chunk => res.write(chunk))
    // stream.on('end', chunk => res.end())
    stream.pipe(res.end())
})