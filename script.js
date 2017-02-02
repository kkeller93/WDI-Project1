//#### Self-scoring Trivia
//Pre-load your app with some questions and answers.

//Test the user's wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how
//right you are!

//*Bonus:*

  //* Add time-based scoring
  //* Track scores across games (even if the page is reloaded)
  //* Allow users to compete against each other on a high-score board.


//Trivia questions
//1. Who is the Redskins Starting Quarterback?
//   A. Kirk Cousins
//   B. Eli Manning
//   C. RGIII

//2. Who is the Redskins Head Coach?
// A. Jay Gruden
// B. Barack Obama
// C. Donald Trump

//3. Who is the Redskins owner?
//   A. Rob Kardashin
//   B. Dan Snyder
//   C. Jerry Jones

var triviaArray = [
  {
    optionOne: 'Kirk Cousins',
    optionTwo: 'Eli Manning',
    optionThree: 'RGIII',

    question: 'Who is the Redskins starting quarterback?',
    rightAnswer: 'optionOne'
  },
  {
    optionOne: 'Jay Gruden',
    optionTwo: 'Barack Obama',
    optionThree: 'Donald Trump',

    question: "Who is is the Redskins Head Coach?",
    rightAnswer: 'optionOne'

  },
  { optionOne: "Rob Kardashin",
    optionTwo: "Dan Snyder",
    optionThree: "Jerry Jones",

    question: "Who is the Redskins owner?",
    rightAnswer: 'optionTwo'

  }];

  console.log(triviaArray[0]);
  console.log(triviaArray[1]);
  console.log(triviaArray[2]);

$("input").on("click", function() {
  //function (not working)
})
// $('.answerOne').toggle();
// if you wanted to hide the "correct answer"
// use toggle(), this is like a switch to flip between showing that certain
// class or not
// currently it is hiding the .answerOne class
//Correct Answer (Kirk Cousins)
$(".answer1").on("click", function() {

  $("body").css("background-color", "blue");
  // $('.answerOne').toggle();
  // placing .toggle() here for the second time will allow the user to see that
  // they selected the correct answer
  submitQuiz();

})

//Wrong Answers
$(".answer2, .answer3, .answer5, .answer6, .answer7, .answer9").on("click", function() {
  $("body").css("background-color", "yellow");
  // definitely like how the page color changes when answer is clicked
  submitQuiz();
})
//correct answer (jay Gruden)
$(".answer4").on("click", function() {

  $("body").css("background-color", "blue");
  submitQuiz();

})
//Correct Answer (Dan Snyder)
$(".answer8").on("click", function() {
  $(".answer4").css("background-color", "blue");
  $("body").css("background-color", "blue");
  submitQuiz();
})


// $('.submit').on('click', pageReset);
// function pageReset() {
//   location.reload();
// }
// this function right here will allow the user to restart the game once answers
//  have been submitted


function submitQuiz() {
  console.log('submitted');``

}
