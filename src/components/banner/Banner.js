import React from 'react'
import { bannerImg } from "../../assets/index"
import LeftBanner from './LeftBanner'

const Banner = () => {
    return (
        <section
            id='home'
            className='w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black'
        >
            <LeftBanner />
            <div className='w-1/2 flex justify-center items-center relative'>
                <img
                    className='w-[500px] h[680px] z-10'
                    src={bannerImg}
                    alt="bannerImage"
                />
                <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[@202327] shadow-shadowOne flex justify-center items-center'>

                </div>
            </div>
        </section >
    )
}

export default Banner
