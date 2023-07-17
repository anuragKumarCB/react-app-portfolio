import React from 'react'
import { bannerImg } from "../../assets/index"
import LeftBanner from './LeftBanner'

const Banner = () => {
    return (
        <section
            id='home'
            className='w-full pt-10 pb-20 flex flex-col lgl:flex-row gap-10 xl:gap-0  items-center border-b-[1px] font-titleFont border-b-black'
        >
            <LeftBanner />
            <div className='w-full lgl:w-1/2  flex justify-center items-center relative'>
                <img
                    className='w-[300px]  lgl:w-[500px]  z-10'
                    //  lgl:h-[680px]
                    src={bannerImg}
                    alt="bannerImage"
                />
                <div className='absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] lgl:p-0 bg-gradient-to-r from-[#1e2024] to-[@202327] shadow-shadowOne flex justify-center items-center'>

                </div>
            </div>
        </section >
    )
}

export default Banner
