'use strict'

userName = prompt('Whats Your Name??');
alert(userName + ", Happy to see you on my page!!");


var firQue = prompt('Are you feeling good today? yes or no.');
// console.log(firQue);

if(firQue.toLowerCase() === "yes"){
  alert('im happy to hear u r good');
} else if(firQue.toLowerCase() === 'no'){
  var why= prompt('why u r not feeling good?');
} else {
  alert('Refresh your page and choose one of the answers!');
}

var secQue = prompt('Have you ever been to Qatar? yes or no');
// console.log(secQue);

if(secQue.toLowerCase() === "yes"){
  alert('Its a nice country!');
} else if(secQue.toLowerCase() === 'no'){
  var why= prompt('you most visit it');
} else {
  alert('Refresh your page and choose one of the answers!');
}

var thiQue = prompt('Did you enjoyed yesterday? yes or no.');
// console.log(thiQue);

if(thiQue.toLowerCase() === "yes"){
  alert('Hope today as well.');
} else if(thiQue.toLowerCase() === 'no'){
  var why= prompt('maybe today will be better.');
} else {
  alert('Refresh your page and choose one of the answers!');
}

var forQue = prompt('You will watch the match tonight? yes or no.');
// console.log(forQue);

if(forQue.toLowerCase() === "yes"){
  alert('Hope your team will win!');
} else if(forQue.toLowerCase() === 'no'){
  var why= prompt('why u r not feeling good?');
} else {
  alert('RIts boaring one anyway,,');
}

var fifQue = prompt('Do like Tennis? yes or no.');
// console.log(firQue);

if(fifQue.toLowerCase() === "yes"){
  alert('There is an offer at the club x');
} else if(fifQue.toLowerCase() === 'no'){
  var why= prompt('try to play it once!');
} else {
  alert('Refresh your page and choose one of the answers!');
}

alert(userName);

var numInput = prompt('Can you guess the correct number from 1 to 10?');

while(numInput !== '7'){
  numInput = prompt('try again');
  numInput = prompt('try again');
  numInput = prompt('try again');
  numInput = prompt('try again');
  numInput = prompt('The Answer is 7 !');
}
console.log(numInput);

alert('Possible answers for next: from one to ten');

var me = '3' || '1';
var tryGuess = ['1', '3','5','7'];

 do{
   tryGuess = prompt('how many times i tryied to fix this assignment?from 1 to 10'); me <= 4; 
   console.log(tryGuess);
 }while(tryGuess !== me){
  alert("correct");

  
 }
 console.log(tryGuess);

 var rightAnswer = ['bear','cats','dogs','panda','jerraff','elephant']
 var times = 6;
 var me = 0;
 while(me < 6){
     var seventhQue = prompt ('guess animals get birth? u have six tries. ');
     var checkAnswer = '';
     if(seventhQue === null){
         console.log('try to type answer.');
         alert('try to type an answer.');
         checkAnswer = checkAnswer + 'try to type an answer.';
     } else{
         if(rightAnswer.indexOf(seventhQue.toLocaleLowerCase()) !== -1){
             console.log('Exactly!');
             alert('Exactly');
             totalScore++;
             var animals = 'these are the answers';
             for(var x=0; x < rightAnswer.length; x++){
                 console.log('answer number' + (x+1) + 'is: '+ rightAnswer[x].toUpperCase())
                 animals = animals + 'answer number' + (x+1) + 'is: '+ rightAnswer[x].toUpperCase;

             }
           console.log(animals);
           alert(animals);
           break;
         }
         else{
             console.log('wrong answer');
             alert('wrong answer');
             checkNewAnswer = checkNewAnswer + "Wrong!";
         }
         times--;
         if(times !== 0){
             console.log('');
             alert(checkNewAnswer + 'u stiil have' + tries +'again');
         } else{
             console.log('you lost!');
             alert('you lost!');
         }
         if(me === 5){
             console.log('wrong answer');
             alert('wrong answer');
             var animal = 'this is all answers';
             for ( var u = 0; u < rightAnswer.length, u++) {
                 console.log('answer number' + (u+1) + 'is:' + rightAnswer[u].toUpperCase())
                 animal = animal + 'answer number' + (u+1) + 'is:' + rightAnswer[u].toUpperCase()
             }
             console.log(animal);
             alert(animal);
         }
     }
     me++
 }
