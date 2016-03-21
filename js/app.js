$(document).ready(function(){
  $('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    // play hadouken sound
    // show hadouken and animate it to right of screen
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
  })
  .mouseup(function(){
    // ryu goes back to ready position
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});
