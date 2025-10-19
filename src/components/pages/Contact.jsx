"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

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

    const namevalid = /^[A-Za-z][A-Za-z 0-9\.\,\(\)\']{1,}$/i;
    const emailvalid = /^[*A-Za-z]{1,}[*A-Za-z0-9]{0,}[\.\_\-A-Za-z0-9][*A-Za-z0-9]{1,}@[A-Za-z]{2,}\.[^@\s\/.0-9]{2,5}$/i;

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!namevalid.test(formData.name)) return toast.error("Enter valid Name");
        if (!emailvalid.test(formData.email)) return toast.error("Enter valid Email");
        if (!namevalid.test(formData.message)) return toast.error("Enter valid Message");

        const message = new FormData(event.target);
        message.append("access_key", "e87d74b1-e8ec-4dfb-a003-850b929cb834");

        const object = Object.fromEntries(message);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message Sent Successfully");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className='min-h-screen h-auto bg-black' id="Contact">
            <div className='w-full h-full min-h-screen flex flex-col justify-between bg-gradient-to-b from-black via-[#00316562] to-[#030507]'>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl pt-8 font-bold">Contact Me</h1>
                    <div className="w-[28rem] sm:w-[32rem] md:w-[36rem] lg:w-[40rem] h-1 relative">
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    </div>
                </div>
                <div className="transform scale-90 md:scale-95 lg:scale-90 2xl:scale-100">
                    <div className="flex flex-col justify-center h-auto pb-8 w-full">


                        <div className="flex gap-12 md:gap-16 mx-4 sm:mx-8 xl:mx-32 flex-wrap lg:flex-nowrap mt-12 justify-center">
                            <div className="lg:w-1/2">
                                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">Let's Talk</h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 mt-4">
                                    Have a project in mind or just want to say hello? I'd love to hear from you! Whether you're looking to build a website from scratch, improve your current one, or collaborate on something cool, feel free to reach out.
                                </p>

                                <div className="flex gap-3 sm:gap-4 mt-6 items-center">
                                    <MdEmail className="text-3xl sm:text-4xl text-blue-400 bg-[#1764694b] rounded-full p-1 sm:p-2 hover:scale-110 transition-all " />
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">princekk102004@gmail.com</p>
                                </div>

                                <div className="flex gap-3 sm:gap-4 mt-4 items-center">
                                    <FaPhoneAlt className="text-3xl sm:text-4xl text-gray-400 bg-[#1764694b] rounded-full p-1 sm:p-2 hover:scale-110 transition-all " />
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">+917007393542</p>
                                </div>

                                <h1 className="text-xl sm:text-2xl font-bold mt-6">Socials</h1>
                                <div className="flex gap-4 sm:gap-6 mt-2 items-center">
                                    <Link target="_blank" href="https://github.com/Prince-kushwaha-2004">
                                        <FaGithub className="text-3xl sm:text-4xl p-1 sm:p-2 bg-[#1764694b] rounded-full text-gray-400 hover:scale-110 transition-all " />
                                    </Link>
                                    <Link target="_blank" href="https://www.linkedin.com/in/prince121kk/">
                                        <FaLinkedin className="text-3xl sm:text-4xl p-1 sm:p-2 bg-[#1764694b] rounded-full text-blue-400 hover:scale-110 transition-all " />
                                    </Link>
                                    <Link target="_blank" href="https://x.com/prince121kk">
                                        <FaSquareXTwitter className="text-3xl sm:text-4xl p-1 sm:p-2 bg-[#1764694b] rounded-full text-gray-400 hover:scale-110 transition-all " />
                                    </Link>
                                    <Link target="_blank" href="mailto:princekk102004@gmail.com">
                                        <MdEmail className="text-3xl sm:text-4xl p-1 sm:p-2 bg-[#1764694b] rounded-full text-blue-400 hover:scale-110 transition-all " />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <form onSubmit={onSubmit} className="bg-opacity-40 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg w-full 2xl:px-32">
                                    <input type="hidden" name="access_key" value="e87d74b1-e8ec-4dfb-a003-850b929cb834" />
                                    <div className="space-y-3 sm:space-y-4">
                                        <div>
                                            <label className="text-white text-xs sm:text-sm md:text-base lg:text-lg" htmlFor="name">Name</label>
                                            <input
                                                type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                                                className="w-full p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f707a36]"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white text-xs sm:text-sm md:text-base lg:text-lg" htmlFor="email">Email</label>
                                            <input
                                                type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                                                className="w-full p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f707a36]"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white text-xs sm:text-sm md:text-base lg:text-lg" htmlFor="message">Message</label>
                                            <textarea
                                                name="message" id="message" required value={formData.message} onChange={handleChange} rows="4"
                                                className="w-full p-2 sm:p-3 text-xs sm:text-sm md:text-base lg:text-lg rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f707a36]"
                                                placeholder="Enter your message"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full text-xs sm:text-sm md:text-base lg:text-xl py-2 sm:py-3 mt-2 sm:mt-4 rounded-md bg-[#1f707a36] text-white font-semibold hover:bg-[#4e515236] focus:ring-2 focus:ring-[#1f707a36]"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-slate-50 mt-8 text-xs sm:text-sm md:text-base">Copyright &#169; 2025 Prince Kushwaha</h1>



            </div>
        </div>
    )
}
