import React from 'react';
import ReactDOM from 'react-dom';
import Course from './course';

const App = () => {
  const courses = [
    {
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
    },
    {
      name: "Node.js",
      parts: [
        {
          name: 'Routing',
          exercises: 3
        },
        {
          name: 'Middlewares',
          exercises: 7
        }
      ]
    }
  ];
  return(
    <>
      {courses.map((course, i)=><Course key={"course"+i} course={course}/>)}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))