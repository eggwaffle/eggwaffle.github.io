import Image from 'next/image'
import styles from './profile.module.sass'

const name = 'Egg Waffle'
export default function profile() {
  return (
    <div className={styles.profileContainer}>
      <Image
        priority
        src="/images/profile.png"
        className={styles.profilePic}
        height={144}
        width={144}
        alt={name}
      />
      <div>
        <div>
          <div>
            <h2 className={styles.heading2Xl}>{name}</h2>
          </div>
          <div>
            <div>
              <span className="material-icons">email</span>

            </div>
            <a href="https://devchallenges.io/portfolio/eggwaffle">
            <Image
              priority
              src="/images/devChallenges.png"
              height={32}
              width={32}
              alt="GitHub"
            />
            </a>
          </div>
        </div>
        <p>
          Self-motivated developer, who is willing to learn and create outstanding UI applications.
        </p>
      </div>
    </div>
  )
}
