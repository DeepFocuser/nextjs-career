/** @type {import("next").NextConfig} */

const nextConfig = {
    images: {
        // domains: ['avatars.githubusercontent.com'],
    }, experimental: {
        appDir: true, // webVitalsAttribution: ['CLS', 'LCP']
    }, reactStrictMode: true,
};

module.exports = nextConfig;
