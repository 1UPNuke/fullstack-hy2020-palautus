import React from 'react';

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
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

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course;