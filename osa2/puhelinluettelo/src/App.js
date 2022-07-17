import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const duplicateName = persons.some(person => {
      if (person.name === newName) {
        return true
      } 
      return false
    });

    if (duplicateName) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const namesToShow = filter.length === 0
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow} />
    </div>
  )
}

const Filter = ({ filter, handleFilter }) => {
  return (
  <div>
  filter shown with <input
  value={filter}
  onChange={handleFilter} />
</div>
  )
}

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson} >
    <div>
      name: <input 
      value={newName}
      onChange={handleNameChange} />
    </div>
    <div>
      number: <input 
      value={newNumber} 
      onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = ({ namesToShow }) => {
  return (
    <div>
    {namesToShow.map(person =>
    <p key={person.name}>{person.name} {person.number}</p>)}
  </div>
  )
}

export default App