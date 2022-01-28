const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true})

// console.log('START')
//
// fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })
//
// console.log('END')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Папка удалена')
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'asdasdasdasdasd', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('File was wrote')
// })
//
// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'LADNKBKBB', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('File was wrote')
// })

// Async fs module
// const fsPromise = require('fs/promises')
//
// fsPromise.mkdir('/').then().catch()
// fsPromise.readFile('/').then().catch()
// fsPromise.writeFile('/').then().catch()
// fsPromise.appendFile('/').then().catch()
// fsPromise.rm('/').then().catch()
// fsPromise.rmdir('/').then().catch()

const writeFileAsyncFS = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}

const appendFileAsyncFS = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}
const readFileAsyncFS = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err)
        }
        resolve(data)
    }))
}
const removeFileAsyncFS = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err)
        }
        resolve()
    }))
}

// writeFileAsyncFS(path.resolve(__dirname, 'test.txt'), 'data: ')
//     .then(() => appendFileAsyncFS(path.resolve(__dirname, 'test.txt'), 'Hello '))
//     .then(() => appendFileAsyncFS(path.resolve(__dirname, 'test.txt'), 'world'))
//     .then(() => appendFileAsyncFS(path.resolve(__dirname, 'test.txt'), '!'))
//     .then(() => readFileAsyncFS(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// removeFileAsyncFS(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('File was removed'))
//     .catch(e => console.error(e))

// TEST TASK

const text = process.env.TEXT || ''

writeFileAsyncFS(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsyncFS(path.resolve(__dirname, 'text.txt')))
    .then((data) => data.split(' ').length)
    .then(count => writeFileAsyncFS(path.resolve(__dirname, 'count.txt'), `Кол-во слов - ${count}`))
    .then(() => removeFileAsyncFS(path.resolve(__dirname, 'text.txt')))
    .catch(e => console.log(e))