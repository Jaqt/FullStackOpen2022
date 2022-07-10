import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button set={setGood} value={good} text='good' />
      <Button set={setNeutral} value={neutral} text='neutral' />
      <Button set={setBad} value={bad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={props.good} />
          </tr>
          <tr>
            <StatisticLine text='neutral' value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text='bad' value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
          </tr>
          <tr>
            <StatisticLine text='average' value={((props.good * 1)+(props.neutral * 0)+(props.bad * -1)) / (props.good+props.neutral+props.bad)} />
          </tr>
          <tr>
            <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad) * 100} end='%' />
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={() => {props.set(props.value + 1)}}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
        <td>{props.text} </td>
        <td>{props.value} {props.end}</td>
    </>
  )
}

export default App