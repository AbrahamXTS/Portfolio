import Styles from "../styles/modules/FormContact.module.css";

export default function FormContact() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={`${Styles.contact}`}>
			<form className={`${Styles.form}`} onSubmit={handleSubmit} netlify>
				<label htmlFor="name">Name: </label>
				<input id="name" required />
				<label htmlFor="email">Email: </label>
				<input id="email" required />
				<label htmlFor="message">Message: </label>
				<textarea id="message" rows={4} required />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
