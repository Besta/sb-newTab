function myCount() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	h = timeCheck(h);
	m = timeCheck(m);
	s = timeCheck(s);

	document.getElementById('hours').innerHTML = h;
	document.getElementById('minutes').innerHTML = m;
	document.getElementById('seconds').innerHTML = s;
}

function timeCheck(i) {
	if (i < 10) {
			i = "0" + i;
	}
	return i;
}

$(document).ready(function(){
	myCount();
	setInterval(function () {
		myCount();
	}, 1000);

	var date = new Date();
	var day = date.getDay();

	switch (day) {
		case 1:
			day = "Lunedì";
			break;
		case 2:
			day = "Martedì";
			break;
		case 3:
			day = "Mercoledì";
			break;
		case 4:
			day = "Giovedì";
			break;
		case 5:
			day = "Venerdì";
			break;
		case 6:
			day = "Sabato";
			break;
		case 0:
			day = "Domenica";
			break;
	}

document.getElementById('date').innerHTML = day + " " + date.getDate() + "/" + date.getMonth()
});
