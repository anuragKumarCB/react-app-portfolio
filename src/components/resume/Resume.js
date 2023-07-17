import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achivements from './Achivements'

const Resume = () => {
    const [educationData, setEducationData] = useState(true)
    const [skillData, setSkillData] = useState(false)
    const [exprerienceData, setExprerienceData] = useState(false)
    const [achivementsData, setAchivementsData] = useState(false)
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center text-center'>
                <Title
                    title="3+ Years of exprerience"
                    desc="My Resume"
                />
            </div>
            <div>
                <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setSkillData(false) &
                            setExprerienceData(false) &
                            setAchivementsData(false)
                        }
                        className={`${educationData
                            ? "resumeLiActive"
                            : "border-transparent"
                            } resumeLi hover:resumeLiHover`}
                    >
                        Education
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(true) &
                            setExprerienceData(false) &
                            setAchivementsData(false)
                        }
                        className={`${skillData
                            ? "resumeLiActive"
                            : "border-transparent"
                            } resumeLi hover:resumeLiHover`}
                    >
                        Professional Skills
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExprerienceData(true) &
                            setAchivementsData(false)
                        }
                        className={`${exprerienceData
                            ? "resumeLiActive"
                            : "border-transparent"
                            } resumeLi hover:resumeLiHover`}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setExprerienceData(false) &
                            setAchivementsData(true)
                        }
                        className={`${achivementsData
                            ? "resumeLiActive"
                            : "border-transparent"
                            } resumeLi hover:resumeLiHover`}
                    >
                        Achievements
                    </li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
            {
                skillData && <Skills />
            }
            {
                exprerienceData && <Experience />
            }
            {
                achivementsData && <Achivements />
            }
        </section >
    )
}

export default Resume
