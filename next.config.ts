import type {NextConfig} from "next";
import {createVanillaExtractPlugin} from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    images: {
        unoptimized: true,
    },
    distDir: "out",
};

export default withVanillaExtract(nextConfig);
