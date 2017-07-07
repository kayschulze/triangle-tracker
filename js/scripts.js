var largestSide = function(side1, side2, side3) {
  if (side1 > side2 && side1 > side3) {
    return side1;
  }
  else if (side2 > side3) {
    return side2;
  }
  else {
    return side3;
  }
};

var twoSmallerSides = function(largestSide, side1, side2, side3) {
  if (largestSide === side1) {
    return side2 + side3;
  }
  else if (largestSide === side2) {
    return side1 + side3;
  }
  else {
    return side1 + side2;
  }
};

$(function() {
  $("#triangle-tracker").submit(function(event) {
    event.preventDefault();
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());

    var oneSide = largestSide(side1, side2, side3);
    var twoSides = twoSmallerSides(oneSide, side1, side2, side3);

    console.log(oneSide);
    console.log(twoSides);

    if (oneSide < twoSides) {
      if(side1 === side2 && side2 === side3) {
        $(".equilateral").show();
      }
      else if (side1 === side2 || side2 === side3 || side1 === side3) {
        $(".isosceles").show();
      }
      else {
        $(".scalene").show();
      }
    }
    else {
      $(".not-triangle").show();
    }
  });
});
