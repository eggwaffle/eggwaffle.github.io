import Image from 'next/image'
import utilStyles from '../styles/utils.module.sass'
import styles from './hobbies.module.sass'
import Hobby from './hobby'

export interface hobbyCardProps {
  hobby: string
  description: string
  src: string
  alt: string
}

export default function Hobbies ({
  hobbyDataset
}: {
  hobbyDataset: hobbyCardProps[]
}) {
  return (
    <div className={`${utilStyles.card}`}>
      <h3>Hobbies</h3>
      {hobbyDataset.map(({hobby, description, src, alt}) => (
        <Hobby
          key={hobby}
          hobby={hobby}
          description={description}
          src={src}
          alt={alt}
        />
      ))}
    </div>
  )
}
