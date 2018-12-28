var queryURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";

$.ajax({ /*   */
    url: queryURL,
    /*   */
    method: "GET" /*   */

}).then(function (response) { /*   */
    console.log('response', response); /*   */




    function scoreboard() {


        var correctPoint = 0;
        var incorrectPoint = 0;
        var unasweredPoint = 0;
        var timer = 30;

    }

    for (let i = 0; i < response.results.length; i++) {
        var qc = $("<p>").text(response.results[i].question);
        $("#quiz").append(qc);

        var incorrectAns = response.results[i].incorrect_answers;
        var correctAns = response.results[i].correct_answer;
        var randomArr = incorrectAns.concat(correctAns);
        var answerArr = randomChoices(randomArr);

        console.log('answerArr', answerArr);
        for (let j = 0; j < answerArr.length; j++) {
            // console.log("asdf")


            var radioButton = $('<button value=' + randomChoices(answerArr[j]) + '> ' + randomChoices(answerArr[j]) + '</button>');
            $("#quiz").append(radioButton);

           
        }
    }

    $( "button" ).click( function(){
        console.log(event.currentTarget.innerHTML);

        var number = parseInt($('#youranswerdiv').text());
          number+=1;
          $('#youranswerdiv').text(number);

      });


    


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