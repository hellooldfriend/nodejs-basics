function consoleToJSON() {
    const result = {}

    for(let i = 2; i < process.argv.length; i++) {
        const argument = process.argv[i].split('=')
        result[argument[0]] = argument[1] || true
    }

    return result
}

console.log(consoleToJSON())

// run in terminal: node console.js message=hello spec
// and you receive: { message: 'hello', spec: true }