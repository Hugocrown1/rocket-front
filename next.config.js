/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hdpng.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

module.exports = nextConfig;

// next.config.js
const withVideos = require("next-videos");

module.exports = withVideos();
