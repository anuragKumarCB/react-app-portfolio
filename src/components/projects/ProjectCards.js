import React from 'react'
import { BsGithub } from "react-icons/bs"
import { FaGlobe } from "react-icons/fa"

const ProjectCards = ({ media, title, desc }) => {
    return (
        <div className='w-full h-auto px-12 py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b from-gray-900 hover:gray-900 transition-colors duration-1000'>
            <div className='w-full h-[80%] overflow-hidden rounded-lg'>
                <img
                    className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer'
                    src={media}
                    alt="projectimage"
                />
            </div>
            <div className='w-full mt-5 flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-2xl font-bold text-titleFont text-designColor'>{title}</h3>
                    <div className='flex gap-2'>
                        <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                            <BsGithub />
                        </span>
                        <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                            <FaGlobe />
                        </span>
                    </div>
                </div>
                <div>
                    <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards
