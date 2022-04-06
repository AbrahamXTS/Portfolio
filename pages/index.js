import Link from "next/link";
import Skill from "../components/Skill";
import HeadTag from "../components/HeadTag";
import Project from "../components/Project";
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";
import Styles from "../styles/modules/Home.module.css";
import { useInView } from 'react-intersection-observer';
import Typing from "../components/Typing"
import projects from "../data/projects";
import skills from "../data/skills";

export default function Home() {

	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<>
			<HeadTag>
				<title>Abraham Espinosa</title>
			</HeadTag>

			<nav ref={ref}>
				<Navigation />
			</nav>

			<main id="about" className={`${Styles.card} container`}>
				<h1>👋 Hi, I&apos;m Abraham.</h1>
				<div className={Styles.presentation}>
					<p>
						I&apos;m a <a href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">Frontend Developer</a> from Campeche, México. I&apos;m
						passionate about creating tech solutions that help people to empower their projects. 
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
			
			{!inView &&
			<a href='#' className={Styles.top}>
				<svg width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="5" x2="12" y2="19" /> <line x1="16" y1="9" x2="12" y2="5" /> <line x1="8" y1="9" x2="12" y2="5" /></svg>
			</a>
			}
		</>
	);
}
