var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";

$.ajax({ /*   */
    url: queryURL,
    /*   */
    method: "GET" /*   */

}).then(function(response) { /*   */
    console.log('response', response); /*   */

    // array to store user answer
    var answers = [];

    // onclick start game
    var startGame = $("<button>", {
        id: "start",
        text: "Start"
    });
    $("#startGame").append(startGame).on('click', function() {
        $(this).hide();
        $("#quiz").show();
        displayTest();
    });


    //function to display questions
    var displayTest = function() {
        // a for loop that pulls the response, creates a <p> element that is then appended to id:quiz
        for (let i = 9; i < response.results.length; i++) {
            var question = response.results[i];
            var qc = $("<p>").text(question.question);
            $("#quiz").append(qc);

            var incorrectAns = question.incorrect_answers;
            var correctAns = question.correct_answer;
            console.log('this is the var for this', correctAns);
            var randomArr = incorrectAns.concat(correctAns);
            var answerArr = randomChoices(randomArr);

            console.log('answerArr', answerArr);
            for (let j = 0; j < answerArr.length; j++) {
                // console.log("asdf")


                var radioButton = $('<button value = "randomChoices(answerArr[j])" > ' + randomChoices(answerArr[j]) + '</button>');
                console.log('THIs IS THE ANSWER', correctAns);
                $("#quiz").append(radioButton);



            }
            $("button").click(function(event) {

                var userResponse = event.target.innerHTML;
                answers.push(userResponse);
                console.log('userResponse', answers);

            })


        }
        return answerArr;
    }

    function gradeTest(userAnswers, test) {

        var correctAnswers = 0;
        /* 1st case  all answered
           get number of test questions length
           track number of right answers
           for each question 
               if userAnswer === the testQuestion.correct_answer, line 34 test is an array of objects with correct_answer property
                   give 1 point to correctAnswers 
         
        */
        return correctAnswers;
    }


    setTimeout(function() {
        /* Where you would do work for after 30 sec, remove / hide test questions, grade test, display results */
    }, 30000)


    setInterval(function() {
        /* Every one second update timer html 
          I need a counter that starts at 30 and counts down to 0
        */
    }, 1000)


    var correctAnswers = $('<div id "correctAnswers">' + '0' + '</div>');


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







});