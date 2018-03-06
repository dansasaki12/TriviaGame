$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$(".timer").html("<h2>" + this.time + " seconds remaining</h2>");
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);				
			if (countdownTimer.time >= 0) {
				$(".timer").html("<h2>" + countdownTimer.time + " seconds remaining</h2>");
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".trueFalse").hide();
                    showScore();
                    
				}
			}
		}
	};
var correct = 0;
var wrong = 0;
var q1 = {
	question : "The vehicle manufacturer Volvo was founded in Sweden?",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};

var q2 = {
	question: "General Motors was founded in Detroit, MI?",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};
var q3 = {
	question: "The first generation of the Chevrolet Corvette was introduced in 1952?",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};
var q4 = {
	question: "In most modern vehicles, the carburator has been replace with Fuel Injection System?",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};
var q5 = {
	question: "Jaguar was purchased by by Tata motors in 2006??",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};


var questionArray = [q1, q2, q3, q4, q5];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h2>" + questionArray[questionSelection].question + "</h2>");
  $("#true").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#false").text(questionArray[questionSelection].possibleAnswers[1]).show();
//  getAnswer();  
//  nextQuestion(index);
}

function setup() {
	index = 0;
	$(".question").append("<button id='startButton'>Start</button>");
	$("#startButton").on("click", function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$(".trueFalse").on("click", function() {
	  console.log("alert", index);
		index++;
		console.log("click", index);
		$(".question").text("");
		$("#true").text("");
		$("#false").text("");
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$(".question").empty();
	$(".question").append("<h2><p>" + correct + " correct</p></h2>");
	$(".question").append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$(".timer").empty();

}
setup();
$(".trueFalse").on("click", function() {
 console.log($(this));
 if(this.id == "true") {
 	var answerChosen = "true";
 } else if(this.id == "false") {
 	answerChosen = "false";
 } 
 if ((answerChosen == "true") && (questionArray[index].answer[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == "true") {
 	answerWrong();
 }
 if ((answerChosen == "false") && (questionArray[index].answer[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == "false") {
 	answerWrong();
 }

 $(".question").text("");
 $("#true").text("");
 $("#false").text("");

 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".trueFalse").hide();
 	showScore();
 }
});
});