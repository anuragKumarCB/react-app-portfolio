import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'
import { projectOne, projectThree, projectTwo } from '../../assets'

const Projects = () => {
    return (
        <section
            id='projects'
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className='flex justify-center text-center'>
                <Title
                    title="VISIT MY PORTFOLIO"
                    desc="My Projects"
                />
            </div>
            <div className='grid gap-8 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 xl:gap-14'>
                <ProjectCards
                    media={projectOne}
                    title="Gym App"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae aspernatur voluptates, odio aperiam."
                />
                <ProjectCards
                    media={projectTwo}
                    title="E-commerce App"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae aspernatur voluptates, odio aperiam."
                />
                <ProjectCards
                    media={projectThree}
                    title="Video Streaming App"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae aspernatur voluptates, odio aperiam."
                />
                <ProjectCards
                    media={projectThree}
                    title="Chatting App"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae aspernatur voluptates, odio aperiam."
                />
                <ProjectCards
                    media={projectOne}
                    title="Social Media App"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae aspernatur voluptates, odio aperiam."
                />
                <ProjectCards
                    media={projectTwo}
                    title="Booking App"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem recusandae aspernatur voluptates, odio aperiam."
                />
            </div>
        </section>
    )
}

export default Projects
