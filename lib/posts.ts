import path from 'path'
import { getData, getAllIds, getDataById } from './data'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const allPostsData = getData(postsDirectory)
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
  return getAllIds(postsDirectory)
}

export function getPostData(id: string) {
  return getDataById(id, postsDirectory)
}