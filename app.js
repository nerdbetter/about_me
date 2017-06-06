'use strict';

console.log('loaded app.js');
var user_name = prompt('Who do I have the pleasure of speaking with today?');
alert('Howdy! ' + user_name + ' My name is Jason Logan, and today you will learn a few things about me from a simple Yes or No question game.');

var question_one = prompt('Have I ever been Skydiving?');
if (question_one.toLowerCase() === 'yes'){
  console.log('user answered correctly ' + question_one );
  alert('How did you know? I would love to get the opportunity to go again.');
}
  else {
    console.log('user ansered incorrectly ' + question_one + ' advised history.');
    alert('When I was eighteen I decided instead of a traditional graduation party I would jump out of an airplane! How exciting!');
  }

var question_two = prompt('Do I have any pets?');
if (question_two.toLowerCase() === 'yes'){
  console.log('user answered correctly ' + quesion_two );
  alert('You must know Wally and Joey, my two doggos! ');
}
  else {
    console.log('user ansered incorrectly ' + question_two + ' advised history.');
    alert('I actually have two dogs - Wally and Joey. Wally is smart as a whip but a little needy. Joey is super goofy sometimes and has earned the nickname \'Doey\'. ')

  }

var question_three = prompt('Do I have any kids?');

var question_four = prompt('Have I always worked in the tech industry?');

var question_five = prompt('Have I always been this good looking?');
