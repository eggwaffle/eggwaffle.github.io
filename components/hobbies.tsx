import Image from 'next/image'
import utilStyles from '../styles/utils.module.sass'
import styles from './hobbies.module.sass'
import Hobby from './hobby'

export interface hobbyCardProps {
  hobby: string
  description: string
  src: string
  alt: string
}[]

const Hobbies: React.FC<hobbyCardProps> = ({
  hobbyData
}: {
  hobbyData: hobbyCardProps
}) => {
  return (
    <div className={`${utilStyles.card}`}>
      <h3>Hobbies</h3>
      {hobbyData.map(({hobby, description, src, alt}) => (
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

export default Hobbies