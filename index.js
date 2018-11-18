const express = require('express')
const path = require('path')

const app = express()
const port = 3001

app.use(express.static('static'))

const json = { 
    1: 'Adam',
    2: 'Ben',
    3: 'Daniel',
    4: 'Thomas',
}

const json2 = {
    1: 'Mariel',
    2: 'Angie',
    3: 'Amparo',
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'))
})

app.get('/json', (req, res) => {
    res.send(json)
})

app.get('/json2', (req,res) => {
    // res.send(input)
    if (req.query.key == 'password123') {
        res.send(json2)
    } else {
        res.send('Error: incorrect key')
    }
}) 

app.listen(port, () => {
    console.log('Listening on port: '+ port)
})