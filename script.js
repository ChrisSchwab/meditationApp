$(function() {

  //Clear's the minutes entered so you can re-enter it.
  $("input.clear").click(function() {
    event.preventDefault();
    $('.durationControl').val("");
    sessionStorage.clear()
  });

  //Loads the inputted amount 
  $("input.submit").click(function(event) {
    event.preventDefault();
    $focusPoint = $(".focusPoint select")
    setDisplay($focusPoint.val())
    console.log($focusPoint.val())
  });
});

$(function() {

  //Sets the duration the user input and checks for valid input, also only takes numbers
  $("input.set").click(function() {
    event.preventDefault();
    var duration = $('.durationControl').val();
    if (duration == 0) {
      alert("Please set the duration in minutes only.")
    } else {
      alert("Duration set for " + duration + " minute(s)");
      sessionStorage.setItem("duration", duration);
    }
  });

  //Displays the amount of time left since the countdown started
  function timeLeft(minutes, seconds) {
    var timer = document.getElementById("timer");
    var minutesDisplay = minutes + " minutes";
    var secondsDisplay = seconds + " seconds";
    //Outputs to screen
    timer.innerText = minutesDisplay + " : " + secondsDisplay;
  };

  //Countdown for Focus mode
  function countDown1() {
    var minutes = parseInt(sessionStorage.getItem("duration"));
    var audio = document.getElementById("evereternity");
    console.log(minutes);
    var seconds = 0;
    //Clears if left undefined
    if (typeof interval != "undefined") {
      clearInterval(interval);
    }
    interval = setInterval(function() {
      if (seconds == 0 && minutes == 0) { //Sets to 0
        clearInterval(interval);
        audio.pause(); //stops the music when the countdown reaches 0
      } else if (minutes > 60) {
        minutes = 60;
      } else if (seconds == 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      timeLeft(minutes, seconds);
      console.log(seconds);
    }, 1000)

    audio.play(); //plays the music when focus is pressed until timer reaches 0, it will loop after the track finishes (around 10min)
    
  };

  //Countdown for Meditation mode
  function countDown2() {
    var minutes = parseInt(sessionStorage.getItem("duration"));
    var audio = document.getElementById("flutemusic");
    console.log(minutes);
    var seconds = 0;
    //Clears if left undefined
    if (typeof interval != "undefined") {
      clearInterval(interval);
    }
    interval = setInterval(function() {
      if (seconds == 0 && minutes == 0) {
        clearInterval(interval);
        audio.pause(); //stops the music when the countdown reaches 0
      } else if (minutes > 60) {
        minutes = 60;
      } else if (seconds == 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      timeLeft(minutes, seconds);
      console.log(seconds);
    }, 1000)
    //plays the music when meditate is pressed until timer reaches 0, it will loop after the track finishes (around 10min)
    audio.play(); 
    
  };

  //Starts Focus when button is pressed
  $("input.start1").click(function(event) {
    event.preventDefault();
    countDown1();
  });
  
  //Starts Meditate when button is pressed
  $("input.start2").click(function(event) {
    event.preventDefault();
    countDown2();
  });
});
