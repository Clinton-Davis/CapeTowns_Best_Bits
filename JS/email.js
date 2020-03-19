/* Validation Function */
function validation() {
	var inpObj = document.getElementById("message");
  if (!inpObj.checkValidity()) {
  } else {
	document.getElementById("contact-Heading").innerHTML = 
		`<h3 class="banger" id="con-Heading">Thank You, We'll be in Touch.</h3>`;
		var subHeading = document.getElementById("subHeading");
		subHeading.classList.add("hide");
		var form = document.getElementById("form");
		form.classList.add("hide");
  } 
} 
/* Sending Emails Function */
function sendMail(contactForm) {
	emailjs
		.send("gmail", "cape_towns_best_bits", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			message_request: contactForm.message.value
		})
		.then(
			function(responce) {
				if (responce.status == 200) {
					location.href = "index.html";
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}
