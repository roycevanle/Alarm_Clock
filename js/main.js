function revealMessage() {
  document.getElementById("hiddenMessage").style.display = 'block';
}
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'testing': function() {
      // $('#tpsreport').animate({bottom: '-100px'});
      document.getElementById("hiddenMessage").style.display = 'block';
      //alert("testing");
    }};

  var commands2 = {
    'love you': function() {
      alert("Senpai Noticed You");
    },
    'what is the time': function() {
      alert("Time is ");
    }
  };

  var commands2 = {
    'love me': function() {
      responsiveVoice.speak("Senpai Noticed You");
    }, 
    'set alarm for 1800': function() {
      alert("Your alarm for 18:00 was set");
    },
    'set alarm for *time': function(time) {
      alert("Alarm set for " + time);
    },
    'the ischool is my school': function() {
      responsiveVoice.speak("The iSchool is our school! Whoooooohooooooo");
    },
    'what is the time': function() {
      var d = new Date();
      responsiveVoice.speak("Time is " + d.getHours() + ":" + d.getMinutes());
    },
    'My name is Ned': function() {
      responsiveVoice.speak("Fuck your shit Ned");
    },
    'My name is *Ben': function() {
      responsiveVoice.speak("Ben is the fucking shit");
    }
  };



  // Add our commands to annyang
  annyang.addCommands(commands);
  annyang.addCommands(commands2);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
