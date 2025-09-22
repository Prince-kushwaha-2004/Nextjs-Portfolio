"use client"
import Image from "next/image"
import SpotlightCard from "../SpotlightCard/SpotlightCard"
import Modal from "../modal/Modal"
import { useState } from "react"
import { projects } from "@/data/projects"
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className='min-h-screen h-auto bg-bg3 bg-cover' id="Projects">
            <div className='w-full h-full min-h-screen bg-gradient-to-b from-[#030507] via-[#0000008e] to-[#030507] '>
                <div className='text-white  text-4xl w-full h-auto'>
                    <div className="flex flex-col justify-center h-auto pb-8 w-full">
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
                            <div className="w-[40rem] h-1 relative">
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            </div>
                        </div>
                        <div className="mt-16 mx-8 xl:mx-10 flex flex-wrap justify-center gap-8">
                            {
                                projects.map((item, index) => {
                                    return (
                                        <SpotlightCard key={index}>
                                            <div className='flex flex-col w-[20rem] lg:w-[24rem] justify-between cursor-pointer' onClick={() => setSelectedProject(item)}>
                                                <div>
                                                    <Image
                                                        src={item.img}
                                                        alt="img"
                                                        width={700}
                                                        height={200}
                                                    />
                                                </div>
                                                <div className='p-8 flex-1 flex flex-col justify-between'>
                                                    <div>
                                                        <h1 className='text-2xl sm:text-3xl font-semibold'>{item.name}</h1>
                                                        <p className="text-sm sm:text-lg text-slate-300 mt-4 text-justify">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-4 mt-8">
                                                        {
                                                            item.techStack.map((tech, index) => {
                                                                return (
                                                                    <div className="flex justify-center items-center  bg-gray-900 w-[3rem] h-[3rem] rounded-full hover:scale-125 hover:-translate-y-2 transition-all" key={index}>
                                                                        <Image src={`/skills/${tech}`} width={700}
                                                                            height={200} className="w-[2rem]" alt="image" />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Modal
                        isOpen={!!selectedProject}
                        onClose={() => setSelectedProject(null)}
                        project={selectedProject}
                    />
                </div>
            </div>
        </div>
    )
}
