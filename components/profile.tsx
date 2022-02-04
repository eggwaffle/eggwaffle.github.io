import Image from 'next/image'
import utilStyles from '../styles/utils.module.sass'
import styles from './profile.module.sass'

const name = 'Egg Waffle'
export default function profile() {
  return (
    <div className={utilStyles.card}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePicContainer}>
          <Image
            priority
            src="/images/profile.svg"
            className={styles.profilePic}
            height={144}
            width={144}
            alt={name}
          />
        </div>
        <div className={styles.profileInfoContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.nameContainer}>
              <h2>{name}</h2>
              <small>Front-end developer</small>
            </div>
            <div>
              <div className={styles.contactItem}>
                <a href="https://github.com/eggwaffle">
                  <Image
                    priority
                    src="/images/github.svg"
                    height={32}
                    width={32}
                    alt="GitHub"
                  />
                  <p>eggwaffle</p>
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href="https://devchallenges.io/portfolio/eggwaffle">
                  <Image
                    priority
                    src="/images/devchallenges.png"
                    height={32}
                    width={32}
                    alt="devChallenges"
                  />
                  <p>eggwaffle</p>
                </a>
              </div>
            </div>
          </div>
          <p>
            Self-motivated developer, who is willing to learn and create outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  )
}
