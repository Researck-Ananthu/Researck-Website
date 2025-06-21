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

  // ✅ Force use of raw-loader for shader files (GLSL)
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      use: ["raw-loader"],
    });
    return config;
  },
};

export default nextConfig;
