/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com'],
  },
  eslint: {
    // Empêche l'échec du build en cas d'erreurs ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
