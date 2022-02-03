import styles from './footer.module.sass'

export default function footer() {
  return (
    <footer className={styles.footer}>
      <div>
      created by <b>
        <a
          href="https://github.com/eggwaffle"
          target="_blank"
          rel="noopener noreferrer"
        >
          eggwaffle
        </a>
      </b> -{' '}
      <a
          href="https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          devChallenges.io
        </a>
      </div>
    </footer>
  )
}
