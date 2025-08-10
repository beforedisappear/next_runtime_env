import { makeEnvPublic } from "next-runtime-env";

makeEnvPublic(["SERVER_NEW_LIST"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
