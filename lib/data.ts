import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getData(directory: string) {
  // Get file names under /directory
  const fileNames = fs.readdirSync(directory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const option:{} = { excerpt: firstTwoLines }
    const matterResult= matter(fileContents, option)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; order:number; title: string }),
      excerpt: matterResult.excerpt,
    }
  })
  return allPostsData
}
// returns the first 4 lines of the contents
function firstTwoLines(file: {
  id: string
  content: string
  excerpt: string
}
  ) {
  file.excerpt = `${file.content.split('\n').slice(0, 2).join(' ')} ...`
}
export function getAllIds(directory: string) {
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
export async function getDataById(id:string, directory:string) {
  const fullPath = path.join(directory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id and contentHtml
  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  }
}