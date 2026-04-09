/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['color-functions',
      'global-builtin',
      'import',
      'if-function',],
  },
}

module.exports = nextConfig
