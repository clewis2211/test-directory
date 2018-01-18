/* 1. Loop over the array with either a standard for loop 
or the array method forEach.

Turn the array into a list. 

So the output array should look like this:

['1. kayla', '2. abby', '3. carlton', '4. haley'];
*/
  

let friends = ['kayla', 'abby', 'carlton', 'haley'];

for(i = 0; i < friends.length;i++){
    console.log(friends);
}
 
/* 2. Loop through this array and use the modulus operator (%) and print out 
out whether the number in the array is odd or even

The output to the console should be:
odd
even
odd
etc.
*/

let nums = [14, 45, 60, 93, 44, 67];

nums.forEach(function(num){
    if(num % 2 === 0){
        console.log('even');
    } else {
        console.log('odd');
    }
});

/* 3. Create a functon that takes the object as a parameter and returns the same object
with all the values capitalized (if they are strings)

The output should be:
{
  name: 'Rihanna',
  occupation: 'Queen',
  age: 29
}

*/

// let person = {
//   name: 'rihanna',
//   occupation: 'queen',
//   age: 29
// };

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// for
/* 4. Use a for in loop to iterate through the object. It should check whether 
each value is over 100. If it is it should delete the key.

The output should be:

{
  hogwarts: 100,
  house: 45,
  stadium: 65
}

*/

// let occupants = {
//   hogwarts: 100,
//   apartment: 101,
//   house: 45,
//   stadium: 65,
//   coffeeShop: 200
// };

// for(let key in occupants){
//     if(occupants[key] > 100){
//         delete occupants[key];
//     }
// }

// console.log(occupants);