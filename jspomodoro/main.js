var inter;

$(document).ready(function(){
  var min = $('#work').html();
  $('#min').html(min);
  $('#sec').html("0");
});

$(document).on("click", ".buttoms", function(){
  var on = false;
  var min = $('#min').html();
  var sec = $('#sec').html();
  $('.buttoms').html("stop");
  $(this).addClass("stop_but");
  $(this).removeClass("buttoms");
  inter = setInterval(function(){
    if (sec == 0) {
      if (min == 0){
        clearInterval(inter);
        on = true;
        sec = 1;
        min = $('#rest').html();
        $('.stop_but').html("start_again");
      }
      else {
      sec = 5;
      min--;
      }
    }
  $('#sec').html(--sec);
  $('#min').html(min);
  }, 1000);
  $(this).addClass("buttoms");
  $(this).removeClass("stop_but");
});

$(document).on("click", ".stop_but", function(){
  clearInterval(inter);
  $('.stop_but').html("start");
  $(this).addClass("buttoms");
  $(this).removeClass("stop_but");
});
