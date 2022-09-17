/* eslint-env node */
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
}

// eslint-disable-next-line
const withTM = require('next-transpile-modules')(['@lepakdao/contracts'])

module.exports = withTM(nextConfig)
