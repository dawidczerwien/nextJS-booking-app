/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }, {hostname: 'lh3.googleusercontent.com'}],
  },
};

export default nextConfig;
