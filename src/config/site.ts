export type SiteLink = {
  href: string
  label: string
}

export type SiteConfig = {
  name: string
  title: string
  description: string
  siteUrl: string
  email: string
  locale: string
  authorName: string
  authorRole: string
  keywords: string[]
  ogImage: string
  navLinks: SiteLink[]
  extraPages: SiteLink[]
  legalLinks: SiteLink[]
  socialLinks: SiteLink[]
}

const defaultSiteUrl = 'https://accessible-astro-starter.incluud.dev'
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '')

export const siteConfig: SiteConfig = {
  name: 'Riley Skipper',
  title: 'Riley Skipper | UX-Focused Web Developer',
  description:
    'Web developer and UX designer who builds accessible digital products with clear structure and inclusive interfaces.',
  siteUrl: normalizedSiteUrl,
  email: 'ryskipperdev@gmail.com',
  locale: 'en-US',
  authorName: 'Riley Skipper',
  authorRole: 'Web Developer & UX Designer',
  keywords: [
    'UX web developer',
    'accessible product design',
    'WCAG portfolio',
    'inclusive web design',
    'frontend developer',
  ],
  ogImage: '/favicon.svg',
  navLinks: [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  extraPages: [
    { href: '/accessibility-statement', label: 'Accessibility' },
    { href: '/color-contrast-checker', label: 'Contrast Checker' },
    { href: '/accessible-components', label: 'Components' },
    { href: '/cookies', label: 'Cookies' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ],
  legalLinks: [
    { href: '/cookies', label: 'Cookies' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/accessibility-statement', label: 'Accessibility' },
  ],
  socialLinks: [
    { href: 'https://github.com/rileyskipper', label: 'GitHub' },
    { href: 'https://linkedin.com/in/ryskipper', label: 'LinkedIn' },
  ],
}
