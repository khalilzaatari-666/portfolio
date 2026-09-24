/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // L'indicateur Next.js (bulle « N ») se place en bas à gauche en dev et
  // gênerait : on le garde à gauche, le bouton WhatsApp étant à droite.
  devIndicators: { position: "bottom-left" },
  // Le français est servi sur « / », l'anglais sur « /en ».
  async rewrites() {
    return [{ source: "/", destination: "/fr" }];
  },
  async redirects() {
    return [{ source: "/fr", destination: "/", permanent: true }];
  },
};

export default nextConfig;
