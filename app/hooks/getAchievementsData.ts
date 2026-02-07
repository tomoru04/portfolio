import { readFile } from 'fs/promises'
import path from 'path'
import { AchievementsData } from '@/scripts'

export const getAchievementsData = async () => {
  const filePath = path.join(process.cwd(), "data", "blog.json");
  const files = await readFile(filePath, "utf-8");

  const achievementsData: Record<string, AchievementsData[]> = JSON.parse(files.toString())
  return { achievementsData }
}