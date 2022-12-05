/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/images/**",
      },
      // we we are downloading images from multiple resources then we can add them here
    ],
  },
};

module.exports = nextConfig;
