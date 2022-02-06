import Image from 'next/image'
import utilStyles from '../styles/utils.module.sass'
import styles from './hobby.module.sass'

export interface hobbyProps {
  hobby: string
  description: string
  src: string
  alt: string
}

const Hobby = ({
  hobby,
  description,
  src,
  alt,
}: hobbyProps
) => {
  return (
    <div className={styles.hobby} key={hobby}>
      <div className={styles.hobbyImageContainer}>
        <Image
          priority
          src={src}
          className={styles.hobbyPic}
          height={800}
          width={800}
          alt={alt}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM0rgcAAOsAtGe4os0AAAAASUVORK5CYII="
          placeholder="blur"
        />
      </div>
      <div className={styles.hobbyContainer}>
        <h4>{hobby}</h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Hobby
