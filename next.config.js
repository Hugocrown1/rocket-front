/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hdpng.com",
      },
    ],
  },
};

module.exports = nextConfig;
