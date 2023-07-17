import React from 'react'
import { animate, motion } from "framer-motion"
import SkillCard from './card/SkillCard'

const Skills = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .5 } }}
            className='w-full flex flex-col lgl:flex-row lgl:gap-20'
        >
            <div className='w-full lgl:w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-3xl lgl:text-4xl font-bold'>Development Skills</h2>
                </div>
                <div className='w-full'>
                    <SkillCard
                        title="React"
                        percentage="90%"
                        skillWidth="w-[90%]"
                    />
                    <SkillCard
                        title="MERN"
                        percentage="70%"
                        skillWidth="w-[70%]"
                    />
                    <SkillCard
                        title="HTML 5"
                        percentage="95%"
                        skillWidth="w-[95%]"
                    />
                    <SkillCard
                        title="CSS"
                        percentage="80%"
                        skillWidth="w-[80%]"
                    />
                    <SkillCard
                        title="JavaScript"
                        percentage="70%"
                        skillWidth="w-[70%]"
                    />


                </div>
            </div>
            <div className='w-full lgl:w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-3xl lgl:text-4xl font-bold'>Designing Skills</h2>
                </div>
                <div className='w-full '>
                    <SkillCard
                        title="PhotoShop"
                        percentage="100%"
                        skillWidth="w-[100%]"
                    />
                    <SkillCard
                        title="Adobe Illustrator"
                        percentage="50%"
                        skillWidth="w-[50%]"
                    />
                    <SkillCard
                        title="Figma"
                        percentage="70%"
                        skillWidth="w-[70%]"
                    />
                    <SkillCard
                        title="Adobe XD"
                        percentage="30%"
                        skillWidth="w-[30%]"
                    />
                    <SkillCard
                        title="Photoshoot"
                        percentage="80%"
                        skillWidth="w-[80%]"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
