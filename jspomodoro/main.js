$(document).ready(function(){
  var min = $('#work').html();
  $('#min').html(min);
  $('#sec').html("0");
});

$(document).on("click", ".buttoms", function(){
  var min = $('#min').html() - 1;
  var sec = 10;
  var inter = setInterval(function(){
    $('#sec').html(--sec);
    $('#min').html(min);
    if (sec == 0) {
      if (min == 0){
        clearInterval(inter);
        var r_min = $('#rest').html();
        $('#min').html(r_min);
      }
      else {
      sec = 10;
      min--;
      }
    }
  }, 1000);
});
