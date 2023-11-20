/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:id",
        destination: "/:id", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
