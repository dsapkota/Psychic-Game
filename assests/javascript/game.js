var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 4;
var html = "";
var userGuess;
var userGuessStr="";
var count=0;
var computerGuess;



html= "<p>Guess what letter I'm thinking of</p>"+
            "<p>wins:" + wins +"</p>"+
            "<p>losses: " +losses+"</p>"+
            "<p>guesses Left: " + guesses +"</p>"+
            "<p>Your Guess so far:</p>";

  document.querySelector ("#game").innerHTML =html;


   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    userGuess = event.key; 
    userGuess =userGuess.toLowerCase();
    console.log("userGuess:" + userGuess);

    if (count===0) {
       userGuessStr=userGuess;
     }

    else {
        userGuessStr = userGuessStr + ", " + userGuess;
    }

    count++;

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess); 

    if(userGuess === computerGuess){
        wins++;
        guesses=4;
        count=0;
        userGuessStr="";

        html= "<p>Guess what letter I'm thinking of</p>"+
            "<p>wins:" + wins +"</p>"+
            "<p>losses: " +losses+"</p>"+
            "<p>guesses Left: " + guesses +"</p>"+
            "<p>Your Guess so far:</p>"+
            "<p>"+userGuessStr+"</p>";
           
        document.querySelector ("#game").innerHTML =html;

    }
    else{
        guesses--;



        if (guesses===0) {
          guesses=4;
          losses++;

          count=0;
          userGuessStr="";

        }

        html= "<p>Guess what letter I'm thinking of</p>"+
            "<p>wins:" + wins +"</p>"+
            "<p>losses: " +losses+"</p>"+
            "<p>guesses Left: " + guesses +"</p>"+
            "<p>Your Guess so far:</p>"+
            "<p>"+userGuessStr+"</p>";

        document.querySelector ("#game").innerHTML =html;

    }
  };

 

// userguess.push(event.key);

 


