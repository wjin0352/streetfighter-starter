$(document).ready(function(){
  // playMusic();
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    // play hadouken sound
    playHadouken();
    // show hadouken and animate it to right of screen
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left':'1320px'},
        500,
        // call back function
        function() {
          $(this).hide();
          $(this).css('left','520px');
        }
    );
  })
  .mouseup(function(){
    // ryu goes back to ready position
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  pressX();
  unPressX();

  // press x to look cool
  function pressX () {
    $(this).keydown(function(event) {
      if ( $('.ryu-still').is(':visible') && (event.which == 88)){
        $('.ryu-still').hide();
        $('.ryu-cool').show();
      } else if (event.which == 88) {
          console.log(event);
          // event.preventDefault();
          $('.ryu-ready').hide();
          $('.ryu-cool').show();
        };
    });
  }

  // press x to stop looking cool
  function unPressX () {
    $(this).keyup(function(event) {
      if ($('.ryu-cool').is(':visible') && (event.which == 88)){
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
      };
    });
  }

  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

  // play background music
  function playMusic() {
    $('#music')[0].volume = 0.5;
    $('#music')[0].load();
    $('#music')[0].play();
  }
});
