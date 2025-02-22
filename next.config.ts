import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;