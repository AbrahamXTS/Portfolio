import Styles from "../styles/modules/FormContact.module.css";

export default function FormContact() {
	return (
		<div className={`${Styles.contact}`}>
			<form name="contact" className={`${Styles.form}`} data-netlify="true">
				<label htmlFor="name">Name: </label>
				<input name='name' id="name" required />
				<label htmlFor="email">Email: </label>
				<input name='email' id="email" required />
				<label htmlFor="message">Message: </label>
				<textarea name='message' id="message" rows={4} required />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
