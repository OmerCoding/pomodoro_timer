function add_zero(min) {
  if (min < 10 && min >= 0) {
    if (work) {
      $('#min').prepend("0");
    }
    if (!work && !rest_start) {
      $('#min').prepend("0");
    }
  }

};

function w_add_zero(min) {
  if (min < 10 && min > 0) {
    $('#work').prepend("0");
  }
};

function r_add_zero(min) {
  if (min < 10 && min > 0) {
    $('#rest').prepend("0");
  }
};

var inter;
var work = true;
var on = false;
var rest_start = true;

$(document).ready(function(){
  var min = $('#work').html();
  $('#min').html(min);
  $('#sec').html("00");
  $('#rest').prepend('0');
});

$(document).on("click", ".start_but", function(){
  on = true;
  var min = $('#min').html();
  var sec = $('#sec').html();
  $(this).find('img').toggle();
  $(this).addClass("stop_but");
  $(this).removeClass("start_but");
  inter = setInterval(function(){
    if (sec == 0) {
      if (min == 0){
        alert("You've FINISHED the session!");
        on = false;
        work = !work;
        clearInterval(inter);
        sec = 1;
        if (work){
          min = $('#work').html();
        } else {
          min = $('#rest').html();
        }
        $('.stop_but').find('img').toggle();
        $('.stop_but').addClass("start_but");
        $('.stop_but').removeClass("stop_but");
      }
      else {
      sec = 60;
      min--;
      }
    }
  $('#sec').html(--sec);
  if (sec < 10) {
    $('#sec').prepend("0");
  }
  $('#min').html(min);
  add_zero(min);
  }, 1000);
});

$(document).on("click", ".stop_but", function(){
  clearInterval(inter);
  $(this).find('img').toggle();
  $(this).addClass("start_but");
  $(this).removeClass("stop_but");
});

$(document).on("click", ".reset", function(){
  clearInterval(inter);
  if (on) {
    on = false;
    $('.stop_but').find('img').toggle();
    $(".stop_but").addClass("start_but");
    $(".start_but").removeClass("stop_but");
    $('#sec').html("00");
    if (work) {
      $('#min').html($('#work').html());
    } else {
      $('#min').html($('#rest').html());
    }
  }
});

$(document).on("click", "#up_arr1", function(){
  var min_value = $('#work').html();
  min_value++;
  $('#work').html(min_value);
  w_add_zero(min_value);
  if (!on && work) {
    $('#min').html(min_value);
    add_zero(min_value);
  }
});

$(document).on("click", "#down_arr1", function(){
  var min_value = $('#work').html();
  if (min_value > 1){
    min_value--;
    $('#work').html(min_value);
    w_add_zero(min_value);
    if (!on && work) {
      $('#min').html(min_value);
      add_zero(min_value);
    }
  }
});

$(document).on("click", "#up_arr2", function(){
  rest_start = false;
  var min_value = $('#rest').html();
  min_value++;
  $('#rest').html(min_value);
  r_add_zero(min_value);
  if (!on && !work) {
    $('#min').html(min_value);
    add_zero(min_value);
  }
});

$(document).on("click", "#down_arr2", function(){
  rest_start = false;
  var min_value = $('#rest').html();
  if (min_value > 1){
    min_value--;
    hit_1 = false;
    $('#rest').html(min_value);
    r_add_zero(min_value);
    if (!on && !work) {
      $('#min').html(min_value);
      add_zero(min_value);
    }
  }
});
