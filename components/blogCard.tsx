import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from "react-markdown";
import Date from './date'
import styles from './blogCard.module.sass'
import utilStyles from '../styles/utils.module.sass'

export interface BlogCardProps {
  id: string
  title: string
  date: string
  coverImage: string
  excerpt: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  date,
  coverImage,
  excerpt
}) => {
  return (
    <div className={`${utilStyles.card} ${utilStyles.postCard}`} key={id}>
      <div className={styles.blogContainer}>
        <small className={utilStyles.lightText}>
          Blog
        </small>
        <Link href={`/posts/${id}`}>
          <a>
            <h2 className={utilStyles.postTitle}>{title}</h2>
          </a>
        </Link>
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
        <ReactMarkdown>{excerpt}</ReactMarkdown>
        <Link href={`/posts/${id}`}>
          <a>
            <small>Read more</small>
          </a>
        </Link>
      </div>
      <div className={styles.blogImageContainer}>
        <Image
            priority
            src={coverImage}
            className={utilStyles.imageFrame}
            height={144}
            width={144}
            layout="responsive"
            alt={title}
          />
      </div>
    </div>
)}

export default BlogCard;