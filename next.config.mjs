/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'mtgar.com',
            },
            {
                protocol: 'https',
                hostname: 'landing.mtgar.com',
            },
        ],
    },
};

export default nextConfig;
