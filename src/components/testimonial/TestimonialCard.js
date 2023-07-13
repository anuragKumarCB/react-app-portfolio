import React from 'react'
import { quote } from '../../assets'
import { RiStarFill } from 'react-icons/ri'

function TestimonialCard({ media, codeName, name, occupation, projectName, projectDetails, testimonial }) {
    return (
        <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
                <div className='w-[35%] h-full p-8 rounded-lg bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne flex flex-col gap-8 justify-center'>
                    <img
                        className='h-72 object-cover rounded-lg'
                        src={media} alt="Testimonial" />
                    <div>
                        <p className='text-xs uppercase text-designColor tracking-wide mb-2'>{codeName}</p>
                        <h3 className='text-2xl font-bold'>{name}</h3>
                        <p className='text-base tracking-wide text-gray-500'>{occupation}</p>
                    </div>
                </div>

                <div className='w-[60%] h-full flex flex-col justify-between'>
                    <img className='w-[20%]' src={quote} alt="" />
                    <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                        <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
                            <div>
                                <h3 className='text-2xl font-medium tracking-wide'>{projectName}</h3>
                                <p className='text-base text-gray-400 mt-3'>{projectDetails}</p>
                            </div>
                            <div className='text-yellow-500 flex gap-1'>
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                            </div>
                        </div>
                        <div className=''>
                            <p>{testimonial}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
