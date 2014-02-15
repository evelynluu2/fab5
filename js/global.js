var $radioButtons, //Obtain all the radio input from the Quiz
    $answers = [], //Obtain all the value of radio input
    $counts = [], //Represent the counts for each major
    $highestCount = 0, //The highest count
    $finalMajor; //The major with highest count

    //Define Majors w/ corresponding counts
    $counts.CSE = 0;
    $counts.CS = 0;
    $counts.BIM = 0;
    $counts.INF = 0;
    $counts.SE = 0;
    $counts.CGS = 0;

  //When user submits the quiz
  $("#quizForm").submit(function(event) {

    //Clear all answers
    $answers = [];

    //Obtain all radio buttons
    $radioButtons = $("input[type='radio']");

    //Iterate through all the answers
    $.each($radioButtons, function(k,v) {

      //Make sure to choose only checked answers
      if(v.checked){

        //Add all checked answers to array
        $answers.push(v.value);
      }
    });


    //Iterate through each checked answers to increase counts accordingly by each majors
    $.each($answers, function(k,v) {

      if(v.search('CSE') >= 0){
        $counts.CSE++;
      }

      if(v.search(/CS\b/g) >= 0){
        $counts.CS++;
      }

      if(v.search('BIM') >= 0){
        $counts.BIM++;
      }

      if(v.search('INF') >= 0){
        $counts.INF++;
      }

      if(v.search(/^SE\b/g) >= 0){
        $counts.SE++;
      }

      if(v.search('CGS') >= 0){
        $counts.CGS++;
      }

    });

    //Obtain the major with highest count
    for(var k in $counts){
      if($counts[k] > $highestCount){
        $highestCount = $counts[k];
        $finalMajor = k;
      }
      console.log(k + ' : ' + $counts[k]);
    }

    console.log($finalMajor);

    event.preventDefault();
  });

