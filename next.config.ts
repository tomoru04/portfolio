import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zenn.dev',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so'
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com'
      }
    ]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(createVanillaExtractPlugin()(nextConfig));
