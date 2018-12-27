var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";

$.ajax({ /*   */
    url: queryURL,
    /*   */
    method: "GET" /*   */

}).then(function (response) { /*   */
    console.log('response', response); /*   */

    // console.log(response.results[0].question, response.results[0].incorrect_answers + "," + response.results[0].correct_answer,"this is questions")

    var questionGame = response.results[0].question;

    for (var i = 0; i < response.results.length; i++){
        console.log('results', response.results[i]);
        console.log('i', );
        
        qc = $("<p>").text(response.results[i].question);
        
         $("#quiz").append(qc);



    }

    // console.log('questionGame', questionGame);
    // var qg = $("<p>").text(questionGame);
    // $("#quiz").prepend(qg);

    function randomChoices(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
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


    var questionChoice = [" "];
    questionChoice.push([response.results[0].correct_answer] + [response.results[0].incorrect_answers]);
    console.log('combo1', response.results[0].correct_answer);
    console.log('combo2', response.results[0].incorrect_answers);
    console.log('first var', questionChoice);
    questionChoice = randomChoices(questionChoice);
    console.log('questionChoice random', questionChoice);
    $("#quiz").append(qc);

    // var correctAns = response.results[0].correct_answer;
    // var incorrectAns = response.results[0].incorrect_answers;
    // var gameChoices = correctAns +","+ incorrectAns;
    // console.log('gameChoices', gameChoices);








    // var ourQuestions = respone.questions

    // console.log(ourQuestions[0].question, " number 2");    /*   */

    // var questionDiv = $("<div>");    /*   */
    // var p = $("<p>").text("QUESTIONS: " + ourQuestions[0].question);    /*   */

    // $(questionDiv).append(p);    /*   */
    // $("#quiz").append(questionDiv);    /*   */

    // var correct_answer = response.results[0].correct_answer;    /*   */
    // console.log('under corrects', response.results[0].correct_answer);    /*   */
    // var incorrect_answers = response.results[0].incorrect_answers;    /*   */
    // var answerGroup = [correct_answer , incorrect_answers];    /*   */




    // var answerGroup = answerGroup.concat(incorrect_answers);
    // console.log('answerGroup', answerGroup);


});