function sendMail(contactForm) {
	emailjs
		.send("gmail", "cape_towns_best_bits", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			message_request: contactForm.message.value
		})
		.then(
			function(responce) {
				console.log("SUCCESS", responce);
				if (responce.status == 200) {
					document.getElementById(
						"con-Heading"
					).innerHTML = `<h3 class="banger" id="con-Heading">
					Thank You Will be in Touch.
				</h3>`;
					location.href = "index.html";
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}
