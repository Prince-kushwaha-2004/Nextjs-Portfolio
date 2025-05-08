import React, { useState } from 'react';
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
const Modal = ({ isOpen, onClose, project }) => {
    const [currentImage, setCurrentImage] = useState(0);

    if (!isOpen || !project) return null;

    const { name, description, details, techStack, screenshots, githubLink, liveLink } = project;

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % screenshots.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
            <div className="bg-bg3 bg-cover shadow border border-slate-500 w-[90vw] h-[90vh] rounded-lg ">
                <div className='bg-gradient-to-b from-[#030507] via-[#0000008e] to-[#030507]  text-white rounded-lg shadow-lg  w-full h-full p-10 relative'>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-300 hover:text-red-500 text-xl"
                    >
                        ✖
                    </button>

                    <div className='flex flex-wrap justify-between items-center w-full h-full '>
                        <div className='w-full lg:w-1/2 '>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-2 lg:mb-8">{name}</h2>
                            <p className="text-gray-200 text-sm sm:text-lg lg:text-xl mb-4">{description}</p>

                            <ul className="list-disc mb-4 text-gray-300">
                                {details.map((point, index) => (

                                    <li className='text-sm sm:text-lg mt-2 lg:text-lg text-white' key={index}>{point}</li>
                                ))}
                            </ul>

                            <div className="mb-4 lg:mt-8">
                                <h3 className="font-semibold  text-2xl lg:text-4xl">Tech Stack:</h3>
                                {/* <div className="flex flex-wrap gap-2 mt-1">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-800 text-blue-100 px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div> */}
                                <div className="flex gap-4 mt-2 lg:mt-4">
                                    {
                                        techStack.map((tech, index) => {
                                            return (
                                                <div className="flex justify-center items-center  bg-gray-900 w-[2rem] lg:w-[2.5rem] h-[2rem] lg:h-[2.5rem] rounded-full" key={index}>
                                                    <Image src={`/skills/${tech}`} width={400}
                                                        height={200} className="w-[1.5rem] lg:w-[1.8rem]" alt="image" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className=" flex flex-col gap-3 mt-8 lg:mt-16 ">
                                {githubLink && (
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" text-white text-sm lg:text-lg hover:text-blue-500 rounded flex items-center gap-2"
                                    >
                                        <FaGithub /> View on GitHub
                                    </a>
                                )}
                                {liveLink && (
                                    <a
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" text-white text-sm lg:text-lg hover:text-blue-500  rounded flex items-center gap-2"
                                    >
                                        <IoIosLink /> Live Project
                                    </a>
                                )}
                            </div>

                        </div>



                        <div className="relative w-full lg:w-1/2 ">
                            <img
                                src={screenshots[currentImage]}
                                alt={`Screenshot ${currentImage + 1}`}
                                className="w-full p-16 object-contain rounded "
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow"
                            >
                                ◀
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2  rounded-full p-2 shadow"
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
