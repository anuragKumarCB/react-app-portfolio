import React from 'react'
import { logo } from "../../assets/index"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import QuickLink from './links/QuickLink'
import Resources from './links/Resources'
import Developers from './links/Developers'
import FooterBottom from './FooterBottom'


const Footer = () => {
    return (
        <>
            <footer className='w-full py-20 border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-8'>
                    <img className='w-24' src={logo} alt="logo" />
                    <div className='flex gap-4'>
                        <span className='bannerIcon hover:bannerIconHover'>
                            <FaFacebook />
                        </span>
                        <span className='bannerIcon hover:bannerIconHover'>
                            <FaTwitter />
                        </span>
                        <span className='bannerIcon hover:bannerIconHover'>
                            <FaLinkedin />
                        </span>
                    </div>
                </div>
                <QuickLink />
                <Resources />
                <Developers />
            </footer>
            <FooterBottom />
        </>

    )
}

export default Footer
