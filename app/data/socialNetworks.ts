import type { SocialNetworksProps } from '#shared/types/index'
import { SOCIAL_LINKS } from '~/utils/constants'

export const socialNetworks: SocialNetworksProps[] = [
  {
    name: 'GitHub',
    url: SOCIAL_LINKS.github,
    color: 'hover:text-gray-300',
    icon: 'mdi:github',
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.linkedin,
    color: 'hover:text-blue-500',
    icon: 'mdi:linkedin',
  },
  {
    name: 'Email',
    url: SOCIAL_LINKS.email,
    color: 'hover:text-red-500',
    icon: 'mdi:email',
  },
]
