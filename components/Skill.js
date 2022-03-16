import Image from 'next/image'
import Styles from "../styles/modules/Skill.module.css"

export default function Skill({name}) {
  return (
    <div className={Styles.skill}>
        <h4>{name}</h4>
    </div>
  )
}
