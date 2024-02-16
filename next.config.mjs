/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: ''
            }
        ]
    },
    compiler: {
        removeConsole: true
    },
    swcMinify: true
};

export default nextConfig;
