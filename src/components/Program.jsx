import React from 'react'
import ProgramCard from './utils/ProgramCard'
import {ProgramData} from './utils/ProgramData'

const Program = () => {
  return (
    <div className='px-8 md:px-16 lg:px-32 flex flex-col gap-4 py-8'>
        <h1 className=' text-4xl'>Course Programs</h1>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {ProgramData.map((data, index) => <ProgramCard key={index} off={data.off} image={data.image} title={data.title} description={data.description} cardTitle={data.cardTitle} cardText={data.cardText} />)}
        </div>
        <button className=' w-full text-center border-2 py-4 hover:text-white hover:bg-black font-bold transition-all duration-300 ease-in-out'>More Courses</button>
    </div>
  )
}

export default Program
