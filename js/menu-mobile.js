$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});


var tamanho= $(window).width();
$( window ).resize(function() {
  tamanho= $(window).width();
  if(tamanho > 768  ){
   $('aside').css('transform', 'translateY(0%');
 }
 if(tamanho < 768){
   $('aside').css('transform', 'translateY(-50%');
 }
})

$('#collapse-navbar').on('show.bs.collapse', function() {
  if(tamanho < 768 ){
    $('aside').css('transform', 'translateY(12%');
    $('.secao-hobbies').addClass('hobbies-hide');
  }

});

$('#collapse-navbar').on('hide.bs.collapse', function() {
  if(tamanho < 768 ){
    $('aside').css('transform', 'translateY(-50%');
    $('.secao-hobbies').removeClass('hobbies-hide');
  }
});

$( document ).scroll(function() {
  $('.navbar-collapse').removeClass('in');
  $('aside').css('transform', 'translateY(-50%');
  $('.secao-hobbies').removeClass('hobbies-hide');
  $('.mobile-btn').removeClass('active');
});     

//$('.navbar-collapse').removeClass('in');