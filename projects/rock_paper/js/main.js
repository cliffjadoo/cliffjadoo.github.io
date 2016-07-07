$(function(){

  var userScore = 0;
  var botScore = 0;
  var choices = ['rock', 'paper', 'scissors'];

  $('#rock').click(function(){;
    var botChoice = generateBotChoice();

    compare('rock', botChoice);
  });

  $('#scissors').click(function(){
    var botChoice = generateBotChoice();

    compare('scissors', botChoice);
  });

  $('#paper').click(function(){
    var botChoice = generateBotChoice();

    compare('paper', botChoice);
  });

  function generateBotChoice(){
    // generate random index from 0 to 2 to extract random computer choice
    // from the choices array
    return choices[Math.floor(Math.random()*choices.length)];
  }

  function compare(userChoice, botChoice) {
    if (userChoice === "rock" && botChoice === "scissors") {

      var userResult = 'win';
      userScore++;
      printScore();
      printMessage('rock', 'scissors', userResult);

    } else if (userChoice === "rock" && botChoice === "paper") {

      var userResult = 'lose';
      botScore++;
      printScore();
      printMessage('rock', 'paper', userResult);

    } else if (userChoice === "rock" && botChoice === "rock") {

      var userResult = 'tie';
      printScore();
      printMessage('rock', 'rock', userResult);

    } else if (userChoice === "paper" && botChoice === "rock") {

      var userResult = 'win';
      userScore++;
      printScore();
      printMessage('paper', 'rock', userResult);

    } else if (userChoice === "paper" && botChoice === "scissors") {

      var userResult = 'lose';
      botScore++;
      printScore();
      printMessage('paper', 'scissors', userResult);

    } else if (userChoice === "paper" && botChoice === "paper") {

      var userResult = 'tie';
      printScore();
      printMessage('paper', 'paper', userResult);

    } else if (userChoice === "scissors" && botChoice === "paper") {

      var userResult = 'win';
      userScore++;
      printScore();
      printMessage('scissors', 'paper', userResult);

    } else if (userChoice === "scissors" && botChoice === "rock") {

      var userResult = 'lose';
      botScore++;
      printScore();
      printMessage('scissors', 'rock', userResult);

    } else {
      //userChoice === "scissors" && botChoice === "scissors"

      var userResult = 'tie';
      botScore++;
      printScore();
      printMessage('scissors', 'scissors', userResult);
    }

    function printScore() {
      $('#humanScore').text(userScore);
      $('#computerScore').text(botScore);
    }

    function printMessage(userChoice, botChoice, userResult) {
      var message = "<p>You played <strong>" + userChoice + "</strong>. The bot played <strong>" +  botChoice + "</strong>."
      
      if (userResult === 'win') {
        message = message + " <p>You Win! :)</p>"
      } else if (userResult === 'lose' ) {
        message = message + " <p>You Lose :( </p>" 
      } else {
        message = message + " <p>You tied</p>"
      }

      $('#status').html(message); 
    }
  }
});