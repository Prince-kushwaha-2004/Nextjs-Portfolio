"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ReactTyped } from "react-typed";
import Button1 from "../Buttons/Button1";
import Link from "next/link";

import Nav from "../Nav/Nav";
import Ring from "../Spline/Ring";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
export default function HomePage() {
    return (
        <div className={`w-screen min-h-screen bg-bg1 bg-cover relative`} id="Home">
            <HoverBorderGradient children={<Nav />} className="bg-transparent px-8 text-xl border-slate-700" containerClassName="border-slate-700 bg-transparent relative z-[100] top-5  left-1/2 transform -translate-x-1/2 " />
            <div className="absolute w-full h-full left-40 xl:left-80">
                <Ring />
            </div>
            <div className='w-screen h-full bg-gradient-to-b from-transparent to-[#030507] absolute'></div>
            <div className='flex  w-screen h-screen ' >
                <div className='w-full px-4 lg:px-40 xl:px-60 flex flex-col justify-center z-[10]'>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">Hi There,</h1>
                    <h1 className="text-3xl mt-4 sm:text-5xl md:text-6xl font-bold text-white"> I'm{" "}
                        <ReactTyped className="bg-gradient-to-r from-blue-600 via-[#5980a0] to-indigo-400 inline-block text-transparent bg-clip-text" strings={["PRINCE KUSHWAHA"]} typeSpeed={150} /></h1>

                    <div className="text-md sm:text-xl mt-16 text-gray-300 w-full lg:w-2/3 ">
                        I’m a passionate web developer who loves turning ideas into dynamic, high-performance websites. With expertise in MERN stack and Next.js, I bring a well-rounded approach to building SEO-friendly, scalable web applications that deliver seamless user experiences.
                    </div>
                    <div className="mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-32">
                        <Link href="/prince-resume.pdf" target="_blank"><Button1 text="Resume" className={"w-[10rem]"} /></Link>
                        <div className="flex gap-8 items-center">
                            <Link target="_blank" href="https://github.com/Prince-kushwaha-2004"> <FaGithub className="text-3xl text-gray-400 hover:scale-110 transition-all " /></Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/prince121kk/"><FaLinkedin className="text-3xl text-blue-400 hover:scale-110 transition-all " /></Link>
                            <Link target="_blank" href="https://x.com/prince121kk"> <FaSquareXTwitter className="text-3xl text-gray-400 hover:scale-110 transition-all " /></Link>
                            <Link target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=princekk102004@gmail.com"> <MdEmail className="text-4xl text-blue-400 hover:scale-110 transition-all " /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
