'use strict'
var userName ='';
userName = prompt('Whats Your Name??');
alert(userName + ", Happy to see you on my page!! 😄 ");



var firQue = prompt('Are you feeling good today? yes or no');
if(firQue.toLowerCase() === "yes"){
  alert('im happy to hear u r good 🙂');
} else if(secQue.toLowerCase() === 'no'){
   alert('why u r not feeling good? 😄');
} else {
  alert('Refresh your page and choose one of the answers!');
}



var secQue = prompt('Have you ever been to Qatar? yes or no');
if(secQue.toLowerCase() === "yes"){
  alert('Its a nice country! 😄');
} else if(secQue.toLowerCase() === 'no'){
   alert('you most visit it🙂');
} else {
  alert('Refresh your page and choose one of the answers!');
}



var thiQue = prompt('Did you enjoyed yesterday? yes or no.');
if(thiQue.toLowerCase() === "yes"){
  alert('Hope today as well. 😄');
} else if(thiQue.toLowerCase() === 'no'){
  alert('maybe today will be better.🙂');
} else {
  alert('Refresh your page and choose one of the answers!');
}



var forQue = prompt('You will watch the match tonight? yes or no.');
if(forQue.toLowerCase() === "yes"){
  alert('Hope your team will win!😄');
} else if(forQue.toLowerCase() === 'no'){
   alert('Its boaring one anyway,, 🙂');
} else {
  alert('Its boaring one anyway,, 🙂');
}



var fifQue = prompt('Do like Tennis? yes or no.');
if(fifQue.toLowerCase() === "yes"){
  alert('There is an offer at the club x 😄');
} else if(fifQue.toLowerCase() === 'no'){
   alert('try to play it once! 🙂');
} else {
  alert('Refresh your page and choose one of the answers!');
}



var userScore = 0;
var attempts = 3;
var firstQue = 'can u guess a number from 1 to ten?';
var secQues = 'guess my car!';
var firstQueAnswer = ['7','3','9'];
var secQuesAnswer = ['bmw','lexus'];
queChecker(firstQue, firstQueAnswer);
queChecker(secQues, secQuesAnswer);
attempts = 2;

function queChecker(question, answersArray) {
    for( var i = 0; i<attempts; i++){
        var inputAnswer = prompt(question);
        var isNotDone = true;
        for (let index = 0; index < answersArray.length; index++) {
            if(inputAnswer === answersArray[index] ){
                userScore++;
                alert('Thats correct ! '+ answersArray +' ! ');
                isNotDone = false;
                break
            }  
        } if (isNotDone) {
            alert('not correct! I will give u another try.');
        }else{
            alert('The correct answers is = ' + answersArray);
            break;
        }
    }
}



var me = '3';
var tryGuess = ['1', '3','5','7'];
 do{
   tryGuess = prompt('how many times i tryied to fix this assignment?from 1 to 10'); me <= 4; 
 }while(tryGuess !== me){
  alert("correct");
 } 


 alert(userName + (' 🙂 Hope you enjoyed my page!'))
