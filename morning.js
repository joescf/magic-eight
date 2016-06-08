
$(document).ready(function(){

  $('button').on("click", function() {
    console.log('hello')
    $('img').removeClass();
    setTimeout(function(){$('img').addClass('animated zoomIn')}, 1
    );
  });
});
