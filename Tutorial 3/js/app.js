var age = 20;

var stringAndNumber = "35 \"Ohrid\""; // "35"
var secondAge = "35 ";

// convert string to num
secondAge = Number(secondAge);

// convert num to str
age = age.toString();

// The Array

var theArray = [1, '2', 3, 'Four', {id: 1}, [100, 1001]];

console.log(theArray);

console.log(1 === '1');

document.write(age + secondAge);
document.write('<br>');
document.write(theArray);
document.write('<br>');

document.write(theArray[3]);
document.write('<br>');

var secondArray = new Array();

// the Object type
var personData = {
    name: 'John',
    lName: 'Rambo'
};

document.write(personData);
document.write('<br>');
document.write(personData.name);

var numbersData = [1, 2, 'Three', 4];

for(var i=0; i<numbersData.length; i++){
    document.write(numbersData[i]);
    document.write('<br>');
}