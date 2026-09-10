/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/illustration",
        destination: "/",
        permanent: true
      },
      {
        source: "/illustration/o-mne",
        destination: "/o-mne",
        permanent: true
      },
      {
        source: "/illustration/kontakt",
        destination: "/kontakt",
        permanent: true
      },
      {
        source: "/illustration/:id",
        destination: "/:id",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
