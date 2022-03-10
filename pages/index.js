import HeadTag from "../components/HeadTag";
import Navigation from "../components/Navigation";
import SocialMenu from "../components/SocialMenu";
import styles from "../styles/Home.module.css";
import Typing from "../components/Typing";

export default function Home() {

	const phrases = ["Javascript", "NodeJS", "ReactJS", "NextJS"];

	return (
		<>
			<HeadTag>
				<title>Abraham Espinosa</title>
			</HeadTag>

			<div className={`flex ${styles.main}`}>
				<Navigation />

				<header className={`container ${styles.header}`}>
					<h1>Abraham Espinosa</h1>
					<h3>I write <Typing phrases={phrases} classList={styles.typing}/></h3>
					<p>
						I am a software developer from Campeche, México. I am passionate about creating
						technological solutions that help people to empower their projects.
					</p>
					<SocialMenu />
				</header>

				<span>&nbsp;</span>
			</div>
		</>
	);
}
