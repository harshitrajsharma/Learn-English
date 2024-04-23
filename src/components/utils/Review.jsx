import React from 'react'

const Review = (props) => {
  return (
    <div className=' flex flex-col gap-4 py-4'>
      <div>{props.review}</div>
      <div className='flex gap-4'>
        <img className=' h-12 w-12 object-cover rounded-full' src={props.profile} alt="profile" />
        <div>
            <h2 className=' font-bold'>{props.name}</h2>
            <p className=' text-sm text-gray-300'>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
