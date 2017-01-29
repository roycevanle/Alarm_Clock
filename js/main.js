function revealMessage() {
  document.getElementById("hiddenMessage").style.display = 'block';
}
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'testing': function() {
      // $('#tpsreport').animate({bottom: '-100px'});
      alert("testing");
    },
    // annyang will capture anything after a splat (*) and pass it to the function.
    // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
    'show me *tag': showFlickr,

    // A named variable is a one word variable, that can fit anywhere in your command.
    // e.g. saying "calculate October stats" will call calculateStats('October');
    'calculate :month stats': calculateStats,

    // By defining a part of the following command as optional, annyang will respond to both:
    // "say hello to my little friend" as well as "say hello friend"
    'say hello (to my little) friend': greeting
  };

  var showFlickr = function(tag) {
    var url = 'http://api.flickr.com/services/rest/?tags='+tag;
    $.getJSON(url);
  }

  var calculateStats = function(month) {
    $('#stats').text('Statistics for '+month);
  }

  var greeting = function() {
    document.getElementById("hiddenMessage").style.display = 'block';
  }

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
