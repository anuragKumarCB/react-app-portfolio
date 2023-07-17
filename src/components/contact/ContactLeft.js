import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { contactImg } from '../../assets'

const ContactLeft = () => {
    return (
        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 shadow-shadowOne flex flex-col gap-8'>
            <img
                className='w-full h-48 md:h-64 object-cover rounded-lg mb-2'
                src={contactImg} alt="contactImg" />
            <div className='flex flex-col flex-wrap gap-4'>
                <h3 className='text-3xl font-bold text-white'>Anurag Kumar</h3>
                <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                <p className='text-base text-gray-400 tracking-wide'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate temporibus, esse maxime magni optio.
                </p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Phone: <span className='text-lightText'>+91 7004792965</span></p>
                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email: <span className='text-lightText text-sm sml:text-base'>anuragkumar.cb01@gmail.com</span></p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='tex-base uppercase font-titleFont mb-4'>
                    Find Me In
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon hover:bannerIconHover'><FaFacebook /></span>
                    <span className='bannerIcon hover:bannerIconHover'><FaTwitter /></span>
                    <span className='bannerIcon hover:bannerIconHover'><FaLinkedin /></span>
                </div>
            </div>
        </div>
    )
}

export default ContactLeft
