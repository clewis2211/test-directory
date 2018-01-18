document.addEventListener('DOMContentLoaded', function(){
    mySingFriends()

});



const friends = ['orey', 'ohnny', 'est', 'ravo', 'ndrew'];
var friend = friends.length;
var numberOfLines = 99;
var line1 = ' lines of code in the file '; 
var line2 = ' lines of code; ';
var line3 = ' strikes one out, clears it all out '; 
var line4 = ' lines of code in the file '; 
var line5 = ' no more lines of code in the file.';
console.log(friends);
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mySingFriends(){

    for(let i = 0; i < friends.length; i++){
        let myFriend = friends[i];
        let capatializeName = capitalizeFirstLetter(myFriend);
        console.log(capatializeName);
        for(j = 99; j > 0; j-- ){
    
            
            if(j > 1){
               var lyric = document.createTextNode(`${j} ${line1} ${j} ${line2}; ${capatializeName} ${line3} ${(j-1)} ${line4}`);
            } else {
                var lyric = document.createTextNode(`${j} ${line1} ${j} ${line2}; ${capatializeName} ${line3} ${(j-1)} ${line5}`);
            } 
            // let graph1 = document.createElement('p');
            // lyric.appendChild(graph1);
        }
        document.body.appendChild(lyric);
    }
}

//-----Set Default Paramater Second
function say (name = 'john'){
    console.log(`hello my name is ${name}`);
}

say('Kathy');

function prod(a, b = '22'){
    console.log(a * b);
}

prod(4, 4);

const displaySkills = (name, skill) =>{
    console.log(`hello work world; I work at ${name} and I have ${skill} skills to show`);
}

displaySkills('New Hope Church', 'Many Many Many');

let add = (a, b) => a - b;
const result = add(33, 44);
console.log(result);

const spread = (a, b, c) => {
    console.log(a, b, c);
}

spread(1, 2, 3);





// const graph = document.createElement('p');
// graph.innerText = 'Hello World';
// document.body.appendChild(graph);

// const para = document.createElement('p');
// const myName = document.createTextNode('Carlton Lewis');
// para.appendChild(myName);
// document.body.appendChild(para);
