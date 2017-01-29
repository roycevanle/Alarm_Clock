if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'testing': function() {
      // $('#tpsreport').animate({bottom: '-100px'});
      alert("testing");
    }
  };

  annyang.innit(commands);

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
