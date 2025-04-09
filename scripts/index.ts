import { writeFileSync } from 'fs'
import {
  NOTION_API_URL,
  NOTION_FAVICON_URL
} from '@/constants'
import dotenv from 'dotenv'
dotenv.config()

export type AchievementsData = {
  site: string
  favicon: string
  title?: string
  link?: string
  image?: string
  content?: string
  isoDate: string
  eventDate: string
}

const fetchNotionData = async (): Promise<{ notion: AchievementsData[] }> => {
  const res = await fetch(NOTION_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_API_TOKEN}`,
      'Notion-Version': '2022-06-28'
    }
  })
  const json = await res.json()
  const items = json.results.map((item: any) => {
    const link = `https://www.notion.so/${item.id.replace(/-/g, '')}`
    return {
      site: 'notion',
      favicon: NOTION_FAVICON_URL,
      title: item.properties.Name.title[0].plain_text ?? undefined,
      link: link ?? undefined,
      content: undefined,
      image: item.properties.Thumnail.files[0]?.file.url ?? undefined,
      isoDate: item.created_time ?? undefined,
      eventDate: item.properties.EventDate.date.start ?? undefined,
    }
  })
  return {
    notion: items
  }
}

;(async () => {
  try {
    const notionData = await fetchNotionData()
    const achievementsData = { ...notionData }
    writeFileSync('./data/blog.json', JSON.stringify(achievementsData))
  } catch (error) {
    console.error(error)
  }
})()