
var score = 0;
var started = false;
var questionIndex = 0;
var results = "";
var currentQuestion = "";
var currentAnswers = "";
var seconds = 10;


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


for (let q = 0; q < questionsAnswers.length; q++) {
    for (let a = 0; a < questionsAnswers.length;) {
        console.log(a);
    }
}