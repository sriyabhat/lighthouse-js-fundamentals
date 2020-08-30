//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

const chooseStations = function(stations){

  var appropriateStations = [];
  var i = 0;

  for(var station of stations)
  {
    if(station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){
      appropriateStations[i] = station[0];
      i++;
    }
  }

  return (appropriateStations);

}

//Based on the direction in the moves array move one step up or down across the y axis or move left or right across the x axis

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);

const finalPosition = function(moves){

  let parade = [0,0];

  for(let move of moves){

    switch(move){
      case 'north': parade[1] += 1; break;
      case 'east' : parade[0] += 1; break;
      case 'west' : parade[0] -= 1; break;
      case 'south' : parade[1] += 1; break;
    }

  }

  return parade;
}

/*name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.

"Suzie is 32 years old."*/

const ageCalculator = function(name, yearOfBirth,currentYear){
  let age = currentYear - yearOfBirth;
  return(name + " is " + age + " years old.");
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));



// One container can contain 100 bottles. Determine how many Containers will be used .
let howManyHundreds = function(numberOfBottles){
  return (Math.floor(numberOfBottles / 100));
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);






// Area of a Rectangle, Triangle and a Circle.

let calculateRectangleArea = function(length, width){

  if(length > 0 && width > 0){
    return (length * width);
  }
  
}

let calculateTriangleArea = function(base, height){

  if(base > 0 && height > 0){
    return (base * height * 0.5);
  }

}

let calculateCircleArea = function(radius){
  
  const pi = Math.PI;
  if(radius > 0){
    return (pi * radius * radius);
  }

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(20)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined