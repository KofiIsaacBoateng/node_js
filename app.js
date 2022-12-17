/*
 *Instead of reading the entire content of a file, stream-reading them gets them in chunks, and thats saves space is the effective way!
 */

//FIRST SCENARIO

// const { createReadStream } = require('fs')


// const stream = createReadStream('./content/big_text.txt', { highWaterMark: 90000, /*encoding: 'utf8' */ })


// stream.on('data', result => {
//     console.log(result)
// })

// stream.on('error', (err) => {
//     console.log(err)
// })



//SECOND SCENARIO

const http = require('http')
const fs = require('fs')

// 1. Reads entire file at once.. :( boring!!

// http.createServer((req, res) => {
//     const text = fs.readFileSync('./content/big_text.txt', 'utf8')

//     res.end(text)
// }).listen(5000)


// 2. Reads entire file in chunks.. :) hurray!!

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/big_text.txt', 'utf8')

    fileStream.on('open', () => {
        fileStream.pipe(res)
    })

    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)