import type { NextConfig } from "next";
import { env } from "process";

const getPassword = () => {
  try {
    return env["PASSWORD"];
  } catch (ex) {
    console.log(ex);
    console.warn("No Password Configured!");
  }
  return "0000";
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    PASSWORD: getPassword()
  },
};

export default nextConfig;
