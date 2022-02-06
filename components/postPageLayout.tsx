import type { ReactElement } from 'react'
import Link from "next/link";
import Image from 'next/image'
import { getLayout as getSiteLayout } from "./siteLayout";
import utilStyles from '../styles/utils.module.sass'
import styles from "./postPageLayout.module.sass"

const name = 'Egg Waffle'
const PostPageLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <header className={styles.header}>
        <Link href="https://eggwaffle.github.io">
          <a>
            <Image
              priority
              src="https://eggwaffle.github.io/images/profile.svg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>

  )
}

export const getLayout = (page: ReactElement) => (
  getSiteLayout(<PostPageLayout>{page}</PostPageLayout>)
)

export default PostPageLayout