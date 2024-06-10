/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'cms.sleep-bag-shop.ru',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig