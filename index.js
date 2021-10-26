const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons)
    })
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info of ${Person.length} people<\p> <p>${Date()}<\p>`)
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
    .then( person => {
      if (person) {
        res.json(person)
      } else {
          res.status(404).end()
      }
    })
    .catch(error => next(error))
    })


app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    // if (body.name === undefined) {
    //     return res.status(400).json({ 
    //       error: 'name missing' 
    //     })
    // }

    // if (body.number === undefined) {
    //     return res.status(400).json({ 
    //       error: 'number missing' 
    //     })
    // }

    // if (persons.map(p => p.name).indexOf(body.name) >= 0) {
    //     return res.status(400).json({ 
    //     error: 'name must be unique' 
    //     })
    // }
    
    const person = new Person({
        name: body.name,
        number: body.number
    })

    person
      .save()
      .then(savedPerson => savedPerson.toJSON())
      .then(savedAndFormattedPerson => {
        res.json(savedAndFormattedPerson)
      }) 
    .catch(error => next(error))
  })

  app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
  
    const person = {
      name: body.name,
      number: body.number
    }
  
    Person.findByIdAndUpdate(req.params.id, person, { new: true })
      .then(updatedPerson => {
        res.json(updatedPerson)
      })
      .catch(error => next(error))
  })


app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)