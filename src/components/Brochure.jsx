import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Brochure = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 px-8 md:px-16 lg:px-32 py-8'>
            <div>
                <img src="./img.png" alt="image" />
            </div>
            <div className=' flex flex-col gap-6 w-full justify-center'>
                <h1 className=' text-4xl font-bold'>Download Our <span className=' uppercase'>Brochure</span></h1>
                <p>
                    Savings of up to <b>50% Off Tuition!</b> Valid only at Language School USA. <br />
                    Contact <b>info@tanguageschoot.com</b> to learn more!
                </p>
                <div className='w-full flex justify-end'>
                    <button className=' px-4 py-2 bg-black text-white hover:bg-white hover:text-black'><FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Brochure
