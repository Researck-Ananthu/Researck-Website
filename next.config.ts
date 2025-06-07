import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
   images: {
      localPatterns: [
         {
            pathname: "/assets/images/**",
            search: "",
         },
      ],
      unoptimized: true,
   },
   // remotePatterns: [
   //    {
   //       protocol: "https",
   //       hostname: "img.freepik.com",
   //       port: "",
   //    },
   //    {
   //       protocol: "https",
   //       hostname: "images.unsplash.com",
   //       port: "",
   //    },
   //    {
   //       protocol: "https",
   //       hostname: "bluepixeltech.com",
   //       port: "",
   //    },
   // ],
};

export default nextConfig;
