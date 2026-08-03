import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { siteConfig } from './src/config/site.ts'

const usingFallbackSiteUrl =
  !process.env.SITE_URL &&
  !process.env.PUBLIC_SITE_URL &&
  siteConfig.siteUrl === 'https://accessible-astro-starter.incluud.dev'

if (usingFallbackSiteUrl) {
  console.warn(
    '[accessible-astro-starter] Using the default demo URL for SEO metadata. Set SITE_URL or PUBLIC_SITE_URL before publishing so canonical URLs and the sitemap are correct.'
  )
}

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: siteConfig.siteUrl,
  integrations: [
    mdx(),
    icon(),
    compress(),
    sitemap({
      filter(page) {
        const pathname = new URL(page).pathname
        return !['/cookies/', '/privacy/', '/terms/'].includes(pathname)
      },
    }),
  ],
  redirects: {
    '/portfolio': '/work',
    '/portfolio/[project]': '/work/[project]',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
        '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        '@post-images': fileURLToPath(new URL('./public/posts', import.meta.url)),
        '@project-images': fileURLToPath(new URL('./public/projects', import.meta.url)),
      },
    },
  },
})
