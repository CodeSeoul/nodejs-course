var canadianDollar = 0.91

function roundTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

var canadianToUs = function(canadian) {
	return roundTwoDecimals(canadian * canadianDollar);
};

var usToCanadian = function(us) {
	return roundTwoDecimals(us / canadianDollar);
};

exports.canadianToUs = canadianToUs;
exports.usToCanadian = usToCanadian;
