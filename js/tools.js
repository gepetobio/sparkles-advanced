function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColour() {
	var r = randomRange(0,255),
		g = randomRange(0,255),
		b = randomRange(0,255)
		a = randomRange(0.5,1);

	return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}