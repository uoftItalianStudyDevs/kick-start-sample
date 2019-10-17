var app = angular.module("Italian Hangman App", []);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout){
   $scope.demo = "somestring"

var words = ["allergia","antibiotico","cervello","fegato","oculista"]
$scope.incorrectLettersChosen = [];
$scope.correctLettersChosen = [];
//The total number of guesses that you can have every round
$scope.guesses = 6;
$scope.displayWord = '';
//an input object. 
$scope.input = {
    letter: ''
}

//RETURN A RANDOM WORD FROM words
//the random function gives a random number b/w zero and one,since its multiplied
//by the length of the array (words) then it will be a random number between 0 and the last 
//index in the array
// its rounded so it only takes whole numbers... only the indexes in the array. 
//dont use math.round.. migth sometimes give u numbers outside of bounds 
var selectRandomWord = function(){
    var index = Math.floor(Math.random()*words.length)
    return words[index];
}

var newGame = function(){
   $scope.incorrectLettersChosen = []; 
   $scope.correctLettersChosen = [];
   $scope.guesses = 6;
   $scope.displayWord = '';

//The random word in the new round
   selectedWord = selectRandomWord()
   var tempDisplayWord = '';
   //Covers the random word with ?
   for (var i = 0; i < selectedWord.length; i++){
       tempDisplayWord += '?'
   }
   console.log(tempDisplayWord)
   $scope.displayWord = tempDisplayWord;

}
$scope.letterChosen = function(){
    for(var i = 0; i<$scope.correctLettersChosen.length; i++){
        if($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
          $scope.input.letter = ""; 
          return; 
        }
    }

    for (var i = 0; i<$scope.incorrectLettersChosen.length; i++){
        if ($scope.incorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
            $scope.input.letter = "";
            return;
        }
    }

    var correct = false;
    for (var i = 0; i < selectedWord.length; i++){
        if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()){
            $scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1)
            correct = true;
        }
    }
    if (correct){
        $scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
    }else{
        $scope.guesses--
        $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
    }
    $scope.input.letter = "";
    if($scope.guesses == 0){
        alert("You lost, practice your vocabulary more!")
        //Function that restarts game after user loses
        $timeout(function(){
            newGame()
        },500);
    }
    if ($scope.displayWord.indexOf("?") == -1){
        alert("You won!!! you definetly know your vocabulary!")
        //Function that restarts game after user wins
        $timeout(function(){
            newGame()
        },500);

    }
}
newGame();

}]);