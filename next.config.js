/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inkara.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

const withVideos = require("next-videos");

module.exports = withVideos();
module.exports = nextConfig;
