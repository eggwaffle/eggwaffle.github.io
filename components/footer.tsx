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
      </b> - devChallenges.io
      </div>
    </footer>
  )
}
