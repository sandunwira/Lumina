var state = document.getElementById('state');

function callback(data) {
	state.innerHTML = '<h2 id="greetingLocation" class="greetingLocation flexContainer flexRow"><i class="fa-solid fa-location-dot"></i>&nbsp;' + data.state + ', ' + data.country_code + '</h2>';
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geolocation-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);