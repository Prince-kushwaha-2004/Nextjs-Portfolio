import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default withFlowbiteReact(nextConfig);