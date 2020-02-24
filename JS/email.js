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
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}
