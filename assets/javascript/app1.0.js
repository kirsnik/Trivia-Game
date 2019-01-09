$(document).ready(function () {

    $("#quiz").hide();
    $("#scoreBoard").hide();
    trivaData();
    startGame();

});

function trivaData() {
    var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";
    $.ajax({ /*   */
        url: queryURL,
        /*   */
        method: "GET" /*   */

    }).then(function (response) {
        window.gameData = response;
        console.log('window.gameData', window.gameData);
    });
}


function startGame() {
    var startButton = $("<button>", {
        id: "start",
        text: "Start",
        class: "btn btn-primary btn-lg",
        role: "button"
    });
    $("#startGame").append(startButton).on('click', function () {
        $(this).hide();
        $("#quiz").show();
        displayTest();
    });
}

var answers = [];

function displayTest() {
    
    timer();
    // a for loop that pulls the response, creates a <p> element that is then appended to id:quiz
    for (let i = 0; i < gameData.results.length; i++) {
        let question = gameData.results[i];
        const questDiv = $("<div>")
        $(questDiv).attr('id', 'quest');
        const qc = $("<p>" + "<br>").text(question.question);
        $(questDiv).append(qc);
        $("#quiz").append(questDiv);

        const incorrectAns = question.incorrect_answers;
        var correctAns = question.correct_answer.trim();
        console.log('this is the var for this', correctAns);
        const randomArr = incorrectAns.concat(correctAns);
        let answerArr = randomChoices(randomArr);

        console.log('answerArr', answerArr);
        for (let j = 0; j < answerArr.length; j++) {
            // console.log("asdf")

            var radioButton = $('<button value = "randomChoices(answerArr[j])">' + randomChoices(answerArr[j]) + '</button>');
            console.log('THIs IS THE ANSWER', correctAns);
            $(questDiv).append(radioButton);

        }

        $(questDiv).one("click", "button", function (event) {

            const userResponse = event.target.innerHTML;
            console.log('inside of oneclick', userResponse);
            answers.push(userResponse);
            console.log('userResponse', answers);
            if (typeof userResponse !== 'undefined') {

                var checkResult = checkAnswer(userResponse, question.correct_answer.trim());
                console.log('checkAnswer ' + checkResult);
            }

        });
        $(questDiv).on("click", "button", function (event) {
            $(questDiv).hide();
        });


    }
    submitButton();

}

var win = 0;
var lose = 0;
var notAnswered = 0;



function checkAnswer(playerAnswer, trivia) {
    

     
    if (playerAnswer == trivia) {
        $("#win").text(win += 1);
    } else $("#losses").text(lose += 1);
    // else if (playerAnswer == "undefined") {
    //     $("#noAns").text(notAnswered += 1)
    // }
}

function scoreBoard(){
    $("#win span").text(win);
    $("#losses span").text(lose);
    $("#noAns span").text(notAnswered);
    
}

function submitButton(){
    var submit = $("<a class= 'btn btn-primary btn-lg' role='button' >Submit</a>");
    $("#quiz").append(submit)
    $(submit).css("margin-top: 10px")
    $(submit).on("click", function(){
        
        $("#quiz").hide();
        $("#scoreBoard").show()

    });
}



function randomChoices(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function timer() {
    var sec = 5;
    var timer = setInterval(function() { 
       $('#quiz span').text(sec--);
       if (sec == -1) {
          $('#quiz').fadeOut('fast');
          clearInterval(timer); 
          $("#scoreBoard").show();
          
       } 
    }, 1000);
}

