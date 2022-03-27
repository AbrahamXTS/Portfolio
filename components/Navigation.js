import Link from "next/link";
import Styles from "../styles/modules/Navigation.module.css";

export default function Navigation() {
	return (
		<div className={`${Styles.nav} container`}>
			<Link href="/">
				<a className={Styles.logo}>
					<span>ABRAHA</span>M ESPINOSA
				</a>
			</Link>
			<div className={Styles.menu}>
				<Link href="/">HOME</Link>
				<Link href="#about">ABOUT</Link>
				<Link href="#projects">PROJECTS</Link>
				<Link href="#contact">CONTACT</Link>
			</div>
		</div>
	);
}
