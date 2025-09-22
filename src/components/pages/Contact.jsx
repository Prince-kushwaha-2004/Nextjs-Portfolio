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
        console.log(formData);

        if (!namevalid.test(formData.name)) {
            return toast.error("Enter valid Name")
        }
        if (!emailvalid.test(formData.email)) {
            return toast.error("Enter valid Email")
        }
        if (!namevalid.test(formData.message)) {
            return toast.error("Enter valid Message")
        }

        const message = new FormData(event.target);
        message.append("access_key", "e87d74b1-e8ec-4dfb-a003-850b929cb834");

        const object = Object.fromEntries(message);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message Sent Successfully")
            setFormData({
                name: "",
                email: "",
                message: "",
            })
        }
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
                                <p className="text-sm sm:text-xl text-slate-200 mt-4">Have a project in mind or just want to say hello? I'd love to hear from you! Whether you're looking to build a website from scratch, improve your current one, or collaborate on something cool, feel free to reach out.</p>
                                <div className="flex gap-4 items-center mt-8">
                                    <MdEmail className="text-4xl sm:text-5xl text-blue-400 bg-[#1764694b] rounded-full p-2 hover:scale-110 transition-all " />
                                    <p className="text-sm sm:text-xl">princekk102004@gmail.com</p>
                                </div>
                                <div className="flex gap-4 items-center mt-8">
                                    <FaPhoneAlt className="text-4xl sm:text-5xl text-gray-400 bg-[#1764694b] rounded-full p-2 hover:scale-110 transition-all " />
                                    <p className="text-sm sm:text-xl">+917007393542</p>
                                </div>
                                <h1 className="text-2xl font-bold mt-8">Socials</h1>
                                <div className="flex gap-8 mt-4 items-center">
                                    <Link target="_blank" href="https://github.com/Prince-kushwaha-2004"><FaGithub className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-gray-400 hover:scale-110 transition-all " /></Link>
                                    <Link target="_blank" href="https://www.linkedin.com/in/prince121kk/"><FaLinkedin className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-blue-400 hover:scale-110 transition-all " /></Link>
                                    <Link target="_blank" href="https://x.com/prince121kk"><FaSquareXTwitter className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-gray-400 hover:scale-110 transition-all " /></Link>
                                    <Link target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=princekk102004@gmail.com"><MdEmail className="text-4xl sm:text-5xl p-2 bg-[#1764694b] rounded-full text-blue-400 hover:scale-110 transition-all " /></Link>
                                </div>

                            </div>
                            <div className="lg:w-1/2" >
                                <form
                                    onSubmit={onSubmit}
                                    className="bg-opacity-40  ms-auto backdrop-blur-md p-8 rounded-lg shadow-lg w-full 2xl:px-32"
                                >
                                    <input type="hidden" name="access_key" value="e87d74b1-e8ec-4dfb-a003-850b929cb834"></input>
                                    <div className="space-y-4 ">
                                        <div>
                                            <label className="text-white text-sm sm:text-lg" htmlFor="name">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
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
                                                required
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
                                                required
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
                <h1 className="text-center pb-2 text-slate-50    ">Copyright &#169; 2025 Prince Kushwaha</h1>
            </div>
        </div>
    )
}
