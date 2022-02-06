import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import styles from './projectCard.module.sass'
import utilStyles from '../styles/utils.module.sass'

export interface ProjectProps {
  id: string
  title: string
  tags: string[]
  coverImage: string
  excerpt: string
  demo: string
  code: string
  feedback: string
  content: string
}

const ProjectCard = ({
  id,
  title,
  tags,
  coverImage,
  excerpt,
  demo,
  code,
  feedback
}: ProjectProps
) => {
  return (
    <div className={`${utilStyles.card} ${utilStyles.postCard}`} key={id}>
      <div className={styles.ProjectImageContainer}>
        <Image
            priority
            src={coverImage}
            className={styles.projectPic}
            height={800}
            width={800}
            alt={title}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM0rgcAAOsAtGe4os0AAAAASUVORK5CYII="
            placeholder="blur"
          />
      </div>
      <div className={styles.ProjectContainer}>
        <div>
          {tags.map(tag => (
            <small key={tag} className={utilStyles.lightText}>#{tag}</small>
          ))}
        </div>
        <Link href={`/projects/${id}`}>
          <a>
            <h2 className={utilStyles.postTitle}>{title}</h2>
          </a>
        </Link>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{excerpt}</ReactMarkdown>
        <Link href={`/projects/${id}`}>
          <a>
            <small>Read more</small>
          </a>
        </Link>
        <div className={styles.projectLinkDrawer}>
          <a href={demo}>
            Demo
          </a>
          <a href={code}>
            Code
          </a>
          <a href={feedback}>
            Feedback
          </a>
        </div>
      </div>
    </div>
)}

export default ProjectCard;