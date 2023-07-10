import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si"

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Code.", "Full Stack Developer.", "Professional Photographer."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 15,
        delaySpeed: 2000,
    })
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-3'>
                <h4 className='text-lg font-normal'>Welcome to the future of Web Application</h4>
                <h1 className='text-6xl font-bold text-white'>

                    Hi, I'm{" "}
                    <span className='text-designColor capitalize'>Anurag Kumar</span>
                </h1>
                <h2 className='text-4xl font-bold text-white pt-2'>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="flase"
                        cursorStyle=" | "
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    I use animation as third dimesion by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon hover:hoverEffect'>
                            <FaFacebook />
                        </span>
                        <span className='bannerIcon hover:hoverEffect'>
                            <FaTwitter />
                        </span>
                        <span className='bannerIcon hover:hoverEffect'>
                            <FaLinkedin />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Best Skill in
                    </h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon hover:hoverEffect'>
                            <FaReact />
                        </span>
                        <span className='bannerIcon hover:hoverEffect'>
                            <SiTailwindcss />
                        </span>
                        <span className='bannerIcon hover:hoverEffect'>
                            <SiFigma />
                        </span>
                        {/* <span className='bannerIcon hover:hoverEffect'>
                            <SiNextdotjs />
                        </span> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LeftBanner
