const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/Contact',
        destination: '/posts/Contact', // Map /Contact to /posts/Contact
      },
    ];
  },
};

module.exports = nextConfig;
