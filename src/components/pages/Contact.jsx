"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { MdEmail } from "react-icons/md";



export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send to an API or email)
        console.log(formData);
    };

    return (
        <div className='min-h-screen h-auto bg-bg1 bg-cover' id="Contact">
            <div className='w-full h-full min-h-screen flex flex-col justify-between  bg-gradient-to-b from-[#030507] via-[#0000008e] to-[#030507] '>
                <div className='text-white text-4xl w-full h-auto'>
                    <div className="flex flex-col justify-center h-auto pb-8 w-full">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">Contact Me</h1>
                            <div className="w-[40rem] h-1 relative">
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            </div>
                        </div>
                        <div className="flex gap-16 mx-8 xl:mx-32  flex-wrap lg:flex-nowrap mt-16 justify-center ">
                            <div className="lg:w-1/2">
                                <h1 className="text-3xl sm:text-4xl font-bold">Let's Talk</h1>
                                <p className="text-sm sm:text-xl text-slate-200 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
                                <div className="flex gap-4 items-center mt-8">
                                    <MdEmail className="text-4xl sm:text-5xl text-blue-400 bg-[#1764694b] rounded-full p-2 hover:scale-110 transition-all " />
                                    <p className="text-sm sm:text-xl">princekk102004@gmail.com</p>
                                </div>
                                <div className="flex gap-4 items-center mt-8">
                                    <MdEmail className="text-4xl sm:text-5xl text-gray-400 bg-[#1764694b] rounded-full p-2 hover:scale-110 transition-all " />
                                    <p className="text-sm sm:text-xl">7007393542</p>
                                </div>
                                <h1 className="text-2xl font-bold mt-8">Socials</h1>
                                <div className="flex gap-8 mt-4 items-center">
                                    <FaGithub className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-gray-400 hover:scale-110 transition-all " />
                                    <FaLinkedin className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-blue-400 hover:scale-110 transition-all " />
                                    <FaSquareXTwitter className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-gray-400 hover:scale-110 transition-all " />
                                    <MdEmail className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-blue-400 hover:scale-110 transition-all " />
                                </div>

                            </div>
                            <div className="lg:w-1/2" >
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-opacity-40  ms-auto backdrop-blur-md p-8 rounded-lg shadow-lg w-full 2xl:px-32"
                                >
                                    <div className="space-y-4 ">
                                        <div>
                                            <label className="text-white text-sm sm:text-lg" htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm sm:text-xl rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f707a36] focus:border-[#1f707a36]"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-white text-sm sm:text-lg" htmlFor="email">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm sm:text-xl rounded-md  bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f707a36] focus:border-[#1f707a36]"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-white text-sm sm:text-lg" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full p-3 text-sm sm:text-xl rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f707a36] focus:border-[#1f707a36]"
                                                placeholder="Enter your message"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full text-sm sm:text-xl py-3 mt-4 rounded-md bg-[#1f707a36] text-white font-semibold hover:bg-[#4e515236] focus:ring-2 focus:ring-[#1f707a36] focus:border-[#1f707a36]"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>

                </div>
                {/* <h1 className="text-center pb-2 text-slate-50    ">Made with love @Prince Kushwaha</h1> */}
            </div>
        </div>
    )
}
