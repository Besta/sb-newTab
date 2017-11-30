function myCount() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	h = timeCheck(h);
	m = timeCheck(m);
	s = timeCheck(s);

	$('.js-hours').html(h);
	$('.js-minutes').html(m);
	$('.js-seconds').html(s);
}

function timeCheck(i) {
	if (i < 10) {
			i = "0" + i;
	}
	return i;
}


function stampSites(sites) {
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

	document.getElementById('date').innerHTML = day + " " + date.getDate() + "/" + date.getMonth();

	chrome.topSites.get(stampSites);
});
