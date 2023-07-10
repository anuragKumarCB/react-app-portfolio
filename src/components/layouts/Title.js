import React from 'react'

const Title = ({ title, desc }) => {
    return (
        <div className='flex flex-col gap-4 text-titleFont mb-14'>
            <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>{title}</h3>
            <h2 className='text-5xl text-gray-300 font-bold capitalize'>{desc}</h2>
        </div>
    )
}

export default Title
