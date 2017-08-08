$('#collapse-navbar').on('show.bs.collapse', function() {
  $('aside').css('transform', 'translateY(3%');
    $('.hobbies').addClass('hobbies-hide');

});

$('#collapse-navbar').on('hide.bs.collapse', function() {
  $('aside').css('transform', 'translateY(-50%');
  $('.hobbies').removeClass('hobbies-hide');
});