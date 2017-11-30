var myCount = function() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	h = doubleDigitCheck(h);
	m = doubleDigitCheck(m);
	s = doubleDigitCheck(s);

	$('.js-hours').html(h);
	$('.js-minutes').html(m);
	$('.js-seconds').html(s);
}

var doubleDigitCheck = function(num) {
	if (num < 10) {
			num = "0" + num;
	}
	return num;
}

var stampSites = function(sites) {
	for(var i = 0; i < 8; i++){
		var element = $(".js-sites__"+(i+1));

		element.attr("href", sites[i].url);
		element.find(".js-faveicon").attr("src", "https://s2.googleusercontent.com/s2/favicons?domain_url=" + sites[i].url);
		element.find(".js-title").html(sites[i].title);
	}
}


$(document).ready(function(){
	myCount();
	setInterval(function () {
		myCount();
	}, 1000);

	var date = new Date(),
			day = date.getDay(),
			month = date.getMonth();

	switch (day) {
		case 0:
			day = "Domenica";
			break;
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
	}

	switch (month) {
		case 0:
			month = "Gennaio";
			break;
		case 1:
			month = "Febbraio";
			break;
		case 2:
			month = "Marzo";
			break;
		case 3:
			month = "Aprile";
			break;
		case 4:
			month = "Maggio";
			break;
		case 5:
			month = "Giugno";
			break;
		case 6:
			month = "Luglio";
			break;
		case 7:
			month = "Agosto";
			break;
		case 8:
			month = "Settembre";
			break;
		case 9:
			month = "Ottobre";
			break;
		case 10:
			month = "Novembre";
			break;
		case 11:
			month = "Dicembre";
			break;
	}

	$('.js-date').html(day + " " + doubleDigitCheck(date.getDate()) + " " + month);

	chrome.topSites.get(stampSites);
});
