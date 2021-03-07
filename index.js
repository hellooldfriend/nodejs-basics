const http = require('http')
const fs = require('fs')
const path = require('path')

// создаём сервер
// передаём функцию, которая будет выполнена тогда, когда на сервер будут поступать запросы – она называется handler
// handler принимает два параметра – request и response
// request отвечает за запрос на сервер, а response отвечает за ответ
const server = http.createServer((request, response) => {
    if(request.method === 'GET') {
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        })

        if(request.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (error, content) => {
                    if(error) throw error
                    response.end(content)
                }
            )
        } else if(request.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (error, content) => {
                    if(error) throw error
                    response.end(content)
                }
            )
        } else if(request.url === '/api/users') {
            response.writeHead(200, {
                'Content-Type': 'text/json',
            })

            const users = [
                {
                    name: 'Samat',
                    age: 31,
                },
                {
                    name: 'Sam',
                    age: 24,
                }
            ]

            response.end(JSON.stringify(users))
        }
    } else if(request.method === 'POST') {
        const body = []
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',


        })

        request.on('data', data => {
            body.push(Buffer.from(data))
        })

        request.on('end', () => {
            const message = body.toString().split('=')[1]
            response.end(`
                <h1>Your message: ${message}</h1>
            `)
        })


    }
})

// первый параметр – номер порта, второй callback, который будет выполнена когда сервер будет запушен
server.listen(3000, () => {
    console.log('Server is running...')
})