'use strict';

//Zadanie 1//

var a = 'Hello';
var b = 'World';

console.log(a + ' ' + b);

//Zadanie 2//

var multiply = function multiply() {
   var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
   var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
   return console.log(('' + a) * ('' + b));
};

multiply();
multiply(6);
multiply(2, 4);

//Zadanie 3//

var average = function average(array) {
   return array.reduce(function (a, b) {
      return a + b;
   }) / array.length;
};

console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 3, 8]));

//Zadanie 4//

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var averageGrades = function () {
   for (var _len = arguments.length, grade = Array(_len), _key = 0; _key < _len; _key++) {
      grade[_key] = arguments[_key];
   }

   return grade.reduce(function (a, b) {
      return a + b;
   });
}.apply(undefined, grades) / grades.length;
console.log(averageGrades);

//Zadanie 5//

var data = [1, 4, 'Iwona', false, 'Nowak'];

var third = data[2],
    fifth = data[4];


console.log(third, fifth);
