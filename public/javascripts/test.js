;jQuery(function($) {
  var btnIntro = $('#introduce');

  // initialize subNav to hide status
  $('#subNav-introduce').hide();

  // click navItem to toggle subNav
  btnIntro.on('click', function(e) {
    $('#subNav-introduce').slideToggle();
  });
});
