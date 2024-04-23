import React from 'react'
import { FaHourglassEnd } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";
import InfoCard from './utils/InfoCard';

const FindCourses = () => {
    return (
        <div className='px-8 md:px-16 lg:px-32 flex flex-col md:flex-row'>
            <div className=' flex flex-col gap-6 p-8 md:w-[55%]'>
                <div className=' flex flex-col gap-4'>
                    <div>
                        <h1 className=' text-3xl '>Welcome to</h1>
                        <h1 className=' text-3xl font-bold text-red-600'>Language School</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus porro quae, est eaque, dolore pariatur dolor error nam, voluptatum obcaecati. Doloribus quam iure ea sapiente nam nulla hic consectetur.</p>
                    </div>
                </div>
                <div>
                    <a href="#" className=' text-red-500 font-bold'>Browse All Courses</a>
                </div>
                <div className='flex gap-8'>
                    <InfoCard icon={<FaHourglassEnd />} title="10:30 AM - 07:30AM" text="Monday - Friday" />
                    <InfoCard icon={<BiSolidNavigation />} title="6th Floor, Coventry CV47AL, USA" text="Office Address" />
                </div>
            </div>
            <div className=' bg-red-500 text-white p-8 md:w-[45%] flex flex-col
         justify-between h-full'>
                <h1 className=' text-4xl font-bold'>Find your course</h1>
                <form className='flex flex-col gap-10' action="#">
                    <div className=' flex gap-6'>
                        <div className='flex flex-col gap-2 w-[50%]'>
                            <label className=' font-bold' htmlFor="CourseLevel">Course Level</label>
                            <select className=' px-4 py-4 bg-[#0000004f] text-white font-bold' id="courses" name="courses">
                                <option value="all" selected>ALL</option>
                                <option value="Course 1">Course 1</option>
                                <option value="Course 2">Course 2</option>
                                <option value="Course 3">Course 3</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 w-[50%]'>
                            <label className=' font-bold' htmlFor="CourseCategory">Course Category</label>
                            <select className=' px-4 py-4 bg-[#0000004f] text-white font-bold' id="courses" name="courses">
                                <option value="all" selected>ALL</option>
                                <option value="Category 1">Category 1</option>
                                <option value="Category 2">Category 2</option>
                                <option value="Category 3">Category 3</option>
                            </select>
                        </div>
                    </div>
                    <input className='px-4 py-4 bg-[#0000004f] text-white w-full' type="text" placeholder='What are looking for' />
                    <input className='px-4 py-4 bg-[#0000004f] text-white w-full' type="submit" value="Search Course" />
                </form>
            </div>
        </div>
    )
}

export default FindCourses
