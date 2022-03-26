import Image from "next/image";
import Styles from "../styles/modules/Project.module.css";

export default function Project({
	name,
	image,
	website,
	technologies,
}) {
	return (
		<article className={Styles.project}>
			<Image className={Styles.image} alt={name} title={name} src={image} width={1893} height={927} />
			<div className={Styles.info}>
				<h2>{name}</h2>
				<ul>
					{technologies.map((technologie, index) => <li key={index}>{technologie}</li>)}
				</ul>
				<div className={Styles.buttons}>
					<a href={website} target="_blank">
						Website
					</a>
				</div>
			</div>
		</article>
	);
}
