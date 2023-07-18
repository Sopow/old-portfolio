/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGOOSE_URI:
      "mongodb+srv://Sopow:SopowDatabase@api.d4fxd.mongodb.net/?retryWrites=true&w=majority",
  },
  // webpack: (config) => {
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: {
  //       fs: false,
  //       path: false,
  //       os: false,
  //       child_process: false,
  //     },
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
