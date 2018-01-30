document.addEventListener('DOMContentLoaded', function(){

});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const friends = ['Corey', 'Johnny', 'Best', 'Bravo', 'Andrew'];
// var friend = friends[i];
var numberOfLines = 99;
var line1 = ' lines of code in the file '; 
var line2 = ' lines of code; ';
var line3 = ' strikes one out, clears it all out '; 
var line4 = ' lines of code in the file '; 
var line5 = ' no more lines of code in the file.';

let btn = document.createElement('button');
btn.className = 'newBtn';
btn.innerText = 'Sing';
document.body.appendChild(btn);

var newDiv;

btn.addEventListener('click', () => {
    var divTen = document.createElement('div');
    divTen.className = 'divTen';
    document.body.appendChild(divTen);

    var boxBtn = document.createElement('button');
    boxBtn.className = 'boxButton';
    boxBtn.innerText = 'BOX';
    divTen.appendChild(boxBtn);

    for(let i = 5; i < friends.length; i++){
        var friend = friends[i] + "!";

        var myFrinds = document.createElement('h2');
        var myFrinds = document.createTextNode(friend);
        console.log(myFrinds)
        boxBtn.appendChild(myFrinds);

     }

    boxBtn.addEventListener('click', () => {

    
     
    })

})



















// btn.addEventListener('click', function mySingingFriends(newDiv){    
//     for(let i = 0; i < friends.length; i++){
//         var friend = friends[i];

//         // let firstLetter = capitalizeFirstLetter(friend);

//         // console.log(firstLetter);
//         let head = document.createElement('h1');
//         let nameText = document.createTextNode(friend);
//         console.log(nameText);
//         let myDiv = document.createElement('div');
//         myDiv.className = 'myDiv';
//         // var newDiv = this.myDiv;
//         let divBtn = document.createElement('button');
//         divBtn.className = 'divBtn';
//         divBtn.innerText = 'sing';
//         document.body.appendChild(divBtn);
//         myDiv.appendChild(divBtn);
//         myDiv.appendChild(head);
//         document.body.appendChild(myDiv);

//         divBtn.addEventListener('click', function(){

//             // let head = document.createElement('h2');
//             // let nameText = document.createTextNode(friend);
//             // head.appendChild(nameText);
//             // myDiv.appendChild(head);
//             for(let j = 10; j > 0; j-- ){

//                 let para = document.createElement('p');

//                 if( j > 1){
//                     para.innerText = `${j} ${line1} ${j} ${line2} ${nameText} ${line3} 
//                     ${(j-1)} ${line4}`
//                 } else {
//                     para.innerText = `${j} ${line1} ${j} ${line2} ${nameText} ${line3} 
//                     ${(j-1)} ${line5}`
//                 }

//                 myDiv.appendChild(para);
//             }

//         })
        
//     }
//     btn.addEventListener('dblclick', function(){
//         var removeMe = this.myDiv;
//         document.removeChild(removeMe);
//     });
// });







// document.addEventListener('DOMContentLoaded', function(){

// });


// const friends = ['Friend1', 'Friend2', 'Friend3', 'Friend4', 'Friend5'];

// let btn = document.createElement('button');
// btn.className = 'myBtn';
// btn.innerText = 'sing';
// document.body.appendChild(btn);

// let work = 'work for this company';
// let workFor = ' but work in manufacturing'
// let best = ' Has the best job'

// btn.addEventListener('click', function mySingingFriends(){

//     for(let i = 0; i < friends.length; i++){
//         let friend = friends[i];
//         console.log(friend);

//         for(j = 5; j > 0; j--){

//             if(j > 1){
//                 var lyric = document.createTextNode(`${friend} ${work} ${j} ${friends[i]} ${workFor}`);
                
//             } else {
//                 var lyric = document.createTextNode(`${friend} ${(j-1)} ${best}`);
//             }

//             var para = document.createElement('p');
//             para.appendChild(lyric);
//             document.body.appendChild(para);
//         }
//         // btn.appendChild(para);

//     }

// })