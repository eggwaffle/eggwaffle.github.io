import Image from 'next/image'
import utilStyles from '../styles/utils.module.sass'
import styles from './hobbies.module.sass'
import Hobby from './hobby'

export default function Hobbies() {
  return (
    <div className={`${utilStyles.card}`}>
      <h3>Hobbies</h3>
      <Hobby
        hobby="Gaming"
        description="My favourite genres are RPG, simulation and strategy"
        src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf"
        alt="A gamepad"
      />
      <Hobby
        hobby="Swimming"
        description="I can swim 50m non-stop"
        src="https://images.unsplash.com/photo-1591285713698-598d587de63e"
        alt="A swimming pool"
      />
      <Hobby
        hobby="Reading"
        description="I read pretty fast"
        src="https://images.unsplash.com/photo-1491309055486-24ae511c15c7"
        alt="Reading a book"
      />
    </div>
  )
}
