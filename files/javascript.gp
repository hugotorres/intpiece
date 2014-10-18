function geoplugin_request() { return '181.130.141.198';} 
function geoplugin_status() { return '200';} 
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\\\'http://www.maxmind.com\\\'>http://www.maxmind.com</a>.';} 
function geoplugin_city() { return '';} 
function geoplugin_region() { return 'Antioquia';} 
function geoplugin_regionCode() { return '02';} 
function geoplugin_regionName() { return 'Antioquia';} 
function geoplugin_areaCode() { return '0';} 
function geoplugin_dmaCode() { return '0';} 
function geoplugin_countryCode() { return 'CO';} 
function geoplugin_countryName() { return 'Colombia';} 
function geoplugin_continentCode() { return 'SA';} 
function geoplugin_latitude() { return '6.2518';} 
function geoplugin_longitude() { return '-75.563599';} 
function geoplugin_currencyCode() { return 'COP';} 
function geoplugin_currencySymbol() { return '&#36;';} 
function geoplugin_currencySymbol_UTF8() { return '$';} 
function geoplugin_currencyConverter(amt, symbol) { 
	if (!amt) { return false; } 
	var converted = amt * 1927.5; 
	if (converted <0) { return false; } 
	if (symbol === false) { return Math.round(converted * 100)/100; } 
	else { return '&#36;'+(Math.round(converted * 100)/100);} 
	return false; 
} 
