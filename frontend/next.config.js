/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL:process.env.API_URL,
        API_AUTH_URL:process.env.API_AUTH_URL
    }
}

module.exports = nextConfig
