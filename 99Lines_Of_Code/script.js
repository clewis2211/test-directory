document.addEventListener('DOMContentLoaded', function(){
    // mySingingFriends();
});


const friends = ['orey', 'ohnny', 'est', 'ravo', 'ndrew'];
var friend = friends.length;
var numberOfLines = 99;
var line1 = ' lines of code in the file '; 
var line2 = ' lines of code; ';
var line3 = ' strikes one out, clears it all out '; 
var line4 = ' lines of code in the file '; 
var line5 = ' no more lines of code in the file.';

let btn = document.getElementById('click');

btn.addEventListener('click', function mySingingFriends(){

    for(let i = 0; i < friends.length; i++){
        let friend = friends[i];
        let head = document.createElement('h1');
        let nameText = document.createTextNode(friend);
        console.log(nameText);
        let myDiv = document.createElement('div');

        head.appendChild(nameText);
        myDiv.appendChild(head);
        document.body.appendChild(myDiv);

        for(let j = 99; j > 0; j-- ){

            let para = document.createElement('p');

            if( j > 1){
                para.innerText = `${j} ${line1} ${j} ${line2} ${nameText} ${line3} 
                ${(j-1)} ${line4}`
            } else {
                para.innerText = `${j} ${line1} ${j} ${line2} ${nameText} ${line3} 
                ${(j-1)} ${line5}`
            }
            myDiv.appendChild(para);
        }
    }
});



