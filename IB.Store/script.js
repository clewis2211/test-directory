// function makeFunc(){
//     let name = 'Name';
//     function displayName(){
//         alert(name);
//     }
//     return displayName;
// }
// let myFunc = makeFunc();
// myFunc();

// function greeter(personName){
//     return function(){
//         alert('Hello' + personName + '!');
//     }
// }

// let greeterJohn = greeter('John');
// let greeterJane = greeter('Jane');
// var greeterJoseph = greeter('Joseph')
// greeterJohn();
// greeterJane();
// greeterJoseph();

// let i = 0;

// function listener(name, age){
//     return function(){
//         console.log(`${++i}. ${name} ${age}`);
//     }
// }
// const speaker = listener('Hooly', 'Crap');
// const speaker1 = listener('Carlton', 'Lewis');
// const speaker2 = listener('Jarita', 'Lewis');
// speaker();
// speaker1();
// speaker2();

// function myName(){
//     console.log(this.name);
// }
// var name = 'shapae';



// var lewis = {
//     name: 'lewis',
//     myName: myName
// };

// var carlton = {
//     name: 'carlton',
//     myName: myName
// };

// myName();
// lewis.myName();
// carlton.myName();

var lost = 'carlton'

function guest(guestOne, guestTwo){
    console.log(guestOne  + ' and' + guestTwo  + ' are at' +  this.lost + ' houst');
}

var newHost = {
    host: 'Carl'
}

newHost.guest('Tony', lost);