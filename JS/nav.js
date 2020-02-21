//Code copied buy Dev Ed and make to fit
const navslide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav");
	const navLinks = document.querySelectorAll(".nav li");
	//toggle nav
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		//animate links
		navLinks.forEach((links, index) => {
			if (links.style.animation) {
				links.style.animation = ``;
			} else {
				links.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 +
					0.5}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle("toggle");
	});
};

navslide();
