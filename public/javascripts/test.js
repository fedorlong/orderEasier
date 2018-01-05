;jQuery(function($) {

  // initialize subNav to hide status
  $('#subNav-introduce').hide();
  $('#subNav-lesson').hide();

  // click navItem to toggle subNav
  var btnIntro  = $('#introduce'),
      btnLesson = $('#lesson');

  btnIntro.on('click', function(e) {
    $('#subNav-introduce').slideToggle('fast');
  });

  btnLesson.on('click', function(e) {
    $('#subNav-lesson').slideToggle('fast');
  });

});
