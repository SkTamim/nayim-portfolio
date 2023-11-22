// MENU TOGGLE
const menuBtn = document.querySelector(".custom_togle_icon");
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");
});

// STICKY MENU
window.addEventListener("scroll", () => {
	const navbar = document.querySelector("#navbar-example2");
	navbar.classList.toggle("sticky", window.scrollY > 0);
});

// BACK TO TOP BUTTON FUNCTIONALITY AND PROGRESS
const topBtn = document.querySelector(".page_progress");
window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		topBtn.classList.add("show");
	} else {
		topBtn.classList.remove("show");
	}

	//PROGRESS BAR
	const { scrollTop, scrollHeight } = document.documentElement;
	const scrollPrescent =
		(scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
	topBtn.style.setProperty("--progress-percent", scrollPrescent);
});

topBtn.addEventListener("click", () => {
	document.documentElement.scrollTop = 0;
});
