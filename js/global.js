var $radioButtons, //Obtain all the radio input from the Quiz
    $answers = [], //Obtain all the value of radio input
    $counts = [], //Represent the counts for each major
    $highestCount = 0, //The highest count
    $finalMajor, //The major with highest count
    $total = 0; //The total amount of counts

    //Define Majors w/ corresponding counts
    $counts.CSE = 0;
    $counts.CS = 0;
    $counts.BIM = 0;
    $counts.INF = 0;
    $counts.SE = 0;
    $counts.CGS = 0;


var $resultContainer = $('.resultContainer');


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
        $total++;
      }

      if(v.search(/CS\b/g) >= 0){
        $counts.CS++;
        $total++;
      }

      if(v.search('BIM') >= 0){
        $counts.BIM++;
        $total++;
      }

      if(v.search('INF') >= 0){
        $counts.INF++;
        $total++;
      }

      if(v.search(/\bSE\b/g) >= 0){
        $counts.SE++;
        $total++;
      }

      if(v.search('CGS') >= 0){
        $counts.CGS++;
        $total++;
      }

    });

    //Obtain the major with highest count
    for(var k in $counts){

      if($counts[k] > $highestCount){
        $highestCount = parseInt($counts[k]);
        $finalMajor = k;
      }

    }

    for(var j in $counts){

      var percentage = ((parseInt($counts[j]) / $total) * 100).toFixed(2);

      var major = "";

      if(j == "CS")
        major = "Computer Science";
      else if(j == "CGS")
        major = "Computer Game Science";
      else if(j == "SE")
        major = "Software Engineer";
      else if(j == "INF")
        major = "Informatics";
      else if(j == "CSE")
        major = "Computer Science and Engineering";
      else if(j == "BIM")
        major = "Business Information Management";


      if($highestCount === parseInt($counts[j]))
        $('.result').append("<li class='standOut'>" + major + " : " + percentage + " %");
      else
        $('.result').append("<li>" + major + " : " + percentage + " %");

    }


    //Display the final major by fading the quiz.
    $('#quizForm').fadeOut(150);

    $resultContainer.animate({
      opacity: 1
    },500);


    console.log($finalMajor);

    event.preventDefault();
  });


// ---------------------------
// Hover over description
// ---------------------------


var $description = $('.description');

$description.hover(
  function(){
    $(this).animate({
      opacity: 1
    },200);
  },

  function(){
    $(this).animate({
      opacity: 0.3
    },200);
  }
);

