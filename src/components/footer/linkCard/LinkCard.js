import React from 'react'

const LinkCard = ({ title, linkOne, linkTwo, linkThree, linkFour, linkFive }) => {
    return (
        <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider '>
                {title}
            </h3>
            <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                <li>
                    <span className='w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group' >
                        {linkOne}
                        <span className='w-full h-[1px] inline-flex bg-designColor absolute -bottom-0.5 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    </span>
                </li>
                <li>
                    <span className='w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group' >
                        {linkTwo}
                        <span className='w-full h-[1px] inline-flex bg-designColor absolute -bottom-0.5 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    </span>
                </li>
                <li>
                    <span className='w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group' >
                        {linkThree}
                        <span className='w-full h-[1px] inline-flex bg-designColor absolute -bottom-0.5 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    </span>
                </li>
                <li>
                    <span className='w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group' >
                        {linkFour}
                        <span className='w-full h-[1px] inline-flex bg-designColor absolute -bottom-0.5 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    </span>
                </li>
                <li>
                    <span className='w-full text-lg hover:text-designColor cursor-pointer duration-300 relative group' >
                        {linkFive}
                        <span className='w-full h-[1px] inline-flex bg-designColor absolute -bottom-0.5 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default LinkCard
