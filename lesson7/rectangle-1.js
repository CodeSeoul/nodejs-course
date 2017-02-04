var rectangle = {
	perimeter: function (length, width) {
    return 2 * (length + width);
	},
	area: function (length, width) {
    return length * width;
	}
};

module.exports = rectangle;