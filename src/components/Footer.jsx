import React from 'react'
import { FaRegCopyright, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import FooterList from './utils/FooterList';
import { FooterData } from './utils/FooterData';

const Footer = () => {
    return (
        <div className='px-8 md:px-16 lg:px-32 py-4 bg-black text-white flex flex-col gap-10'>
            <div className=' w-full flex flex-col gap-10'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-32 w-full'>
                    <div className=' md:w-[60%]'>
                        <h1 className=' text-2xl font-bold flex flex-col gap-4 py-4 w-full'>Stay Updated</h1>
                        <form className=' w-full' action="#">
                            <input className='px-4 py-2 w-[60%]' type="email" name="email" id="email" placeholder='Email' />
                            <input className='bg-red-500 px-4 py-2 w-[40%]' type="submit" value="Subscribe Now" />
                        </form>
                    </div>
                    <div className=' md:w-[40%]'>
                        <h1 className=' text-2xl font-bold flex flex-col gap-4 py-4 text-center md:text-start'>Let's Get Social</h1>
                        <div className=' flex gap-4 justify-center md:justify-start'>
                        <a className=' px-4 py-4 bg-red-500 text-white' href="#"><FaFacebookF /></a>
                        <a className=' px-4 py-4 bg-red-500 text-white' href="#"><FaTwitter /></a>
                        <a className=' px-4 py-4 bg-red-500 text-white' href="#"><FaYoutube /></a>
                        <a className=' px-4 py-4 bg-red-500 text-white' href="#"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row w-full justify-between gap-8 md:gap-32'>
                    <div className=' flex flex-col sm:flex-row gap-6 p-2 sm:justify-between md:w-[60%] '>
                        {FooterData.map((data, index)=> <FooterList key={index} title={data.title} opt1={data.opt1} opt2={data.opt2} opt3={data.opt3} opt4={data.opt4} opt5={data.opt5} opt6={data.opt6} />)}
                    </div>
                    <div className='flex flex-col gap-6 md:w-[40%] '>
                        <h1 className=' text-2xl font-bold'>Quick Links</h1>
                        <button className=' w-full hover:bg-white hover:text-black text-center border-2 px-8 py-4 font-bold transition-all duration-300 ease-in-out uppercase'>Get a Quote</button>
                        <button className=' w-full hover:bg-white hover:text-black text-center border-2 px-8 py-4 font-bold transition-all duration-300 ease-in-out uppercase'>Request Information</button>
                        <button className=' w-full hover:bg-white hover:text-black text-center border-2 px-8 py-4 font-bold transition-all duration-300 ease-in-out uppercase'>Contact us</button>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row items-center justify-between gap-6'>
                <div className=' text-2xl font-bold'>
                    <a href="#">Language <br /> School</a>
                </div>
                <div className=' flex flex-col justify-end'>
                    <a href="#">Privacy Policy | Terms & Condition</a>
                    <a className='flex gap-2 items-center' href="#"><FaRegCopyright />Copyright Language School 2019</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
