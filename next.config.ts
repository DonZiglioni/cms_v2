import type { NextConfig } from "next";
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.cdn.printful.com',
        port: '',
        pathname: '/files/**',
        search: '',
      },
    ],
  },
}
const nextConfig: NextConfig = {
  /* config options here */

};

export default nextConfig;
