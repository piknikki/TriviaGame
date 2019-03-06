
var score = 0;
var questionIndex = 0;
var started = false;
var questionIndex = 0;
var results = "";

var questionsAnswers = [
    {q: "How often does your cat press on your internal organs?", a: ["daily", "weekly", "monthly", "never"]},
    {q: "Has your cat ever left a 'present' on your doorstep? Note: this isn't a gift; it's a warning.", a: ["daily", "many times", "a few times", "never"]},
    {q: "Does your cat like to engage in staring contests with you? Never look away; this is how your cat tests your strength and resolve.", a: ["constantly", "often", "sometimes", "never"]},
    {q: "Does your cat stare at you while hiding in dark places?", a: ["all the time", "often", "sometimes", "never"]},
    {q: "Does your cat typically stay up at night?", a: ["always (my cat is like Batman if he pooped in a box)", "frequently", "sometimes", "never"]},
    {q: "Does your cat sleep on your electronics?", a: ["always (my cat is trying to disrupt communications to the outside world)","frequently", "sometimes", "never"]},
    {q: "How often does your cat give you the stink eye?", a: ["daily", "weekly", "monthly", "never"]},
    {q: "When you enter a room, does your cat suddenly sprint out of it? This is a failed ambush.", a: ["daily", "often", "sometimes", "never"]},
    {q: "Does your cat kick litter all over the room? This is practice for burying bodies.", a: ["every.single.time", "often", "sometimes", "never"]},
    {q: "Does your cat paw at your face while you sleep?", a: ["always (my face is a nocturnal sparring bag)", "frequently", "sometimes", "never"]},
    {q: "Please give your cat a once-over to estimate their Spooky MurderRageSauce. Be fair. ", a: ["0 - 3", "4 - 6", "7 - 9", "10+ (my cat is extra spooky)"]}
];


$(document).keypress(function() {
    if (!started) {
        console.log("this is working");
        // collapse the title, generate a question, change started to true
        $("#title").removeClass(".show");
        // $("#question").text(newQuestion);
        renderQuestion();
        started = true;
    }

})

// need a button click event to count up questionIndex and kep track of answers/score


function refreshGame() {
    score = 0;

}


function renderQuestion() {
    // give a question
    // if no more left, render next one
   if (questionIndex <= (questionsAnswers.length - 1)) {
        var newQuestion = questionsAnswers[questionIndex].q;
        var newAnswers = questionsAnswers[questionIndex].a;


        for (var i = 0; i < questionsAnswers.length + 1; i++) {
            $("#question").text(newQuestion);
            questionIndex++;
            var radioBtn = $('<input class="my-button form-check-input" type="radio" name="option">' +
                '<label id="answer" for=""></label>')

            if (i === 0) {
                $(".my-button").attr("data-murdersaucevalue", 10);
            } else if (i === 1) {
                $(".my-button").attr("data-murdersaucevalue", 7);
            } else if (i === 2) {
                $(".my-button").attr("data-murdersaucevalue", 4);
            } else if (i === 3) {
                $(".my-button").attr("data-murdersaucevalue", 2);
            }

            radioBtn.text(newAnswers[i]);
            $("#answer").append(radioBtn);
        }

    } else if (questionIndex ) {
        $("#question").text("All done.");
        $("#score").text(score);
        $("#results").text(results);
    }

    return newQuestion;
}


function updateScore() {
    $("#your-score").text(score);
}

function giveResults() {
    var response = "There is a " + score + "% chance your cat is plotting to kill you.";
    if (score >= 60) {
        results = "Been nice knowing you. You will be missed.";
        $("body").style.background("red");
    } else if (score < 60 && score >= 30) {
        results = "May your death be merciful and just."
    } else if (score < 30) {
        results = "You lucky bastard! Watch your step; this result could change at any moment.";
    }
    return response + results;
}

renderQuestion();
updateScore();

//  make event handler for when user clicks a button