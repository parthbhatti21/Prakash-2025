import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from "vite-plugin-compression2";
import ViteSitemap from "vite-plugin-sitemap"


// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        viteCompression({
            algorithm: "brotliCompress", // Can be 'gzip', 'brotliCompress', or both
            threshold: 1024, // Min file size to compress (in bytes)
            verbose: true, // Show compression details in console
          }),
          ViteSitemap({
            hostname:'www.prakarsh.org',
            routes:[
                '/',
                '/events',
                '/aboutus'
            ],
          }),
          
     ],

    assetsInclude: ['**/*.JPG', '**/*.HEIC']
})