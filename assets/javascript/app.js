$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 15,
		reset: function() {
			this.time = 15;
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

// counters
var correct = 0;
var wrong = 0;

// questions
var q1 = {
	question : "The plural version of LEGO is LEGO?",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};

var q2 = {
	question: "The word LEGO is from the first two letters of the Danish words Leg and Godt, which means play well?",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};
var q3 = {
	question: "There are 186 LEGO bricks for every person on earth.",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};
var q4 = {
	question: "LEGO is the largest tire manufacture in the world.",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};
var q5 = {
	question: "One LEGO can bear up to 6,000 Newtons of force, or over 1,349 pounds",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};
var q6 = {
	question: "LEGO is one of the few commercial toys that are not manufactured in China.",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};
var q7 = {
	question: "LEGO created the first minifigure in 1968",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};
var q8 = {
	question: "LEGO bricks were originally called “Automatic Binding Bricks.",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};
var q9 = {
	question: "Most LEGO heads have noses so that the facial graphics remain as clean as possible.",
	possibleAnswers: ["True",
				 "False"],
	answer : [false, true],
};
var q10 = {
	question: "In September 2014, Lego passed Hasbro to become the world’s second biggest toy maker",
	possibleAnswers: ["True",
				 "False"],
	answer : [true, false],
};


var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	countdownTimer.reset();
  $(".question").html("<h2>" + questionArray[questionSelection].question + "</h2>");
  $("#true").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#false").text(questionArray[questionSelection].possibleAnswers[1]).show();
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
        index++
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
	$(".question").append("<h2><p>You got " + correct + " correct</p></h2>");
    $(".question").append("<h2><p>You got " + wrong + " incorrect</p></h2>");
    $(".question").append("<button id='resetB'>Reset</button>");
	countdownTimer.stop();
	$(".timer").empty();

}



setup();
$(".trueFalse").on("click", function() {
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