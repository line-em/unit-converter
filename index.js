let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
let title = document.getElementById("title");

function metric() {
	title.textContent = "Metric to Imperial";
	let number = document.getElementById("number").value;
	let metricMass = number / 2.2;
	let metricVolume = number * 3.785;
	let metricLength = number * 1.609;
	mass.textContent = `${number} pounds is ${metricMass.toFixed(3)} kgs.`;
	volume.textContent = `${number} gallons is ${metricVolume.toFixed(3)} liters.`;
	length.textContent = `${number} miles is ${metricLength.toFixed(3)} km.`;

	//mass.textContent = number + ' pounds is ' + metricMass.toFixed(3) + ' kg.';
	//volume.textContent = number + ' gallons is ' + metricVolume.toFixed(3) + ' litres.';
	//length.textContent = number + ' miles is ' + metricLength.toFixed(3) + ' km.';
}
function imperial() {
	title.textContent = "Imperial to Metric";
	let number = document.getElementById("number").value;
	let imperialMass = number * 2.2;
	let imperialVolume = number / 3.785;
	let imperialLength = number / 1.609;
	mass.textContent = `${number} kg is ${imperialMass.toFixed(3)} pounds.`;
	volume.textContent = `${number} liters is ${imperialVolume.toFixed(3)} gallons.`;
	length.textContent = `${number} km is ${imperialLength.toFixed(3)} miles.`;

	//mass.textContent = number + ' kg is ' + metricMass.toFixed(3) + ' pounds.';
	//volume.textContent = number + ' litres is ' + metricVolume.toFixed(3) + ' gallons.';
	//length.textContent = number + ' km is ' + metricLength.toFixed(3) + ' miles.';
}

//km = mile, mile = km
//litres = gallons, gallons = litres
//kg = pounds, pounds = kg
