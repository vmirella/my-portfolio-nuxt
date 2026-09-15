export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  detailsPageSlug?: string
}

export interface Experience {
  id: string
  period: string
  company: string
  role: string
  description: string
  technologies: string[]
  location: string
  highlights?: string[]
}

export interface SocialLinks {
  github?: string
  linkedin?: string
  email?: string
  website?: string
}

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  locale?: string
  siteName?: string
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  colorScheme: 'primary' | 'secondary' | 'accent'
  animations: boolean
  reducedMotion: boolean
}

export interface BaseButtonProps {
  to?: string
  href?: string
  download?: boolean | string
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export interface SocialNetworksProps {
  name?: string
  url?: string
  color?: string
  icon?: string
}
