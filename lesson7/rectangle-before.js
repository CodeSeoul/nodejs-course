var rectangle = {
	perimeter: function (length, width) {
    return 2 * (length + width);
	},
	area: function (length, width) {
    return length * width;
	}
};

function solveRectangle(length, width) {
  console.log("Solving for rectangle with length = " + length + " and width = " + width);
  
  if (length < 0 || width < 0) {
    console.log("Rectangle dimensions should be greater than zero");
  } else {
  	console.log("The area:", rectangle.area(length, width));
  	console.log("The perimeter:" + rectangle.perimeter(length, width));
  }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(-3,5);