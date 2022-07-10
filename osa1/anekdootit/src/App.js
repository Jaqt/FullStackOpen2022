import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    let x = getRandomInt(anecdotes.length)
    while (x === selected) {
      x = getRandomInt(anecdotes.length)
    }
    return setSelected(x)
  }

  const handleVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }

  const mostVotes = vote.indexOf(Math.max(...vote))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {vote[mostVotes]} votes</p>
    </div>
  )
}

export default App