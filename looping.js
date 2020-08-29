

//using for loop
const price = [23.5,32,56.8,90.4,35,12.45];
let total =0;
for (let i=0;i<price.length;i++)
{
  total += price[i];
  
}

console.log("Total price :"+total);

//using for of loops
total = 0;
for(let p of price)
{
  total += p;
}
console.log("Total price (using for of loops):"+total);
