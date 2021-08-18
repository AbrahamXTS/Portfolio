document.addEventListener("DOMContentLoaded", () => {
	const item = document.querySelector(".header__description");

	const frases = ["Software Developer", "Coffe Drinker", "Java Lover"];

	let i = 0;

	function wordChange() {
		item.textContent = frases[i];
		i < 2 ? i++ : (i = 0);
	}

	setInterval(wordChange, 1500);
});
