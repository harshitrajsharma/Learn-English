import React from 'react'

const Course = (props) => {
  return (
    <a href={props.link} className=' flex flex-col gap-2 border-2 border-transparent hover:border-red-100 p-2'>
      <div>
        <p className=' text-base font-bold uppercase text-red-500'>{props.timing}</p>
        <h1 className=' text-lg font-bold'>{props.title}</h1>
      </div>
      <p>{props.description}</p>
    </a>
  )
}

export default Course
