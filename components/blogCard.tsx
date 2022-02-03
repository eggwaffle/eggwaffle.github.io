import Link from 'next/link'
import ReactMarkdown from "react-markdown";
import Date from './date'
import styles from './blogCard.module.sass'
import utilStyles from '../styles/utils.module.sass'
import { truncateText } from '../lib/helperFunctions'

export interface BlogCardProps {
  id: string;
  title: string;
  date: string;
  body: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  body,
  date,
}) => {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
)}

export default BlogCard;