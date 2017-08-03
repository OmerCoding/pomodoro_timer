var inter;
var work = true;
var on = false;

$(document).ready(function(){
  var min = $('#work').html();
  $('#min').html(min);
  $('#sec').html("0");
});

$(document).on("click", ".start_but", function(){
  on = true;
  var min = $('#min').html();
  var sec = $('#sec').html();
  if (work == true && min == $('#work').html()){
    work = !work;
  } else if (work == false && min == $('#rest').html()){
    work = !work;
  }
  $('.start_but').html("stop");
  $(this).addClass("stop_but");
  $(this).removeClass("start_but");
  inter = setInterval(function(){
    if (sec == 0) {
      if (min == 0){
        on = false;
        clearInterval(inter);
        sec = 1;
        if (work){
          min = $('#work').html();
        } else {
          min = $('#rest').html();
        }
        $('.stop_but').html("start_again");
        $('.stop_but').addClass("start_but");
        $('.stop_but').removeClass("stop_but");
      }
      else {
      sec = 5;
      min--;
      }
    }
  $('#sec').html(--sec);
  $('#min').html(min);
  }, 1000);
});

$(document).on("click", ".stop_but", function(){
  clearInterval(inter);
  $('.stop_but').html("start");
  $(this).addClass("start_but");
  $(this).removeClass("stop_but");
});

$(document).on("click", ".reset", function(){
  clearInterval(inter);
  $('.stop_but, .start_but').html("start_again");
  $('#sec').html("0");
  if (on) {
    if (work) {
      $('#min').html($('#rest').html());
    } else {
      $('#min').html($('#work').html());
    }
  }
});

$(document).on("click", "#up", function(){
  var min_value = $('#work').html();
  min_value++;
  $('#work').html(min_value);
});

$(document).on("click", "#down", function(){
  var min_value = $('#work').html();
  min_value--;
  $('#work').html(min_value);
});

// look for problem in raise min -> start -> reset. work needed on when to use
// rest min and when to use work min
