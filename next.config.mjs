/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // L'indicateur Next.js (bulle « N ») se place en bas à gauche en dev et
  // gênerait : on le garde à gauche, le bouton WhatsApp étant à droite.
  devIndicators: { position: "bottom-left" },
};

export default nextConfig;
