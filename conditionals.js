const raining =true;
const cold =true;
const temperature = 18;

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

