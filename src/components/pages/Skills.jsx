"use client"
import img1 from '@/assets/skills/1.webp'
import img10 from '@/assets/skills/10.png'
import img12 from '@/assets/skills/12.png'
import img13 from '@/assets/skills/13.png'
import img14 from '@/assets/skills/14.webp'
import img15 from '@/assets/skills/15.png'
import img16 from '@/assets/skills/16.png'
import img17 from '@/assets/skills/17.webp'
import img18 from '@/assets/skills/18.webp'
import img19 from '@/assets/skills/19.png'
import img2 from '@/assets/skills/2.png'
import img20 from '@/assets/skills/20.png'
import img3 from '@/assets/skills/3.webp'
import img4 from '@/assets/skills/4.png'
import img5 from '@/assets/skills/5.png'
import img6 from '@/assets/skills/6.webp'
import img7 from '@/assets/skills/7.png'
import img8 from '@/assets/skills/8.png'
import img9 from '@/assets/skills/9.webp'
import Ring from '../Spline/Ring'
import Image from 'next/image'
export default function Skills() {
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
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img1} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img2} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img3} className="w-[3rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex gap-5 *:p-3">
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img4} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img5} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img6} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img7} className="w-[3rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex gap-5 *:p-3">

                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img8} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img9} className="w-[3rem]" alt="" />
                                    </div>

                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img10} className="w-[3rem] rounded-full bg-white" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img12} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img13} className="w-[3rem]" alt="" />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img14} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img15} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img16} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img17} className="w-[3rem]" alt="" />
                                    </div>

                                </div>
                                <div className="flex gap-5 *:p-3">
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img18} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img19} className="w-[3rem]" alt="" />
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center items-center m-4 bg-gray-900 w-[4rem] h-[4rem] rounded-full">
                                        <Image src={img20} className="w-[3rem]" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
