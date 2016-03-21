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
    // show hadouken and animate it to right of screen
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left':'1320px'},
      800,
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

  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

  function playMusic() {
    $('#music')[0].volume = 0.5;
    $('#music')[0].load();
    $('#music')[0].play();
  }
});
