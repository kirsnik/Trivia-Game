var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";

$.ajax({ /*   */
    url: queryURL,
    /*   */
    method: "GET" /*   */

}).then(function (response) { /*   */
    console.log('response', response); /*   */

    // array to store user answer
    var answers = [];

    // onclick start game
    var startGame = $("<button>", {
        id: "start",
        text: "Start"
    });
    $("#startGame").append(startGame).on('click', function () {
        $(this).hide();
        $("#quiz").show();
        displayTest();
    });


    //function to display questions
    function displayTest() {
        // a for loop that pulls the response, creates a <p> element that is then appended to id:quiz
        for (let i = 9; i < response.results.length; i++) {
            var question = response.results[i];
            var questDiv = $("<div>")
            $(questDiv).attr('id', 'quest');
            var qc = $("<p>" + "<br>").text(question.question);
            $(questDiv).append(qc);
            $("#quiz").append(questDiv);

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
                $(questDiv).append(radioButton);



            }

            $(questDiv).one("click", "button", function (event) {

                var userResponse = event.target.innerHTML;
                answers.push(userResponse);
                if(typeof userResponse !== 'undefined') {

                    gradeTest(userResponse, correctAns);
                
                    console.log('figure the grade', gradeTest(userResponse, correctAns));
                    
                }

            });

            function gradeTest(user1, test) {
                if (parseInt(user1) === test){
                    alert("Did it");
                }
    

            }
        }
    }








    // function setTimeout() {
    //     /* Where you would do work for after 30 sec, remove / hide test questions, grade test, display results */

    // }
    // 30000;


    // DisplayTimer(function () {

    // }, 1000)





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