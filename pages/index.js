import HeadTag from "../components/HeadTag";
import Navigation from "../components/Navigation";
import SocialMenu from "../components/SocialMenu";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<HeadTag>
				<title>Abraham Espinosa</title>
			</HeadTag>

			<div className={`flex ${styles.main}`}>
				<Navigation />

				<header className={`container ${styles.header}`}>
					<h1>Abraham Espinosa</h1>
					<h3>Software Developer</h3>
					<p>
						I'm a software developer passionate about creating technological
						solutions that help people to empower their projects.{" "}
					</p>
					<SocialMenu />
				</header>

				<span>&nbsp;</span>
			</div>
		</>
	);
}
