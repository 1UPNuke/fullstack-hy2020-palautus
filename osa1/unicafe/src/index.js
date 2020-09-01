import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good+neutral+bad} />
          <StatisticLine text="average" value={
            ((good-bad)/(good+neutral+bad)).toFixed(2)
          } />
          <StatisticLine text="positive" value={
            ((good)/(good+neutral+bad)*100).toFixed(2)+"%"
          } />
        </tbody>
      </table>
    )
  }
  return (
    <p>No feedback given</p>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>setGood(good+1)}/>
      <Button text="neutral" onClick={()=>setNeutral(neutral+1)}/>
      <Button text="bad" onClick={()=>setBad(bad+1)}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)