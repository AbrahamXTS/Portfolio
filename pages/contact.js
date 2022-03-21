import HeadTag from "../components/HeadTag";
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";
import Styles from "../styles/modules/Contact.module.css"

export default function Contact() {
	return (
		<>
			<HeadTag>
				<title>Contact ➝ Abraham Espinosa</title>
			</HeadTag>

			<Navigation />

			<section className={`container`}>
				<FormContact />
			</section>
		</>
	);
}
