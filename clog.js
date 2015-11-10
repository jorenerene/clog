// https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryValue (key) {
	var query = window.location.search.substring (1);
	var vars = query.split ("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars [i].split ("=");
		
		if (pair [0] == key) {
			return pair [1];
		}
	}

	return false;
}

var query = getQueryValue ("clog");

/**
@description Nasty JavaScript Debugging.
@param message message to output when criteria matches conditions
@param criteria calling function or matching name necessary in order to output message
*/

var clog = function (message, criteria) {
	/* if (query == "*" || arguments.callee.caller.name == query || query == criteria) { */
	if (query == "*" || query == criteria) {
		console.log (message);
	}
};