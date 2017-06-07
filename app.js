'use strict';

console.log('loaded app.js');
var user_name = prompt('Who do I have the pleasure of speaking with today?');
alert('Howdy ' + user_name + '! My name is Jason Logan, and today you will learn a few things about me from a simple Yes or No question game.');
do{
  var question_one = prompt('Have I ever been Skydiving?');
  if (question_one.toLowerCase() === 'yes'){
    console.log('user answered correctly ' + question_one );
    alert('How did you know? I would love to get the opportunity to go again.');
  }
  else if (question_one.toLowerCase() === 'no'){
    console.log('user ansered incorrectly ' + question_one + ', advised history.');
    alert('When I was eighteen I decided instead of a traditional graduation party I would jump out of an airplane! How exciting!');
  }
  else{
    alert('You must answer yes or no.');
  }
}
while (question_one.toLowerCase() !== 'yes' && question_one.toLowerCase() !== 'no' );

do{
  var question_two = prompt('Do I have any pets?');
  if (question_two.toLowerCase() === 'yes'){
    console.log('user answered correctly ' + question_two );
    alert('You must know Wally and Joey, my two doggos! ');
  }
  else if (question_two.toLowerCase() === 'no'){
    console.log('user ansered incorrectly ' + question_two + ', advised history.');
    alert('I actually have two dogs - Wally and Joey. Wally is smart as a whip but a little needy. Joey is super goofy sometimes and has earned the nickname \'Doey\'. ');
  }
  else{
    alert('You must answer yes or no.');
  }
}
while (question_two.toLowerCase() !== 'yes' && question_two.toLowerCase() !== 'no' );

do{
  var question_three = prompt('Do I have any kids?');
  if (question_three.toLowerCase() === 'yes'){
    console.log('user answered incorrectly ' + question_three + ', advised history.');
    alert('I do not! Not yet anyway.');
  }
  else if (question_three.toLowerCase() === 'no'){
    console.log('user answered correctly ' + question_three );
    alert(' You are right! Not yet anyway.');
  }
  else{
    alert('You must answer yes or no.');
  }
}
while (question_three.toLowerCase() !== 'yes' && question_three.toLowerCase() !== 'no' );

do{
  var question_four = prompt('Have I always worked in the tech industry?');
  if (question_four.toLowerCase() === 'yes'){
    console.log('user answered incorrectly ' + question_four + ', advised history.');
    alert('I actually started as a regular old Infantry man in the Army. After that I worked for Proctor and Gamble as line technician for 2 years - Also worked at GoDaddy as a Sales and Support Inbound representative. GoDaddy is what got me seriously invested in the tech industry.');
  }
  else if (question_four.toLowerCase() === 'no'){
    console.log('user answered correctly ' + question_four );
    alert('Correct! I did many things before finding my love of code. I started as a regular old Infantry man in the Army. After that I worked for Proctor and Gamble as line technician for 2 years - Also worked at GoDaddy as a Sales and Support Inbound representative. GoDaddy is what got me seriously invested in the tech industry.');
  }
  else{
    alert('You must answer yes or no.');
  }
}
while (question_four.toLowerCase() !== 'yes' && question_four.toLowerCase() !== 'no' );

do{
  var question_five = prompt('Have I always been this good looking?');
  if (question_five.toLowerCase() === 'yes'){
    console.log('user answered correctly ' + question_five );
    alert('Heck yeah I have! Check this out!'); //somehow have an image link to old highschool photo of dorky me //
  }
  else if (question_five.toLowerCase() === 'yes'){
    console.log('user answered incorrectly ' + question_five + ', advised history.');
    alert('Heck yeah I have! Check this out!'); //somehow have an image link to old highschool photo of dorky me //
  }
}
while (question_five.toLowerCase() !== 'yes' && question_five.toLowerCase() !== 'no' );
