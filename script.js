//Zadanie 1//

const a = `Hello`;
const b = `World`;

console.log(`${a} ${b}`);

//Zadanie 2//
   
const multiply = (a=1, b=a) => console.log(`${a}` * `${b}`);

multiply();     
multiply(6);   
multiply(2, 4);

//Zadanie 3//

const average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average([1,2,3,4,5]));
console.log(average([1, 3, 8]));

//Zadanie 4//

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const averageGrades = ((...grade) => grade.reduce((a,b) => a+b))(...grades)/grades.length;
console.log(averageGrades);

//Zadanie 5//

const data = [1, 4, 'Iwona', false, 'Nowak'];

const [, , third, ,fifth] = data;

console.log(third, fifth);