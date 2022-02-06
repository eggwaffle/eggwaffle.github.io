import utilStyles from '../styles/utils.module.sass'
import styles from './hobbies.module.sass'
import Hobby, {hobbyProps} from './hobby'

export default function Hobbies ({
  hobbyDataset
}: {
  hobbyDataset: hobbyProps[]
}) {
  return (
    <div className={`${utilStyles.card}`}>
      <h3 className={utilStyles.cardHeading}>Hobbies</h3>
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
