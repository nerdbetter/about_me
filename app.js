'use strict';

console.log('loaded app.js');
var user_correct = 0;
var user_name;
function main(){
prompt_user();
question_one();
question_two();
question_three();
question_four();
question_five();
question_six();
question_seven();
score();
}
function prompt_user(){
  user_name = prompt('Who do I have the pleasure of speaking with today?');
  alert('Howdy ' + user_name + '! My name is Jason Logan, and today you will learn a few things about me from a simple Yes or No question game.');
}
function question_one(){
  var question_one = prompt('Have I ever been Skydiving?');
  if (question_one.toLowerCase() === 'yes'){
    console.log('user answered correctly ' + question_one );
    alert('How did you know? I would love to get the opportunity to go again.');
    user_correct++;

  }
  else if (question_one.toLowerCase() === 'no'){
    console.log('user ansered incorrectly ' + question_one + ', advised history.');
    alert('When I was eighteen I decided instead of a traditional graduation party I would jump out of an airplane! How exciting!');
  }
  else{
    alert('You must answer yes or no.');
  }
}
function question_two(){
  var question_two = prompt('Do I have any pets?');
  if (question_two.toLowerCase() === 'yes'){
    console.log('user answered correctly ' + question_two );
    alert('You must know Wally and Joey, my two doggos! ');
    user_correct++;
  }
  else if (question_two.toLowerCase() === 'no'){
    console.log('user ansered incorrectly ' + question_two + ', advised history.');
    alert('I actually have two dogs - Wally and Joey. Wally is smart as a whip but a little needy. Joey is super goofy sometimes and has earned the nickname \'Doey\'. ');
  }
  else{
    alert('You must answer yes or no.');
  }
}
function question_three(){
  var question_three = prompt('Do I have any kids?');
  if (question_three.toLowerCase() === 'yes'){
    console.log('user answered incorrectly ' + question_three + ', advised history.');
    alert('I do not! Not yet anyway.');
  }
  else if (question_three.toLowerCase() === 'no'){
    console.log('user answered correctly ' + question_three );
    alert(' You are right! Not yet anyway.');
    user_correct++;
  }
  else{
    alert('You must answer yes or no.');
  }
}
function question_four(){
  var question_four = prompt('Have I always worked in the tech industry?');
  if (question_four.toLowerCase() === 'yes'){
    console.log('user answered incorrectly ' + question_four + ', advised history.');
    alert('I actually started as a regular old Infantry man in the Army. After that I worked for Proctor and Gamble as line technician for 2 years - Also worked at GoDaddy as a Sales and Support Inbound representative. GoDaddy is what got me seriously invested in the tech industry.');
  }
  else if (question_four.toLowerCase() === 'no'){
    console.log('user answered correctly ' + question_four );
    alert('Correct! I did many things before finding my love of code. I started as a regular old Infantry man in the Army. After that I worked for Proctor and Gamble as line technician for 2 years - Also worked at GoDaddy as a Sales and Support Inbound representative. GoDaddy is what got me seriously invested in the tech industry.');
    user_correct++;
  }
  else{
    alert('You must answer yes or no.');
  }
}
function question_five(){
  var question_five = prompt('Have I always been this good looking?');
  if (question_five.toLowerCase() === 'yes'){
    console.log('user answered correctly ' + question_five );
    alert('Heck yeah I have! Check this out!'); //somehow have an image link to old highschool photo of dorky me
    user_correct++;
  }
  else if (question_five.toLowerCase() === 'no'){
    console.log('user answered incorrectly ' + question_five + ', advised history.');
    alert('Heck yeah I have! Check this out!'); //somehow have an image link to old highschool photo of dorky me
  }
}
//This next part id the number guessing game
function question_six() {
  for (var i = 0; i < 4; i++){
    var number_guess = prompt('What is my favorite number? You get exactly 4 guesses.');
    var favorite_number = 413;
    if (parseInt(number_guess) === favorite_number){
      alert('How did you know that!?');
      console.log('user guessed number correcty');
      user_correct++;
      break;
    }
    else if (Number.isInteger(parseInt(number_guess)) === false ){
      alert('You were supposed to guess a number!');
      console.log('user did not guess a number');
    }
    else{
      alert('That is not correct');
      console.log('user guessed '
      + number_guess
      + ' ,That was incorrect');
      if (parseInt(number_guess) < favorite_number){
        alert('You need to guess higher!');
      }
      else{
        alert('You need to guess lower!');
      }
    }
  }
}
function question_seven(){
  var lived = ['California', 'North Carolina', 'Mississippi', 'Florida' ];
  var us_states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands',
    'Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota',
    'Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  attempts = 0;
  while ( attempts < 7){
    var states_guess = prompt('I have lived in four states other than Iowa, can you guess one?');
    if (lived.indexOf(states_guess) === 0){
      alert('That\'s correct! I\'ve lived in ' + lived + ' .Although I moved around a bit as a child and in the service, I consider Iowa my home!');
      user_correct++;
      break;
    }
    else if (us_states.indexOf(states_guess) == -1 ){
      alert('That is not a state!, Guess again!');
      attempts++;
    }
    else if (i >= 6){
      alert('Nice try, I have lived in ' + lived + ' .Although I moved around a bit as a child and in the service, I consider Iowa my home!');
    }
    else {
      alert('I have not lived there, try again!');
      attempts++;
    }
  }
}
function score(){
  alert('Thanks ' + user_name + ' for getting to know me a little bit. You got ' + user_correct + ' questions right!');
}
