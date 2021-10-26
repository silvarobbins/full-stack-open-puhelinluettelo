const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name_par = process.argv[3]
const number_par = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.rg7ao.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
  })

  const Person = mongoose.model('Person', personSchema)
  

if (process.argv.length === 3) {
    console.log("phonebook:")
    Person.find({}).then(result => {
        result.forEach(person => {
        console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}

else {
const person = new Person({
    name: name_par,
    number: number_par,
})

person.save().then(response => {
  console.log(`added ${person.name} number ${person.number} to phonebook`)
  mongoose.connection.close()
})
}
