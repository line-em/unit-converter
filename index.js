let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');
let title = document.getElementById('title');

function metric() {
	title.textContent = 'Metric to Imperial';
	let number = document.getElementById('number').value;
	let metricMass = number / 2.2;
	let metricVolume = number * 3.785;
	let metricLength = number * 1.609;
	mass.textContent = number + ' pounds is ' + metricMass.toFixed(3) + ' kg.';
	volume.textContent = number + ' gallons is ' + metricVolume.toFixed(3) + ' litres.';
	//length.textContent = number + ' miles is ' + metricLength.toFixed(3) + ' kms.';
	length.textContent = `${number} miles is ${metricLength.toFixed(3)} kms.`;
}

function imperial() {
	title.textContent = 'Imperial to Metric';
	let number = document.getElementById('number').value;
	let metricMass = number * 2.2;
	let metricVolume = number / 3.785;
	let metricLength = number / 1.609;
	mass.textContent = number + ' kg is ' + metricMass.toFixed(3) + ' pounds.';
	volume.textContent = number + ' litres is ' + metricVolume.toFixed(3) + ' gallons.';
	length.textContent = number + ' kms is ' + metricLength.toFixed(3) + ' miles.';
}

//kmeter = mile, mile = kmeters
//liters = gallons, gallons = litters
//kg = pounds, pounds = kg
