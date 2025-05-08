"use client"

import Ring from '../Spline/Ring'
import Image from 'next/image'
export default function Skills() {
    const row1 = ["html.webp", "css.webp", "js.webp"];
    const row2 = ["tailwind.webp", "bootstrap.webp", "nodejs.webp", "react.webp"];
    const row3 = ["express.webp", "mongodb.webp", "github.webp", "git.webp", "next.webp"];
    const row4 = ["docker.webp", "c.webp", "cpp.webp", "python.webp"];
    const row5 = ["firebase.webp", "nginx.webp", "angular.webp"];

    return (
        <div className='min-h-screen h-auto bg-bg2 bg-cover xl:relative' id="Skills">
            <div className="hidden xl:block xl:absolute w-full h-full right-[80rem] z-0">
                <Ring />
            </div>
            <div className='w-full h-full min-h-screen bg-gradient-to-b from-[#030507] via-[#090e14d8] to-[#030507] xl:absolute'>
                <div className='text-white  text-4xl  w-full h-auto '>
                    <div className="flex flex-col justify-center h-auto w-full">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">My Skills</h1>
                            <div className="w-[40rem] h-1 relative">
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row mx-8 mb-16 lg:mb-0 2xl:mx-32 mt-32 gap-2 sm:gap-8 xl:gap-32 justify-center items-center ">
                            <h1 className="text-sm sm:text-xl mt-8  lg:w-1/2 text-slate-300 leading-[2.5rem]">
                                I am a versatile full-stack developer with a strong foundation in both front-end and back-end technologies.
                                My expertise includes HTML, CSS, JavaScript, React.js, Node.js, and Express.js, allowing me to create dynamic,
                                scalable web applications.
                                <br /><br />
                                I have hands-on experience with MongoDB for database management and have worked with Docker
                                for containerization and Nginx for efficient web server management. Additionally, I am proficient in AngularJS, Tailwind,
                                Bootstrap, and Firebase, which help me build responsive and user-friendly interfaces.
                                <br /><br />
                                On the programming side,
                                I am well-versed in C/C++ and Python, offering a diverse skill set for tackling various development challenges.
                            </h1>
                            <div className="flex flex-col scale-50 sm:scale-75 md:scale-100  justify-center items-center">
                                <div className="flex gap-5 *:p-3">
                                    {row1.map((img, index) => {
                                        return (
                                            <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] hover:scale-110 h-[4rem] rounded-full  hover:-translate-y-2 transition-all hover:border border-slate-600" key={index}>
                                                <Image src={`/skills/${img}`} className="w-[3rem]" alt="img" width={700} height={200} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex gap-5 *:p-3">
                                    {row2.map((img, index) => {
                                        return (
                                            <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] hover:scale-110 h-[4rem] rounded-full  hover:-translate-y-2 transition-all hover:border border-slate-600" key={index}>
                                                <Image src={`/skills/${img}`} className="w-[3rem]" alt="img" width={700} height={200} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex gap-5 *:p-3">

                                    {row3.map((img, index) => {
                                        return (
                                            <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] hover:scale-110 h-[4rem] rounded-full  hover:-translate-y-2 transition-all hover:border border-slate-600" key={index}>
                                                <Image src={`/skills/${img}`} className="w-[3rem]" alt="img" width={700} height={200} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex gap-5">
                                    {row4.map((img, index) => {
                                        return (
                                            <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] hover:scale-110 h-[4rem] rounded-full  hover:-translate-y-2 transition-all hover:border border-slate-600" key={index}>
                                                <Image src={`/skills/${img}`} className="w-[3rem]" alt="img" width={700} height={200} />
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className="flex gap-5 *:p-3">
                                    {row5.map((img, index) => {
                                        return (
                                            <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] hover:scale-110 h-[4rem] rounded-full  hover:-translate-y-2 transition-all hover:border border-slate-600" key={index}>
                                                <Image src={`/skills/${img}`} className="w-[3rem]" alt="img" width={700} height={200} />
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
