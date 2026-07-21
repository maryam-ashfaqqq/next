import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    turbopackFileSystemCacheForDev:true,
  },

images:{
  domains:['images.unsplash.com', 'i.imgur.com'],
  },
};

export default nextConfig;
