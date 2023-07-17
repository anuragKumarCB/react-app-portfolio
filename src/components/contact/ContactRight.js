import React from 'react'
import { useState } from "react"

const ContactRight = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSucessMsg] = useState("");

    // email validation section //

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    // hnadle send //

    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Name is required");
        } else if (phoneNumber === "") {
            setErrMsg("Phone Number is required");
        } else if (email === "") {
            setErrMsg("Email is required");
        } else if (!emailValidation(email)) {
            setErrMsg("Please provide valid email");
        } else if (subject === "") {
            setErrMsg("Subject is required");
        } else if (message === "") {
            setErrMsg("Message is required");
        } else {
            setSucessMsg("Your Message is sent successfull");
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }
    return (
        <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  flex flex-col  lgl:gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
            <form className='w-full flex flex-col gap-6 py-2'>
                {
                    errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>
                        {errMsg}
                    </p>
                }
                {
                    successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                        {successMsg}
                    </p>
                }
                <div className='w-full flex flex-col md:flex-row gap-4 md:gap-10'>
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                        <input onChange={(e) =>
                            setUsername(e.target.value)}
                            value={username}
                            className={`${errMsg === "Name is required" && "outline-designColor"
                                } contactInput active:outline-none focus-visible:contactInputFocus`}
                            type="text" />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone</p>
                        <input onChange={(e) =>
                            setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className='contactInput active:outline-none focus-visible:contactInputFocus'
                            type="text" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                    <input onChange={(e) =>
                        setEmail(e.target.value)}
                        value={email}
                        className='contactInput active:outline-none focus-visible:contactInputFocus'
                        type="email" />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                    <input onChange={(e) =>
                        setSubject(e.target.value)}
                        value={subject}
                        className='contactInput active:outline-none focus-visible:contactInputFocus'
                        type="text" />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
                    <textarea onChange={(e) =>
                        setMessage(e.target.value)}
                        value={message}
                        className='contactTextArea active:outline-none focus-visible:contactInputFocus'
                        cols="30"
                        rows="8">
                    </textarea>
                </div>
                <div>
                    <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>
                        Send Message
                    </button>
                </div>
                {
                    errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>
                        {errMsg}
                    </p>
                }
                {
                    successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                        {successMsg}
                    </p>
                }
            </form>
        </div>
    )
}

export default ContactRight
