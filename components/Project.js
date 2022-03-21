import Link from "next/link";
import Styles from "../styles/modules/Project.module.css";

export default function Project({
	name,
	image,
	website,
	repository,
	technologies,
}) {
	return (
			<article className={Styles.project} style={{backgroundImage: `linear-gradient(rgba(245,245,245,.9),rgba(245,245,245,.9)),url(${image})`}}>
				<div className={Styles.info}>
					<h3>{name}</h3>
					<p>{technologies}</p>
					<div className={Styles.links}>
						<Link href={website}>
							<a>
								<i className="fas fa-globe-americas" aria-hidden="true"></i>Website
							</a>
						</Link>
						<Link href={repository}>
							<a>
								<i className="fab fa-github" aria-hidden="true"></i>Repository
							</a>
						</Link>
					</div>
				</div>
			</article>
	);
}
