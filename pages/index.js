import Link from "next/link";
import Skill from "../components/Skill"
import HeadTag from "../components/HeadTag";
import Navigation from "../components/Navigation";
import Styles from "../styles/modules/Home.module.css";

export default function Home() {
	const skills = [
		{id: 1, name: "Javascript"},
		{id: 2, name: "React"}, 
		{id: 3, name: "Next.JS"},
		{id: 4, name: "Node.JS"},
		{id: 5, name: "Git"},
		{id: 6, name: "MySQL"},
	];

	return (
		<>
			<HeadTag>
				<title>Abraham Espinosa</title>
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

			<section className={`${Styles.contact} container`}>
				<h2>My skills</h2>
				<div className={`${Styles.social}`}>
					{skills.map(skill => <Skill name={skill.name} key={skill.id}/>)}
				</div>
			</section>
		</>
	);
}
