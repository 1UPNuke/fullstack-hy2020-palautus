import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, i)=><Part key={"part"+i} name={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({parts}) => {
  return(
    <p>Number of exercises {parts.reduce((a, part)=>a+part.exercises, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))