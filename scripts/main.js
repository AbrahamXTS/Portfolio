document.addEventListener("DOMContentLoaded", () => {
	const item = document.querySelector(".header__description");
	const frases = ["Software Developer", "Java Lover", "Coffe Drinker"];

	let i = 0;

	function wordChange() {
		item.textContent = frases[i];
		i < frases.length - 1 ? i++ : (i = 0);
	}

	setInterval(wordChange, 2000);

	const abrirMenu = document.querySelector(".icon-tabler-menu-2");
	const cerrarMenu = document.querySelector(".icon-tabler-x");
	const opciones = document.querySelector(".menu__options");
	const menu = document.querySelector(".menu ");

	abrirMenu.addEventListener("click", () => {
		window.matchMedia("(max-width: 767px)").matches
			? (menu.style.width = "100%")
			: (menu.style.width = "35rem");

		opciones.style.display = "flex";
	});

	cerrarMenu.addEventListener("click", () => {
		menu.style.width = "0rem";
		opciones.style.display = "none";
	});
});
