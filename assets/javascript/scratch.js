
var score = 0;
var started = false;
var questionIndex = 0;
var results = "";
var currentQuestion = "";
var currentAnswers = "";
var clockRunning = false;

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
    {q: "Please give your cat a once-over to estimate their Spooky MurderRageSauce. Be fair. ", a: ["10+ (my cat is extra spooky)", "7 - 9", "4 - 6", "0 - 3"]}
];



$(document).keypress(function() {

    if (!started) {
        console.log("this is working");
        console.log(questionIndex);
        // collapse the title, generate a question, change started to true
        $("#title").slideUp();
        renderQuestion();
        renderAnswers();
        questionIndex++;
        started = true;
        // setTimeout(tenSeconds, 10 * 1000);
        startTimer();
    }

})

function startTimer() {
    if (!clockRunning) {
        setTimeout($("#time-left").html("<h2>You have 10 seconds to respond</h2>"), 10 * 1000);
        clockRunning = true;
    }

}

function stopTimer() {
    $("#time-left").html("<h2>Next!</h2>");
    clockRunning = false;
}

// function tenSeconds() {
//     $("#time-left").html("<h2>You have 10 seconds to answer.</h2>")
// }

function renderQuestion() {
    // give a question
    // if no more left, render next one
    if (questionIndex <= (questionsAnswers.length - 1)) {
        var currentQuestion = questionsAnswers[questionIndex].q;
    }
    questionIndex++;
    $("#question").text(currentQuestion);
}


function renderAnswers() {
    if (questionIndex <= (questionsAnswers.length - 1)) {
        var currentAnswers = questionsAnswers[questionIndex].a;
    }

    console.log(currentAnswers);

    for (let i = 0; i < currentAnswers.length; i++) {
        var answersIndex = currentAnswers.indexOf(currentAnswers[i]);
        var radioBtn = $('<input id="option" class="my-button" type="radio" name="option">');
        var btnOption = $('<label id="answer" for="option"></label>');



        radioBtn.addClass("radioBtn");
        btnOption.text("  " + currentAnswers[answersIndex]);

        if (i === 0) {
            radioBtn.attr("data-radiobtnvalue", 10);
        } else if (i === 1) {
            radioBtn.attr("data-radiobtnvalue", 7);
        } else if (i === 2) {
            radioBtn.attr("data-radiobtnvalue", 4);
        } else if (i === 3) {
            radioBtn.attr("data-radiobtnvalue", 2);
        }

        $("#answers").append(radioBtn).append(btnOption);

        }

    $("#answers").on("click", "input", function(event) {
        event.preventDefault();
        score = score + parseInt($(this).attr("data-radiobtnvalue"));
        $("#your-score").text(score);
        stopTimer();
        renderQuestion();
    });
}




























