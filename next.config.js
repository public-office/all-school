const assert = require('assert')
const path = require('path')

assert(process.env.NEXT_PUBLIC_STRAPI_TOKEN, 'NEXT_PUBLIC_STRAPI_TOKEN env var not found')
assert(process.env.NEXT_PUBLIC_STRAPI_URL, 'NEXT_PUBLIC_STRAPI_URL env var not found')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: process.env.NEXT_PUBLIC_STRAPI_URL+'/uploads/:path*',
      },
      {
        source: '/mailchimp',
        destination: 'https://nextwave.us3.list-manage.com/subscribe/post-json?u=52cce2d9ba60a58f04e3e10db&id=b1d3fa2f02'
      }
    ]
  },
}
