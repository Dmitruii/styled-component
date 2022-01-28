const path = require('path')

console.log('Склеить участки пути', path.join(__dirname, '..', 'second', 'third'))
console.log("Take the absolutely path", path.resolve('..', 'second', 'third'))
// if you don't want to use global variables or __dirname use .resolve method

const fullPath = path.resolve('..', 'second', 'third')
console.log('Парсинг пути', path.parse(fullPath))
console.log('Разделитель в ОС', path.sep)
console.log('Проверка на абсолютный код', path.isAbsolute(fullPath))
console.log('Название файла', path.basename(fullPath))
console.log('Расширение файла', path.extname(fullPath))

// Two global variables: __dirname / __filename
// __dirname - current direction
// Use .. if you want to return

/* ---------------------------------------- */

const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)
console.log(url)