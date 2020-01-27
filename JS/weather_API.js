const url =
	"https://api.openweathermap.org/data/2.5/weather?id=1085599&APPID=93fc6b46edd4b57ed1e18af04d5ead0c&units=metric";

const my_id = "&APPID=93fc6b46edd4b57ed1e18af04d5ead0c";
var unit = "&units=metric";
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		var obj = JSON.parse(this.responseText);
		console.log(obj);

		var city = obj.name;
		var temps = obj.main.temp_max + " / " + " " + obj.main.temp_min + " ˚C";
		var wind = obj.wind.speed + " " + obj.wind.deg;
		console.log(city, temps, wind);
		writeToDoc();
	}
	function writeToDoc() {
		document.getElementById("weather-api").innerHTML =
			temps + " Wind" + " " + wind;
	}
};
xhr.open("GET", url + my_id + unit);
xhr.send();
