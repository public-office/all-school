module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/content/:path*',
        destination: process.env.CONTENT_URL + '/:path*',
      },
    ]
  },
}
