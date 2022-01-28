// const dotenv = require('dotenv')
// dotenv.config()
//
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

// console.log(process.argv) // Передаваемые значение в npm

// if (Math.random() > 0.5) {
//     while (true) {} // infinite cycle
// } else {
//     console.log('Выполнение програмы завершено')
//     process.exit()
// }

const http = require('http')

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    // res.end('<h1>Hello world!</h1>')
    // res.end(req.url)
    // switch (req.url) {
    //     case '/users':
    //         return res.end('<h1>USERS</h1>')
    //     case '/':
    //         return res.end('<h1>HOME</h1>')
    //     case '/todos':
    //         return res.end('<h1>TODOS</h1>')
    //     default:
    //         return res.end('<h1>404 error</h1>')
    // }
    switch (req.url) {
        case '/users':
            return res.end(JSON.stringify([{
                users: [
                    {id: 1, userName: 'Dima'},
                    {id: 2, userName: 'Artem'},
                    {id: 3, userName: 'Stas'},
                    {id: 4, userName: 'Aladdin'}
                ]
            }]))
        case '/':
            return res.end(JSON.stringify([{
                message: ''
            }]))
        case '/todos':
            return res.end(JSON.stringify([{
                todos: [
                    {id: 1, task: 'Feeding a cat'},
                    {id: 2, task: 'Go to job'},
                    {id: 3, task: 'Take the wife form job'},
                    {id: 4, task: 'Coding your personality local host'}
                ]
            }]))
        default:
            return res.end(JSON.stringify([{
                messasge: '404 Error / not found'
            }]))
    }
})

server.listen(PORT, () => console.log(`Server was started correctly on PORT ${PORT}`))