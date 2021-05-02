export const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-list");
	const navLink = document.querySelectorAll(".nav-links");
	const contentsList = document.querySelector("li a");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		// setTimeout(function () {
		// 	nav2.classList.toggle("nav-active");
		// }, 150);

		// Animate links
		navLink.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				setTimeout(function () {
					link.style.animation = `navLinkFade .7s ease forwards ${
						index / 15 + 0.5
					}s`;
				}, 300);
			}
		});

		setTimeout(function () {
			link.style.animation = `navLinkFade .7s ease forwards ${index / 15 + 0.5}s`;
		}, 300);

		// Burger animation
		burger.classList.toggle("toggler");
	});
};
