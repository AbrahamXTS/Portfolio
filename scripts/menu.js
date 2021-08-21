document.addEventListener("DOMContentLoaded", () => {
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
