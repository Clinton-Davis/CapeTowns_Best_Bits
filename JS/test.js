const theDiv = document.querySelector("#directionsPanel");
const options = {
	root: directionsPanel,
	threshold: 0,
	rootMargin: "200px"
};

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		console.log(entry);
	});
}, options);

observer.observe(theDiv);
