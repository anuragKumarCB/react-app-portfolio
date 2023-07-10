import React from 'react'
import { AiFillAppstore } from "react-icons/ai"
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa"
import { SiProgress, SiAntdesign } from "react-icons/si"
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="Features" desc="What i Do" />
            <div className='grid grid-cols-3 gap-20'>
                <Card
                    title="Business Stratagy"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus cum modi pariatur repudiandae! Quasi autem fuga quod magni doloremque!"
                // icon={<FaBars />}
                />
                <Card
                    title="App Development"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus cum modi pariatur repudiandae! Quasi autem fuga quod magni doloremque!."
                    icon={<AiFillAppstore />}

                />
                <Card
                    title="SEO Optimisation"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus cum modi pariatur repudiandae! Quasi autem fuga quod magni doloremque!"
                    icon={<SiProgress />}
                />
                <Card
                    title="Mobile Development"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus cum modi pariatur repudiandae! Quasi autem fuga quod magni doloremque!"
                    icon={<FaMobile />}
                />
                <Card
                    title="UX Design"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus cum modi pariatur repudiandae! Quasi autem fuga quod magni doloremque!"
                    icon={<SiAntdesign />}
                />
                <Card
                    title="Hosting Websites"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus cum modi pariatur repudiandae! Quasi autem fuga quod magni doloremque!"
                    icon={<FaGlobe />}
                />


            </div>
        </section>
    )
}

export default Features
