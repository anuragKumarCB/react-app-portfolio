import React from 'react'
import { animate, motion } from "framer-motion"

const SkillCard = ({ title, percentage, skillWidth }) => {
    return (
        <div className='pb-4 overflow-x-hidden'>
            <div className='flex justify-between'>
                <p className='text-sm uppercase font-medium'>{title}</p>
                <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .5 }}
                >{percentage}</motion.span>
            </div>
            <span className='w-full h-2 skillWindow inline-flex rounded-md'>
                <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .5 }}
                    className={`${skillWidth} h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md`}></motion.span>
            </span>
        </div>

    )
}

export default SkillCard
