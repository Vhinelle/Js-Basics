/*while loop
let age = 22;
while(age < 40){
console.log(age);
age++;
}
*/
/* do while
let age = 40;
do {
    console.log(age)
age++;
} while (age<40)
*/
// arrays
// hold data of the same data type
// for loop
/*
let myFruit = [

    'apple',
    'banana',
    'cherry',
    'pineapple',
    'watermelon'
];

for (let i = 0; i < myFruit.length; i++)
{
    console.log(myFruit[i]);
    
   let evenNumber = [ 2,4,6,8,10,12,14,16]

   for(let i = 0; i < evenNumber.length; i++){
       console.log(evenNumber[i])
   }

// for in loop
let myFruit = [
     'apple',
    'banana',
    'cherry',
    'pineapple',
    'watermelon'
]
for (i of myFruit) {
    console.log(i)
}
    }
    */

     for(let i=1; i<=100; i++){
         if(i % 2 == 0){
            console.log(`${i} is an even Number`) }
            else {
            console.log(`${i} is an odd number`)

         }
     }