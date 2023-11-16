/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) config.resolve.fallback.fs = false
        if (!isServer) config.resolve.fallback.module = false
        return config
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
