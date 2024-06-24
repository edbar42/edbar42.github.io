window.addEventListener("DOMContentLoaded", () => {
	VANTA.NET({
		el: "body",
		mouseControls: false,
		touchControls: false,
		gyroControls: false,
		minHeight: 200.00,
		minWidth: 200.00,
		scale: 1.00,
		scaleMobile: 1.00,
		color: 0x3e4c88,
		backgroundColor: 0x222222,
		maxDistance: 15.00,
	})

	const main = document.querySelector('main')
	main.style.opacity = 1
})

