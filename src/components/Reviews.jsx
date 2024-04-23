import React from 'react'
import { ReviewData } from './utils/ReviewData'
import Review from './utils/Review'

const Reviews = () => {
  return (
    <div className=' px-8 md:px-16 lg:px-32 py-4 flex flex-col gap-8'>
      <h1 className=' text-3xl font-bold'>Satisfied Learners</h1>
      <div className='flex flex-col md:flex-row gap-16'>
        <div className=' md:w-[50%]'>
            <img className=' object-cover' src="./profile.jpg" alt="profile" />
        </div>
        <div className=' md:w-[50%]'>
            <div>
                {ReviewData.map((data, index)=><Review key={index} review={data.review} profile={data.profile} name={data.name} text={data.text} />)}
            </div>
            <button className=' w-full hover:bg-black hover:text-white text-center border-2 px-8 py-4 font-bold transition-all duration-300 ease-in-out uppercase'>See all Testimonials</button>
        </div>
      </div>
    </div>
  )
}

export default Reviews
