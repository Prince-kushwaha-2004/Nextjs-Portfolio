"use client"
import { FaGithub } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import Robot from "../Spline/Robot";
import Link from "next/link";
export default function AboutPage() {
    return (
        <div className='min-h-screen h-auto bg-[#030507] bg-bg3 bg-cover relative' id="About">
            <div className='w-screen h-full min-h-screen bg-gradient-to-b from-[#030507] via-[#03050781] to-[#030507]'>

                <div className='text-white text-4xl h-full w-full sm:pt-28 md:pt-36 lg:pt-8'>
                    <div className="flex flex-col items-center w-full h-full">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-3xl sm:text-4xl font-bold font-serif">About Me</h1>
                            <div className="w-[40rem] h-1 relative">
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            </div>
                        </div>
                        <div className="flex flex-1 items-center mx:2 2xl:mx-40 gap-64 text-slate-300">
                            <div className="w-1/2 relative hidden ms-16 lg:ms-32 lg:block">
                                <div className="hidden  h-full lg:flex justify-center items-center">
                                    <Robot />
                                </div>
                            </div>

                            <h1 className="text-sm sm:text-lg lg:text-xl mx-4 sm:mx-8 lg:mx-0 lg:ms-auto mt-12 lg:me-10  leading-[2rem] lg:leading-[2.5rem]">
                                Hello, I’m Prince Kushwaha, a dedicated web developer with a strong passion for creating high-performance, user-friendly applications. I specialize in web development using modern frameworks and technologies like React, MongoDB, Node.js, and Next.js. I also have experience working with AngularJS and Django, allowing me to approach projects with a diverse toolkit.

                                Over the course of my career, I’ve developed and successfully completed over 10 projects, which you can explore in my Projects section.
                                <br /><br />
                                In addition to my development work, I am an active coder with a 2-star ranking on CodeChef and a rating of over 1400, further enhancing my problem-solving and algorithmic skills.
                                <div className="flex gap-8 items-center mt-10 mb-8 md:mb-0">
                                    <Link href="https://leetcode.com/u/prince121kk/"><SiLeetcode className="text-2xl sm:text-3xl text-gray-400 hover:scale-110 transition-all " /></Link>
                                    <Link href="https://www.codechef.com/users/prince121kk"><SiCodechef className="text-2xl sm:text-3xl text-blue-400 hover:scale-110 transition-all " /></Link>
                                    <Link href="https://codeforces.com/profile/prince121kk"><SiCodeforces className="text-2xl sm:text-3xl text-gray-400 hover:scale-110 transition-all " /></Link>
                                    <Link href="https://github.com/Prince-kushwaha-2004"><FaGithub className="text-2xl sm:text-3xl text-blue-400 hover:scale-110 transition-all " /></Link>
                                </div>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
