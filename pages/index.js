import Link from "next/link";

import Skill from "../components/Skill";
import HeadTag from "../components/HeadTag";
import Project from "../components/Project";
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";

import Styles from "../styles/modules/Home.module.css";

import skills from "../data/skills";
import projects from "../data/projects";

export default function Home() {
	return (
		<>
			<HeadTag>
				<title>Abraham Espinosa</title>
			</HeadTag>

			<Navigation />

			<main id="about" className={`${Styles.card} container`}>
				<h1>👋 Hi, I&apos;m Abraham.</h1>
				<div className={Styles.presentation}>
					<p>
						I&apos;m a software developer from Campeche, México. I&apos;m
						passionate about creating tech solutions that help people to empower
						their projects.
					</p>
					<p>
						I&apos;m on{" "}
						<Link href="https://github.com/abrahamxts">
							<a target="_blank">Github</a>
						</Link>
						,
						<Link href="https://www.instagram.com/abraham_em_/">
							<a target="_blank"> Instagram </a>
						</Link>
						and{" "}
						<Link href="https://www.linkedin.com/in/abrahamespinosam/">
							<a target="_blank">Linkedin</a>
						</Link>
						.
					</p>
				</div>
			</main>

			<section className={`${Styles.contact} container`}>
				<h2>My skills</h2>
				<div className={`${Styles.social}`}>
					{skills.map((skill) => (
						<Skill name={skill.name} image={skill.image} key={skill.id} />
					))}
				</div>
			</section>

			<section id="projects" className={`container`}>
				<h2>My projects</h2>
				<p>Client projects and some of my spare time tinkering.</p>
				<div className={`${Styles.projects}`}>
					{projects.map((project) => (
						<Project
							key={project.id}
							name={project.name}
							image={project.image}
							website={project.website}
							repository={project.repository}
							technologies={project.technologies}
						/>
					))}
				</div>
			</section>

			<section id="contact" className={`container`}>
				<h2>Get in touch</h2>
				<FormContact />
			</section>
		</>
	);
}
