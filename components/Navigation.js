import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {

	const [isVisible, setIsVisible] = useState(false);

	const showOptions = () => !isVisible ? setIsVisible(true) : setIsVisible(false);

	return (
		<>
			<aside className={`flex ${styles.menu}`} style={isVisible ? {width: "100%"} : {width: "0rem"}}>
                <div className={`flex ${styles.close}`} style={isVisible ? {display: "flex"} : {display: "none"}}>
                    <button onClick={showOptions} className={styles.button}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#000000"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
				<div className={`flex ${styles.options}`} style={isVisible ? {display: "flex"} : {display: "none"}}>
					<Link href="/" className="">Home</Link>
					<Link href="/about" className="">About</Link>
					<Link href="/projects" className="">Projects</Link>
					<Link href="/contact" className="">Contact</Link>
				</div>
				<span>&nbsp;</span>
			</aside>

			<nav className={`flex container ${styles.navigation}`}>
				<Link href="/">
					<a><Image src="/img/logo.svg" width={40} height={40} alt="Logo" /></a>
				</Link>
				<button onClick={showOptions} className={styles.button}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#000000"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<line x1="4" y1="6" x2="20" y2="6" />
						<line x1="4" y1="12" x2="20" y2="12" />
						<line x1="4" y1="18" x2="20" y2="18" />
					</svg>
				</button>
                <div className={styles.links}>
					<Link href="/" className="">Home</Link>
					<Link href="/about" className="">About</Link>
					<Link href="/projects" className="">Projects</Link>
					<Link href="/contact" className="">Contact</Link>
				</div>
			</nav>
		</>
	);
}
