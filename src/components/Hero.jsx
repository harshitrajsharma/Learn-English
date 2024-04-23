import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import Course from './utils/Course';

const Hero = () => {
    return (
        <div style={{backgroundImage: "url(./heroimg.webp)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} className=' flex flex-col md:flex-row justify-center md:justify-between px-8 md:px-16 lg:px-32 h-auto py-28 gap-16 md:py-2 md:h-screen xl:h-[800px] items-center text-center md:text-start'>
            <div className='flex flex-col gap-4 md:w-64'>
                <h1 className=' text-6xl font-bold'>Do you speak in english?</h1>
                <p>
                    Join our international family today! Please <a href="#" className=' text-red-500'>call us</a> for more info.
                </p>
                <h4 className=' text-2xl font-bold text-red-500 flex gap-2 items-center justify-center md:justify-start'><FaPhoneVolume />+123 321 7890</h4>
            </div>
            <div className=' flex flex-col justify-between md:w-64 gap-4'>
                <div className='flex flex-col gap-6'>
                    <Course link="#" timing="2 Months/Nights Shift" title="Word Relay" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia sed tenetur." />
                    <Course link="#" timing="2 Months/Nights Shift" title="Word Relay" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia sed tenetur." />
                </div>
                <button className=' w-full text-center border-2 py-4 hover:text-white hover:bg-black font-bold transition-all duration-300 ease-in-out'>More Courses</button>
            </div>
        </div>
    )
}

export default Hero
