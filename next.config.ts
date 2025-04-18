import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e-com-ns0a.onrender.com",
        port: "",
        pathname: "**", // You can include the path here if needed
      },
    ],
  },
};

export default nextConfig;
