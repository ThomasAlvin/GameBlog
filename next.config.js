/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:id",
        destination: "/", // Matched parameters can be used in the destination
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
