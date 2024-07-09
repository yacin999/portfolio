// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })
   


//   /** @type {import('next').NextConfig} */
//   const nextConfig = {
//     transpilePackages: ['three'],
//   }
   
//   module.exports = withBundleAnalyzer(nextConfig)



import withBundleAnalyzer from '@next/bundle-analyzer';

const config = {
  enabled: process.env.ANALYZE === 'true',
};

const nextConfig = {
  transpilePackages: ['three'],
};

export default withBundleAnalyzer(config)(nextConfig);