//  var rightAnswer = ['bear','cats','dogs','panda','jerraff','elephant']
//  var times = 6;
//  var me = 0;
//  while(me < 6){
//      var seventhQue = prompt ('guess animals get birth? u have six tries. ');
//      var checkAnswer = '';
//      if(seventhQue === null){
//          console.log('try to type answer.');
//          alert('try to type an answer.');
//          checkAnswer = checkAnswer + 'try to type an answer.';
//      } else{
//          if(rightAnswer.indexOf(seventhQue.toLocaleLowerCase()) !== -1){
//              console.log('Exactly!');
//              alert('Exactly');
//              checkAnswer++;
//              var animals = 'these are the answers';
//              for(var x=0; x < rightAnswer.length; x++){
//                  console.log('answer number' + (x+1) + 'is: '+ rightAnswer[x].toUpperCase())
//                  animals = animals + 'answer number' + (x+1) + 'is: '+ rightAnswer[x].toUpperCase;

//              }
//            console.log(animals);
//            alert(animals);
//            break;
//          }
//          else{
//              console.log('wrong answer');
//              alert('wrong answer');
//              checkAnswer = checkAnswer + "Wrong!";
//          }
//          times--;
//          if(times !== 0){
//              console.log('');
//              alert(checkAnswer + 'u stiil have' + times +'again');
//          } else{
//              console.log('you lost!');
//              alert('you lost!');
//          }
//          if(me === 5){
//              console.log('wrong answer');
//              alert('wrong answer');
//              var animal = 'this is all answers';
//              for ( var u = 0; u < rightAnswer.length, u++;) {
//                  console.log('answer number' + (u+1) + 'is:' + rightAnswer[u].toUpperCase())
//                  animal = animal + 'answer number' + (u+1) + 'is:' + rightAnswer[u].toUpperCase()
//              }
//              console.log(animal);
//              alert(animal);
//          }
//      }
//      me++
//  }
// alert(userName);

// let num = 10;
// nextPrime: for (let i = 2; i <= num; i++) {
// for (let j = 2; j < i; j++) {
// if (i % j == 0) continue nextPrime;
// }
// switch (i) {
// case 3:
// alert("🙂");
// break;
// case 5:
// alert("😄");
// break;
// case 7:
// alert("😂");
// break;
// }
// }

// var correct = prompt('Whats correct?');
// let a = 2 + 2;


// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break
//   case 4:
//     alert( 'Exactly!' );
//     break
//   case 5:
//     alert( 'Too big' );
//     break
//   default:
//     alert( "I don't know such values" );
//     break
// }