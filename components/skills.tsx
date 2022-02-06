import utilStyles from '../styles/utils.module.sass'
import styles from './skills.module.sass'

export interface skillProps {
  skillsCategory: string
  skills: {
    skillName: string
    skillLevel: number
  }[]
}
const Skills= ({
  skillsCategory,
  skills
}:skillProps
) => {
  return (
    <div className={utilStyles.card} key={skillsCategory}>
      <h3 className={utilStyles.cardHeading}>{skillsCategory}</h3>
      {skills.map(({skillName, skillLevel}) => (
      <div className={styles.skill} key={skillName}>
        <small>{skillName}</small>
        <div className={styles.skillBar}>
          <div className={styles.skillLevel} style={{width: `${skillLevel*100}%`}}></div>
        </div>
      </div>
      ))}
    </div>
  )
}
export default Skills
