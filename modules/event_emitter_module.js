const EventEmitter = require('events')

const customEmitter = new EventEmitter()
    //no parameters for callback
customEmitter.on('response', () => {
    console.log('Response received!')
})

//callback has parameters
customEmitter.on('response', (name, id) => {
    console.log(`Another response just arrived from ${name} with id ${id}`)
})

//emitting isn't affected with or without parameters
customEmitter.emit('response', 'Martin', 'w9983589')

/*NB:: 
     **Listen for events before emitting them.
     can't do otherwise!!
*/