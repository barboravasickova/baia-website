/** @type {import('next').NextConfig} */

/** Legacy detail URLs only — must not use /illustration/:id (that breaks /illustration/*.webp assets). */
const illustrationDetailIds = [
  "illustration-doubravka-1",
  "evoluce-kvetu",
  "zivot-s-tuzkou-a-psem",
  "vyber-ze-skicaku"
];

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
      ...illustrationDetailIds.map((id) => ({
        source: `/illustration/${id}`,
        destination: `/${id}`,
        permanent: true
      }))
    ];
  }
};

module.exports = nextConfig;
