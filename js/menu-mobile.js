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

  $('aside').css('transform', 'translateY(2%');
    $('.secao-hobbies').addClass('hobbies-hide');
 }

});

$('#collapse-navbar').on('hide.bs.collapse', function() {
    if(tamanho < 768 ){
      $('html').scroll(function(){
        $('.mobile-menu').toggleClass('active');
      });
  $('aside').css('transform', 'translateY(-50%');
  $('.secao-hobbies').removeClass('hobbies-hide');
}
});

