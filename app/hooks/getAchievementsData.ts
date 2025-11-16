import { readFile } from 'fs/promises'
import path from 'path'
import { AchievementsData } from '@/scripts'
export const getAchievementsData = async () => {
  const files = await readFile(path.join(__dirname, '../../../../data/blog.json'))
  const achievementsData: Record<string, AchievementsData[]> = JSON.parse(files.toString())
  return { achievementsData }
}