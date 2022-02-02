import path from 'path'
import { getData, getAllIds, getDataById } from './data'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getSortedProjectsData() {
  const allPostsData = getData(projectsDirectory)
  // Sort posts by order
  return allPostsData.sort(({ order: a }, { order: b }) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })
}

export function getAllProjectIds() {
  return getAllIds(projectsDirectory)
}

export function getProjectData(id) {
  return getDataById(id, projectsDirectory)
}