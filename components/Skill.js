import Image from "next/image";
import Styles from "../styles/modules/Skill.module.css";

export default function Skill({ name, image }) {
	return (
		<div className={Styles.skill}>
     		<Image src={image} alt={image} title={image} width={30} height={30}/>
			<h4>{name}</h4>
		</div>
	);
}
