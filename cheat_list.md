### Cheat list about Node.js 

## 


`__pathname` – глобальная константа, которая содержит абсолютный путь к файлу, где она используется.

`__dirname` – то же, что и `__pathname`, но содержит абсолютный путь до директории, где используется. 


## Path
`path` – встроенный модуль, 
который предоставляет набор функций 
для работы с путями.

##### Некоторые популярные методы Path, больше тут (https://nodejs.org/api/path.html#path_path_resolve_paths)
`path.basename(__filename)` – возвращает название файла

`path.extname(__filename)` – возвращает расширение файла

`path.parse(__filename)` - возвращает объект со значениями `root`, `dir`, `base`, `ext`, `name`.

`path.join(__dirname, 'test', 'index.html')` – соединяет заданные строки в один путь.

`path.resolve()` – похожий метод на `path.join()`, принимает так же неограниченное кол-во строк. 

## FS (File System)
`fs` – модуль для работы с файлами и папками 

`fs.mkdir()` – создаёт директорию, асинхронно. 
Первым параметром передаём путь и название директории. 
Если такая директория по переданному пути существует, то выведется ошибка.
Например, такой код в текущей директории создаст директорию под названием `Example`: 
```
fs.mkdir(path.join(__dirname, 'example'), (error) => {
    // вторым параметром fs.mkdir принимает callback,
    // первый аргумент которого – ошибка
    if(error) throw new Error(error)
    console.log('The folder was created')
})
```
###

`fs.writeFile` – создаёт файл, асинхронно. Первый параметр путь
Пример, который создаёт в текущей директории файл `mynotes.txt`, записывает `Hello world` и выводит в консоль сообщение: 
```
fs.writeFile(
    path.join(__dirname, 'mynotes.txt'),
    'Hello world',
    function(error) {
        if(error) throw new Error(error)
        console.log('The file was created')
    }
)
```

`fs.appendFile` – нужен для добавления контента. 
``` 
fs.appendFile(
    path.join(__dirname, 'mynotes.txt'),
    'From append file',
    (error) => {
        if(error) throw error
        console.log('this file was changed')
    }
)
```

`fs.readFile` – чтение файлов. 
``` 
fs.readFile(
    path.join(__dirname, 'mynotes.txt'),
    'utf-8',
    (error, data) => {
        if(error) throw error
        console.log('data: ', data)
        // Другой способ расшифровать файл 
        // Buffer.from(data).toString()
    }
)
```

`fs.rename()` – переименование файла. 
```
fs.rename(
    path.join(__dirname, 'mynotes.txt'),
    path.join(__dirname, 'notes.txt'),
    error => {
        if(error) throw error
        console.log('Renamed successful')
    }
)
```

### OS (Operation System)
Модуль для работы с данными операционной системы.

`os.platform()` – возвращает название платформы пользователя

`os.arch()` – возвращает информацию об архитектуре

`os.cpus()` – возвращает массив объектов с информацией о каждом CPU ядре

`os.freemem()` – возвращает размер свободной памяти

`os.totalmem()` – возвращает весь размер памяти

`os.homedir()` – возвращает домашнюю директорию текущего пользователя

`os.uptime()` – время работы системы в миллисекундах

##

### Events | EventEmitter
Модуль, который позволяет работать и добавлять event эмиттеры к приложению
``` 
const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello')
```

### HTTP
``` 
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
```





### Экспорт и импорт данных
Экспорт делается через глобальный объект `module.exports`.
Импорт делается через `require`.

Используется примерно так:
```
// somefile.js 
const obj1 = {
    name: 'Max',
    age: 25,
}

module.exports = obj1 

// anotherfile.js 
const someObj = require('./somefile.js') // путь до файла, где делает экспорт нужных файлов
someObj.name // 'Max'
```



