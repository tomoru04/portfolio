import dotenv from 'dotenv'
dotenv.config()

export const SECTION_LIST = {
  ABOUT: {
    title: 'About',
    sectionLabel: 'about',
    navLabel: 'ABOUT'
  },
  BIO: {
    title: 'Bio',
    sectionLabel: 'bio',
    navLabel: 'BIO'
  },
  SKILLS: {
    title: 'Skills',
    sectionLabel: 'skills',
    navLabel: 'SKILLS'
  },
  ACHIEVEMENTS: {
    title: 'Achievements',
    sectionLabel: 'achievements',
    navLabel: 'ACHIEVEMENTS'
  },
  LINKS: {
    title: 'Links',
    sectionLabel: 'links',
    navLabel: 'LINKS'
  }
}

export const SKILL_LIST = [
  {
    name: 'TypeScript',
    image: '/skills/typescript-icon.svg'
  },
  {
    name: 'JavaScript',
    image: '/skills/javascript.svg'
  },
  {
    name: 'C',
    image: '/skills/c.png'
  },
  {
    name: 'C++',
    image: '/skills/cplusplus.svg'
  },
  {
    name: 'CSharp',
    image: '/skills/csharp.png'
  },
  {
    name: 'Python',
    image: '/skills/python.png'
  },
  {
    name: 'Next.js',
    image: '/skills/nextjs-icon.svg'
  },
  {
    name: 'React',
    image: '/skills/react.svg'
  },
  {
    name: 'Lambda',
    image: '/skills/lambda.png'
  },
  {
    name: 'MySQL',
    image: '/skills/mysql.svg'
  },
  {
    name: 'Docker',
    image: '/skills/docker.png'
  },
  {
    name: 'Unity',
    image: '/skills/unity.png'
  },
]

export const LINK_LIST = [
  {
    name: 'GitHub',
    image: '/links/github-logo.svg',
    url: 'https://github.com/tomoru04?tab=repositories'
  },
  {
    name: 'AtCoder',
    image: '/links/atcoder-logo.png',
    url: 'https://atcoder.jp/users/tomoru04'
  },
  {
    name: 'YouTube',
    image: '/links/youtube-logo.png',
    url: 'https://www.youtube.com/@tomoyashoda3670'
  },
]

export const NOTION_FAVICON_URL = 'https://www.notion.so/images/favicon.ico'
export const NOTION_API_URL = `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`