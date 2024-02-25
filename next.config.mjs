import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
