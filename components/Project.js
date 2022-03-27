import Styles from "../styles/modules/Project.module.css";

export default function Project({
	name,
	image,
	website,
	repository,
	technologies,
}) {
	return (
		<div className={Styles.project}>
			<h4>{name}</h4>
			<p>{technologies.join(", ")}</p>
            <div className={Styles.links}>
                <button>
                    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="15" y1="8" x2="15.01" y2="8" /> <rect x="4" y="4" width="16" height="16" rx="3" /> <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" /> <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" /> </svg>
                </button>
                <a target="_blank" rel="noopener noreferrer" className={Styles.web} href={repository}>
                    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
                </a>
                <a target="_blank" rel="noopener noreferrer" className={Styles.web} href={website}>
                    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" > {" "} <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "} <circle cx="12" cy="12" r="9" />{" "} <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "} <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "} <path d="M11.5 3a17 17 0 0 0 0 18" />{" "} <path d="M12.5 3a17 17 0 0 1 0 18" />{" "} </svg>
                </a>
            </div>
		</div>
	);
}
