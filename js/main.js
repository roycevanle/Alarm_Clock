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
    'love me': function() {
      alert("Senpai Noticed You");
    }};

  var commands2 = {
    'love': function() {
      alert("Senpai Noticed You");
    }, 
    'set alarm for 1800': function() {
      alert("Your alarm for 18:00 was set");
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);
  annyang.addCommands(commands2);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
