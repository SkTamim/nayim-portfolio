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

// EMAIL JS
(function () {
	emailjs.init("ELGmaz4Qq-fvRYc0x");
})();

// CONTACT FORM FUNCTIONALITY

const serviceId = "service_is3v5ef";
const templateId = "template_envs7bv";

const submitModal = new bootstrap.Modal("#submit");
const submitErrorModal = new bootstrap.Modal("#submitError");

function sendMail() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let massege = document.getElementById("massege").value;

	let params = {
		name: name,
		email: email,
		massege: massege,
	};

	emailjs.send(serviceId, templateId, params).then((res) => {
		name = "";
		email = "";
		massege = "";
		console.log(res);
	});
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("massege").value = "";

	submitModal.show();
}

document.getElementById("send_btn").addEventListener("click", (e) => {
	e.preventDefault();

	validate();
});

function validate() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let massege = document.getElementById("massege").value;
	let errorMassegeArea = document.getElementById("errorMassegeArea");

	const emailPatten = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let emailIsValid = emailPatten.test(email);
	let nameIsValid = name != "";
	let massegeIsValid = massege != "";

	if (!nameIsValid) {
		errorMassegeArea.innerHTML += `
		Please enter your name properly.<br>
		`;
		submitErrorModal.show();
	}
	if (!emailIsValid) {
		errorMassegeArea.innerHTML += `
		Please enter your email properly.<br>
		`;
		submitErrorModal.show();
	}
	if (!massegeIsValid) {
		errorMassegeArea.innerHTML += `
		Please enter your massege properly.<br>
		`;
		submitErrorModal.show();
	}

	const errModal = document.getElementById("submitError");
	errModal.addEventListener("hidden.bs.modal", () => {
		errorMassegeArea.innerHTML = "";
	});

	let formIsValid = nameIsValid && emailIsValid && massegeIsValid;

	if (formIsValid) {
		sendMail();
	}
}
