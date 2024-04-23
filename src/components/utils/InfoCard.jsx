import React from 'react'

const InfoCard = (props) => {
    return (
        <div className='flex gap-3 '>
            <div className=' pt-2'>{props.icon}</div>
            <div className=' text-sm flex flex-col gap-1'>
                <p className=' font-bold'>{props.title}</p>
                <p>{props.text}</p>
            </div>
        </div>

    )
}

export default InfoCard
