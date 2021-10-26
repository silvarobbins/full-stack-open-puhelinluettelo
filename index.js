require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Person = require('./models/person')

const app = express()
const cors = require('cors')
morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use(morgan(':method :url :status :response-time ms :body '));

app.get('/', function (req, res) {
    res.send('hello, world!')
  })

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons)
    })
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info of ${persons.length} people<\p> <p>${Date()}<\p>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
  })

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({ 
        error: 'name missing' 
        })
    }

    if (!body.number) {
        return res.status(400).json({ 
        error: 'number missing' 
        })
    }

    if (persons.map(p => p.name).indexOf(body.name) >= 0) {
        return res.status(400).json({ 
        error: 'name must be unique' 
        })
    }

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    res.json(person)
})
const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)