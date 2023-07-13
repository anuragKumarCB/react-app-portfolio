import React, { useState } from 'react'
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"
import Title from '../layouts/Title'
import { testimonialOne, testimonialTwo } from '../../assets';
import TestimonialCard from './TestimonialCard';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10'
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10'
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}
const Testimonial = () => {
    const [dotActive, setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDotActive(next)
        },
        appendDots: dots => (
            <div
                style={{
                    padding: "10px"
                }}
            >
                <ul style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                    marginTop: "20px"
                }}>
                    {" "}{dots}{" "}
                </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === dotActive
                        ? {
                            width: "12px",
                            height: "12px",
                            color: "blue",
                            background: "#ff014f",
                            borderRadius: "50%",
                            cursor: "pointer"
                        } : {
                            width: "12px",
                            height: "12px",
                            color: "blue",
                            background: "gray",
                            borderRadius: "50%",
                            cursor: "pointer"
                        }
                }
            >
            </div>
        )
    };

    return (
        <section id="testimonial" className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex flex-col justify-center text-center'>
                <Title
                    title="What Client Says"
                    desc="Testimonial"
                />
            </div>
            <div className='max-w-6xl mx-auto '>
                <Slider {...settings}>
                    <TestimonialCard
                        media={testimonialOne}
                        codeName="Bound - Trolola"
                        name="Jone Duone Joe"
                        occupation="Operation Officer"
                        projectName="Travel Mobile App Design"
                        projectDetails="via- Upwork - March 4, 2015 - Aug 30, 2021 Test"
                        testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure illum in consequuntur molestiae corrupti dignissimos est voluptate? Hic ipsam fugit minima temporibus iusto repudiandae alias nemo, saepe ratione. Dicta, dolorum!"
                    />
                    <TestimonialCard
                        media={testimonialTwo}
                        codeName="Bound - Trolola"
                        name="Jone Duone Joe"
                        occupation="Operation Officer"
                        projectName="Travel Mobile App Design"
                        projectDetails="via- Upwork - March 4, 2015 - Aug 30, 2021 Test"
                        testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure illum in consequuntur molestiae corrupti dignissimos est voluptate? Hic ipsam fugit minima temporibus iusto repudiandae alias nemo, saepe ratione. Dicta, dolorum!"
                    />
                    <TestimonialCard
                        media={testimonialOne}
                        codeName="Bound - Trolola"
                        name="Jone Duone Joe"
                        occupation="Operation Officer"
                        projectName="Travel Mobile App Design"
                        projectDetails="via- Upwork - March 4, 2015 - Aug 30, 2021 Test"
                        testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure illum in consequuntur molestiae corrupti dignissimos est voluptate? Hic ipsam fugit minima temporibus iusto repudiandae alias nemo, saepe ratione. Dicta, dolorum!"
                    />
                    <TestimonialCard
                        media={testimonialTwo}
                        codeName="Bound - Trolola"
                        name="Jone Duone Joe"
                        occupation="Operation Officer"
                        projectName="Travel Mobile App Design"
                        projectDetails="via- Upwork - March 4, 2015 - Aug 30, 2021 Test"
                        testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure illum in consequuntur molestiae corrupti dignissimos est voluptate? Hic ipsam fugit minima temporibus iusto repudiandae alias nemo, saepe ratione. Dicta, dolorum!"
                    />

                </Slider>
            </div>
        </section>
    )
}

export default Testimonial
