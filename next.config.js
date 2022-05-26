/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGOOSE_URI: 'mongodb+srv://Sopow:SopowDatabase@api.d4fxd.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig