document.addEventListener("DOMContentLoaded", () => {
	const item = document.querySelector(".header__description");
	const frases = ["JavaScript Lover", "Coffe Drinker", "Software Developer"];

	let i = 0;

	function wordChange() {
		item.textContent = frases[i];
		i < frases.length - 1 ? i++ : (i = 0);
	}

	setInterval(wordChange, 2000);
});
