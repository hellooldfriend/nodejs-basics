const fs = require('fs')
const path = require('path')
//
// fs.writeFile(
//     path.join(__dirname, 'mynotes.txt'),
//     'Hello world',
//     function(error) {
//         if(error) throw new Error(error)
//         console.log('The file was created')
//
//         fs.appendFile(
//             path.join(__dirname, 'mynotes.txt'),
//             ' From append file',
//             (error) => {
//                 if(error) throw error
//                 console.log('this file was changed')
//             }
//         )
//     }
// )
//
//
// fs.readFile(
//     path.join(__dirname, 'mynotes.txt'),
//     'utf-8',
//     (error, data) => {
//         if(error) throw error
//         console.log('data: ', data)
//     }
// )
//
// fs.rename(
//     path.join(__dirname, 'mynotes.txt'),
//     path.join(__dirname, 'notes.txt'),
//     error => {
//         if(error) throw error
//         console.log('Renamed successful')
//     }
// )

//
// fs.writeFile(
//     path.join(__dirname, 'os_ref.js'),
//     'const os = require("os") \n \n \n console.log(os.platform)',
//     (error) => {
//         if(error) throw error
//         console.log('The file was created')
//     }
// )


// fs.writeFile(
//     path.join(__dirname, 'events_ref.js'),
//     'const EventEmitter = require(\'event\')',
//     (error) => {
//         if(error) throw error
//         console.log('events_ref.js was created')
//     }
// )

fs.writeFile(
    path.join(__dirname, '../', 'index.js'),
    'const http = rquire(\'http\')',
    (error) => {
        if(error) throw error
        console.log('Write successful')
    }
)