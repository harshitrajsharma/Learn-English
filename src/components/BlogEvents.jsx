import React from 'react'

const BlogEvents = () => {
    return (
        <div className='flex flex-col md:flex-row gap-12 py-12 px-8 md:px-16 lg:px-32 '>
            <div className='flex flex-col gap-12 md:w-[50%]'>
                <h1 className=' text-2xl font-bold'>Blog & News</h1>
                <div className=' flex flex-col gap-8'>
                    <div className=' flex flex-col gap-4'>
                        <p className=' text-red-500'>26 October 2023</p>
                        <h1 className=' text-xl font-bold'>Don't Let The Outtakes Take You Out</h1>
                    </div>
                    <hr />
                    <div className=' flex flex-col gap-4'>
                        <p className=' text-red-500'>26 October 2023</p>
                        <h1 className=' text-xl font-bold'>Don't Let The Outtakes Take You Out</h1>
                    </div>
                    <hr />
                    <div className=' flex flex-col gap-4'>
                        <p className=' text-red-500'>26 October 2023</p>
                        <h1 className=' text-xl font-bold'>Don't Let The Outtakes Take You Out</h1>
                    </div>
                </div>
                <button className=' w-full text-center border-2 py-4 hover:text-white hover:bg-black font-bold transition-all duration-300 ease-in-out'>More Courses</button>
            </div>
            <div className='flex flex-col gap-12 md:w-[50%]'>
                <h1 className=' text-2xl font-bold'>Events</h1>
                <div>
                    <p>COM, SPLMS, NO_ITEMS, ROUND</p>
                </div>
                <button className=' w-full text-center border-2 py-4 hover:text-white hover:bg-black font-bold transition-all duration-300 ease-in-out'>More Events</button>
            </div>
        </div>
    )
}

export default BlogEvents
