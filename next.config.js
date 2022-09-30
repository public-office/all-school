const assert = require('assert')

assert(process.env.NEXT_PUBLIC_STRAPI_TOKEN, 'NEXT_PUBLIC_STRAPI_TOKEN env var not found')
assert(process.env.NEXT_PUBLIC_STRAPI_URL, 'NEXT_PUBLIC_STRAPI_URL env var not found')

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: process.env.NEXT_PUBLIC_STRAPI_URL+'/uploads/:path*',
      },
    ]
  },
}
