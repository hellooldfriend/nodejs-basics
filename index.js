const http = require('http')

// создаём сервер
// передаём функцию, которая будет выполнена тогда, когда на сервер будут поступать запросы – она называется handler
// handler принимает два параметра – request и response
// request отвечает за запрос на сервер, а response отвечает за ответ
const server = http.createServer((request, response) => {
    console.log(request.url)

    response.write('<h1>Hello from NodeJS 1</h1>')

    response.end(`
        <div style="background: red; width: 200px; height: 200px"></div>
    `)
})

// первый параметр – номер порта, второй callback, который будет выполнена когда сервер будет запушен
server.listen(3000, () => {
    console.log('Server is running...')
})