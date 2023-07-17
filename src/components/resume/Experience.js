import React from 'react'
import { motion } from "framer-motion"
import ResumeCard from './card/ResumeCard'


const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .5 } }}
            className='w-full flex flex-col lgl:flex-row gap-20'>
            <div>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2014-2022</p>
                    <h2 className='text-3xl lgl:text-4xl font-bold'>Development</h2>
                </div>
                <div className='mt-8 w-full md:w-[85%] mdl:w-[80%] lg:w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="BCA - Bachelor of Computer Application"
                        subTitle="Radha Govind University (2019 - 2022)"
                        result="na"
                        desc="During this time it was really fun learning and building stuff."
                    />
                    <ResumeCard
                        title="I SC - Intermediate of Science"
                        subTitle="Megasoft Foundation SR Secondary School (2014 - 2016)"
                        result="66.4 %"
                        desc="This was the time when i first got interested in Porgramming. Before this i was only into hardware and robots"
                    />
                    <ResumeCard
                        title="Matriculation"
                        subTitle="S V M High School (2012)"
                        result="72.2"
                        desc="I loved scince and machines and took part in science projects"
                    />
                </div>
            </div>
            <div>
                <div className='lgl:py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2014-2022</p>
                    <h2 className='text-3xl lgl:text-4xl font-bold'>Designing</h2>
                </div>
                <div className='mt-8 w-full md:w-[85%] mdl:w-[80%] lg:w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="BCA - Bachelor of Computer Application"
                        subTitle="Radha Govind University (2019 - 2022)"
                        result="na"
                        desc="During this time it was really fun learning and building stuff."
                    />
                    <ResumeCard
                        title="I SC - Intermediate of Science"
                        subTitle="Megasoft Foundation SR Secondary School (2014 - 2016)"
                        result="66.4 %"
                        desc="This was the time when i first got interested in Porgramming. Before this i was only into hardware and robots"
                    />
                    <ResumeCard
                        title="Matriculation"
                        subTitle="S V M High School (2012)"
                        result="72.2"
                        desc="I loved scince and machines and took part in science projects"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Experience
