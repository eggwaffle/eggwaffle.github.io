import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from "react-markdown";
import styles from './blogCard.module.sass'
import utilStyles from '../styles/utils.module.sass'

export interface ProjectCardProps {
  id: string
  title: string
  tags: string[]
  coverImage: string
  excerpt: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  tags,
  coverImage,
  excerpt
}) => {
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
        <small className={utilStyles.lightText}>
          {tags.map(tag => (
            <small key={tag} className={utilStyles.lightText}>{tag}</small>
          ))}
        </small>
        <Link href={`/projects/${id}`}>
          <a>
            <h2 className={utilStyles.postTitle}>{title}</h2>
          </a>
        </Link>
        <ReactMarkdown>{excerpt}</ReactMarkdown>
        <Link href={`/projects/${id}`}>
          <a>
            <small>Read more</small>
          </a>
        </Link>
      </div>
    </div>
)}

export default ProjectCard;