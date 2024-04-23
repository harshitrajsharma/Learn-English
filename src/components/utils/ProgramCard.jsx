import React from 'react'
import InfoCard from './InfoCard'
import { FaArrowRight } from "react-icons/fa";

const ProgramCard = (props) => {
  return (
    <div className=' flex'>
      <div className=' w-[50%] relative'>
        <div className='px-4 py-2 bg-red-500 rounded-full text-center w-auto inline text-xs font-bold absolute top-2 right-2'>{props.off}</div>
        <img className=' object-cover w-full h-full' src={props.image} alt="image" />
        <button className='px-4 py-2 absolute bottom-2 left-2 bg-white hover:bg-black hover:text-white '><FaArrowRight /></button>
      </div>
      <div className='flex flex-col h-full justify-between p-4 w-[50%] gap-4'>
        <h1 className=' text-4xl'>{props.title}</h1>
        <p>{props.description}</p>
        <InfoCard title={props.cardTitle} text={props.cardText} />
      </div>
    </div>
  )
}

export default ProgramCard
