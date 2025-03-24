"use client"
import proj1 from '@/assets/project.png'
import Image from "next/image"
import SpotlightCard from "../SpotlightCard/SpotlightCard"
import img18 from '@/assets/skills/18.webp'
import img19 from '@/assets/skills/19.png'
import img20 from '@/assets/skills/20.png'
export default function Projects() {
    const projects = [
        {
            name: "project1",
            img: proj1,
            description: " Lorem ipsum dolor sit amet, consectetur adipisicing elitsm. sdfsdfdsfsOdit ratione perferendis nisi aut saepe earum totam provident similique odio? Vel optio maiores exercitationem. Consectetur quaerat ipsam officia quo, quidem in",
            techStack: [img18, img19, img20]
        },
        {
            name: "project2",
            img: proj1,
            description: " Lorem ipsum dolor sit amet, consectetur adipisicing elitsm. sdfsdfdsfsOdit ratione perferendis nisi aut saepe earum totam provident similique odio? Vel optio maiores exercitationem. Consectetur quaerat ipsam officia quo, quidem in",
            techStack: [img18, img19, img20]
        },
        {
            name: "project3",
            img: proj1,
            description: " Lorem ipsum dolor sit amet, consectetur adipisicing elitsm. sdfsdfdsfsOdit ratione perferendis nisi aut saepe earum totam provident similique odio? Vel optio maiores exercitationem. Consectetur quaerat ipsam officia quo, quidem in",
            techStack: [img18, img19, img20]
        },
        {
            name: "project4",
            img: proj1,
            description: " Lorem ipsum dolor sit amet, consectetur adipisicing elitsm. sdfsdfdsfsOdit ratione perferendis nisi aut saepe earum totam provident similique odio? Vel optio maiores exercitationem. Consectetur quaerat ipsam officia quo, quidem in",
            techStack: [img18, img19, img20]
        }
    ]
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
                                            <div className='flex flex-col w-[20rem] lg:w-[24rem] justify-between'>
                                                <div>
                                                    <Image
                                                        src={item.img}
                                                        alt="img"
                                                        width={700}
                                                    />
                                                </div>
                                                <div className='p-8 flex-1 flex flex-col justify-between'>
                                                    <div>
                                                        <h1 className='text-2xl sm:text-3xl'>{item.name}</h1>
                                                        <p className="text-sm sm:text-lg text-slate-300 mt-4">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-4 mt-8">
                                                        {
                                                            item.techStack.map((tech, index) => {
                                                                return (
                                                                    <div className="flex justify-center items-center  bg-gray-900 w-[3rem] h-[3rem] rounded-full" key={index}>
                                                                        <Image src={tech} className="w-[2rem]" alt="" />
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
                </div>
            </div>
        </div>
    )
}
