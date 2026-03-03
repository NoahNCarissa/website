import type { NextConfig } from "next";
const path = require("path");
import { env } from "process";

const getPassword = () => {
  try {
    return env["WEBSITE_PASSWORD"];
  } catch (ex) {
    console.log(ex);
    console.warn("No Password Configured!");
  }
  return "0000";
}

export const isDevelopment = () => {
  return env?.ENVIRONMENT === "development";
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    PASSWORD: getPassword()
  },
  sassOptions: {
  //   implementation: 'sass',
    silenceDeprecations: ["*"],
    loadPaths: [path.join(__dirname, "src/lib/styles"), path.join(__dirname, "node_modules/bootstrap/scss")]
  },
  transpilePackages: ["next-auth"],
};

export default nextConfig;
