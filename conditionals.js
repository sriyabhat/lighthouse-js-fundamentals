


// Conditional to demostrate the weather
const raining =false;
const cold =true;
const temperature = -50;

if(raining)
{
  console.log("Don't forget your Umbrella");
}

if(cold)
{
 if(temperature<0)
 {
  console.log("Don't forget to take your scarf");
 }
 else if (temperature<15)
 {
  console.log("short sleeves won't cut it!")
 }
 else
 {
  console.log("Short sleeves are fine.")
 }

 
}
else{
  console.log("Short sleeves are fine.")
}

console.log("Now you are ready to go out");

//condition to demonstrate logical && operator

const isCitizen =true;
const age =5;

if(isCitizen && age>=18)
{
  console.log("You are eligible to Vote");
}

//condition to demonstrate logical || operator
if(temperature<-40||temperature>40)
{
  console.log("Going outside isn't such a great Idea");
}

if(!raining)
{
  console.log("Leave your Umbrella at Home");
}