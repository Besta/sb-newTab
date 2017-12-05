var setHour = function(first) {
	var d = new Date(),
			h = d.getHours(),
			m = d.getMinutes(),
			s = d.getSeconds();

	h = doubleDigitCheck(h);
	m = doubleDigitCheck(m);
	s = doubleDigitCheck(s);

	$('.js-hours').html(h);
	$('.js-minutes').html(m);
	$('.js-seconds').html(s);

	if(first) {
		$('.js-update-hours').html(h);
		$('.js-update-minutes').html(m);
		$('.js-update-seconds').html(s);
	}
	d = undefined;
	h = undefined;
	m = undefined;
	s = undefined;
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

var btcToEur = function() {
	var opts = {
		url: "https://api.coinbase.com/v2/exchange-rates?currency=BTC",
		cache: false,
		success: function(data) {
			$(".js-btc").html(data.data.rates.EUR + "€");
		}
	};

	$.ajax(opts);
}

var ethToEur = function() {
	var opts = {
		url: "https://api.coinbase.com/v2/exchange-rates?currency=ETH",
		cache: false,
		success: function(data) {
			$(".js-eth").html(data.data.rates.EUR + "€");
		}
	};

	$.ajax(opts);
	opts = undefined;
}

var getWeather = function() {
	var opts = {
		url: "https://api.openweathermap.org/data/2.5/weather?id=3173435&APPID=1fdfb99e468758cadd6451adf71ca626&units=metric",
		success: function(data) {
			$(".js-weather").html(data.main.temp+"°C");
		}
	};

	$.ajax(opts);
	opts = undefined;
}

$(document).ready(function(){
	setHour(true);
	setInterval(function() {
		setHour(false);
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

	date = undefined;
	day = undefined;
	month = undefined;

	chrome.topSites.get(stampSites);

	btcToEur();
	ethToEur();

	setInterval(function () {
		btcToEur();
		ethToEur();

		var d = new Date(),
				h = d.getHours(),
				m = d.getMinutes(),
				s = d.getSeconds();

		h = doubleDigitCheck(h);
		m = doubleDigitCheck(m);
		s = doubleDigitCheck(s);

		$('.js-update-hours').html(h);
		$('.js-update-minutes').html(m);
		$('.js-update-seconds').html(s);

		d = undefined;
		h = undefined;
		m = undefined;
		s = undefined;
	}, 60000);

	getWeather();
});
