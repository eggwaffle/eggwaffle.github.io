import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { truncateText } from '../lib/helperFunctions'


export function getData(directory) {
  // Get file names under /directory
  const fileNames = fs.readdirSync(directory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { excerpt: firstTwoLines })
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      excerpt: matterResult.excerpt,
    }
  })
  return allPostsData
}
// returns the first 4 lines of the contents
function firstTwoLines(file, options) {
  file.excerpt = `${file.content.split('\n').slice(0, 2).join(' ')} ...`
}
export function getAllIds(directory) {
  const fileNames = fs.readdirSync(directory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  //Each object must have the params key and contain an object with the id key
  //(because we’re using [id] in the file name).
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
//We added the async keyword to getPostData because we need to use await for remark.
//async/await allow you to fetch data asynchronously.
export async function getDataById(id, directory) {
  const fullPath = path.join(directory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}