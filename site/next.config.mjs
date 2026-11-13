/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-server.nextwebworks.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-server.nextwebworks.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nextwebworks.in',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nextwebworks.in',
          },
        ],
        destination: 'https://nextwebworks.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
