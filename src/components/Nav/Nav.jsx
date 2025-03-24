import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ShinyText from "../ShinyText/ShinyText";

export default function Nav() {
    return (
        <SlideTabs />

    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative flex w-fit rounded-full border-black "
        >
            <Tab setPosition={setPosition}><a href="#Home" className="text-white hover:text-blue-300 transition-all"><ShinyText text="Home" /></a></Tab>
            <Tab setPosition={setPosition}><a href="#About" className="text-white hover:text-blue-300 transition-all"><ShinyText text="About" /></a></Tab>
            <Tab setPosition={setPosition}><a href="#Skills" className="text-white hover:text-blue-300 transition-all"><ShinyText text="Skills" /></a></Tab>
            <Tab setPosition={setPosition}><a href="#Projects" className="text-white hover:text-blue-300 transition-all"><ShinyText text="Projects" /></a></Tab>
            <Tab setPosition={setPosition}><a href="#Contact" className="text-white hover:text-blue-300 transition-all"><ShinyText text="Contact" /></a></Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-1 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 rounded-sm border-b md:h-8"
        />
    );
};