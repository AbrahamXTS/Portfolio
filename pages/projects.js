import Script from "next/script";
import HeadTag from "../components/HeadTag";
import Project from "../components/Project";
import Navigation from "../components/Navigation";
import Styles from "../styles/modules/Projects.module.css";

export default function Projects() {
	const projects = [
		{
			id: 1,
			name: "Olán & Rondanini",
			image: "/img/projects/1.jpg",
			website: "https://orabogados.mx/",
			github: "https://github.com/AbrahamXTS/OlanRondanini",
			technologies: "HTML, SCSS, JavaScript",
		},
		{
			id: 2,
			name: "Grupo Consultor Galindo",
			image: "/img/projects/2.png",
			website: "https://gcgalindo.mx",
			github: "https://github.com/AbrahamXTS/GrupoConsultorGalindo",
			technologies: "PHP, Bootstrap, JavaScript",
		},
		{
			id: 3,
			name: "Algo Bonito",
			image: "/img/projects/3.png",
			website: "https://algo-bonito.herokuapp.com",
			github: "https://github.com/AbrahamXTS/AlgoBonito",
			technologies: "PHP, CSS, JavaScript",
		},
		{
			id: 4,
			name: "Gestor de Veterinaria",
			image: "/img/projects/4.png",
			website: "https://abraham-espinosa-07.netlify.app",
			github: "https://github.com/AbrahamXTS/VeterinaRiact",
			technologies: "ReactJS, Tailwind, JavaScript",
		},
		{
			id: 5,
			name: "Gestor de Gastos",
			image: "/img/projects/5.png",
			website: "https://abraham-espinosa-08.netlify.app",
			github: "https://github.com/AbrahamXTS/GastosReact",
			technologies: "ReactJS, CSS, JavaScript",
		},
		{
			id: 6,
			name: "Pokedex",
			image: "/img/projects/6.png",
			website: "https://abraham-espinosa-02.netlify.app/",
			github: "https://github.com/AbrahamXTS/PaginationPokeAPI",
			technologies: "ReactJS, Bootstrap, TypeScript",
		},
	];

	return (
		<>
			<HeadTag>
				<title>Projects | Abraham Espinosa</title>
			</HeadTag>

			<Navigation />

			<main className={`container`}>
				<h1>Projects</h1>
				<p>Client projects and some of my spare time tinkering.</p>
				<section className={Styles.projects}>
					{projects.map((project) => (
						<Project
							name={project.name}
							image={project.image}
							website={project.website}
							repository={project.github}
							technologies={project.technologies}
							key={project.id}
						/>
					))}
				</section>
			</main>

			<Script
				src="https://kit.fontawesome.com/129c179ef3.js"
				crossorigin="anonymous"
			></Script>
		</>
	);
}
