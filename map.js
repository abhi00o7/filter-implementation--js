var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(element => newArray.push(callback(element)));
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// freeCodeCamp.org's -> to create your own map function
