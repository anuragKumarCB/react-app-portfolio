import React from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'


const Contact = () => {


    return (
        <section id="contacts"
            className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex justify-center text-center'>
                <Title
                    title="Contact"
                    desc="Contact me with"
                />
            </div>
            <div className='w-full'>
                <div className='w-full h-auto flex flex-col gap-5 lgl:gap-0 lgl:flex-row justify-between'>
                    <ContactLeft />
                    <ContactRight />

                </div>
            </div>
        </section>
    )
}

export default Contact
