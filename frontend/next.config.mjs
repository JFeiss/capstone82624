/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://capstone82624.onrender.com",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
