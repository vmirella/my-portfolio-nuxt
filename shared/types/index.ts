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
  company: string
  position: string
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  startDate: string
  endDate?: string
  location: string
  companyUrl?: string
  companyLogo?: string
  isCurrentJob: boolean
  highlights?: string[]
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  icon?: string
  color?: string
  description?: string
  yearsOfExperience?: number
  projects?: string[] // Project IDs
  priority: number
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: number
  description?: string
  achievements?: string[]
  location: string
}

export interface Author {
  name: string
  bio: string
  image?: string
  socialLinks: SocialLinks
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

export interface NavigationItem {
  name: string
  href: string
  id: string
  icon?: string
  external?: boolean
  children?: NavigationItem[]
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  colorScheme: 'primary' | 'secondary' | 'accent'
  animations: boolean
  reducedMotion: boolean
}

export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  DEVOPS = 'devops',
  DESIGN = 'design',
  FRAMEWORKS = 'frameworks',
  TESTING = 'testing',
  OTHER = 'other',
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Animation types
export interface AnimationConfig {
  duration?: number
  delay?: number
  easing?: string
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both'
  iterationCount?: number | 'infinite'
}

// Component prop types

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
