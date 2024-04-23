import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Why = () => {
    return (
        <div className=' flex flex-col md:flex-row gap-12 py-8 px-8 md:px-16 lg:px-32'>
            <div className=' md:w-[50%] flex flex-col gap-6 '>
                <h1 className=' text-2xl font-bold'>Certified Translation</h1>
                <p>The program concertrates on teaching and building basic English skills in order to gain confidence at work.</p>
                <div className=' flex justify-between '>
                    <div>
                        <h1 className='text-3xl
                         font-bold'>0</h1>
                        <p className=' text-xl'>Students</p>
                    </div>
                    <div>
                        <h1 className='text-3xl
                         font-bold'>0</h1>
                        <p className=' text-xl'>Teachers</p>
                    </div>
                    <div>
                        <h1 className='text-3xl
                         font-bold'>0</h1>
                        <p className=' text-xl'>Course</p>
                    </div>
                </div>
            </div>
            <div className=' md:w-[50%] flex flex-col gap-6 '>
                <h1 className=' text-3xl font-bold'>Why Choose Us</h1>
                <p>
                    Whether you're looking for a rich cultural experience or superior language education you'll find both exciting environment of LS.
                </p>
                <div className='flex flex-col gap-4 '>
                    <p className='flex gap-2 text-center'><FaCheck /> A Wealth of Experience, a Reputation for Excellence.</p>
                    <p className='flex gap-2 text-center'><FaCheck /> Affordable Cost</p>
                    <p className='flex gap-2 text-center'><FaCheck /> Locations Throughout</p>
                    <p className='flex gap-2 text-center'><FaCheck /> Convenient Schedules</p>
                    <p className='flex gap-2 text-center'><FaCheck /> Quality Control</p>
                </div>
            </div>
        </div>
    )
}

export default Why
