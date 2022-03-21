import Link from "next/link"
import HeadTag from "../components/HeadTag";
import Navigation from "../components/Navigation";
import Styles from "../styles/modules/About.module.css"

export default function About() {
	return (
		<>
			<HeadTag>
				<title>About ➝ Abraham Espinosa</title>
			</HeadTag>

			<Navigation />

			<main className={`${Styles.card} container`}>
				<h1>👋 Hi, I&apos;m Abraham.</h1>
				<div className={Styles.presentation}>
					<p>
						I&apos;m a software developer from Campeche, México. I&apos;m
						passionate about creating tech solutions that help people to empower
						their projects.
					</p>
					<p>
						I&apos;m on <Link href="https://github.com/abrahamxts"><a target="_blank">Github</a></Link>,
						<Link href="https://www.instagram.com/abraham_em_/"><a target="_blank"> Instagram </a></Link>
						and <Link href="https://www.linkedin.com/in/abrahamespinosam/"><a target="_blank">Linkedin</a></Link>.
					</p>
				</div>
			</main>
		</>
	);
}
