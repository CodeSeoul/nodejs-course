/*
Complete the the function named "sloveRectangle" so it can print as follows.

$ rectangle(2, 4, sloveRectangle);
- The area: 8 - The perimeter: 12

$ rectangle(3, 5, sloveRectangle);
- The area: 15 - The perimeter: 16

$ rectangle(-3, -5, sloveRectangle);
- Error : Rectangle dimensions should be greater than zero
*/

function rectangle(length, width, callback) {
  try {
    if (length < 0 || width < 0) {
        throw new Error("Rectangle dimensions should be greater than zero");
    }
    callback(null, {
      perimeter: function () {
        return 2 * (length + width);
      },
      area: function () {
        return length * width;
      }
    });
  } catch (error) {
    callback(error, null);
  }
}

function sloveRectangle(err, result) {
  if (err) {
    console.log("- Error :", err.message);
  } else {
    console.log("- The area:", result.area(), "- The perimeter:", result.perimeter());
  }
}

// Test
rectangle(2, 4, sloveRectangle);
rectangle(3, 5, sloveRectangle);
rectangle(-3, 5, sloveRectangle);
