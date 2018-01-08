;jQuery(function($) {

  // initialize subNav to hide status
  hideSubNavs();



  // click navItem to toggle subNav
  var btnIntro  = $('#introduce'),
      btnLesson = $('#lesson');

  var subNavIntro  = $('#subNav-introduce'),
      subNavLesson = $('#subNav-lesson');

  navBtnListeningClick(btnIntro, subNavIntro, 'hideStatus');
  navBtnListeningClick(btnLesson, subNavLesson, 'hideStatus');

});

/**
 * hide subNavigators when initialize the page
 * @return {*} [description]
 */
function hideSubNavs() {
  $('#subNav-introduce').hide();
  $('#subNav-lesson').hide();
}


/**
 * navigator item listening click event, item`s subNav toggle when item clicked
 * @param  {jQuery object} btn       the navigator item
 * @param  {jQuery object} subNav    the subNav related to item
 * @param  {string} flagClass        the class record hideStatus
 * @return {[type]}           [description]
 */
function navBtnListeningClick(btn, subNav, flagClass) {

  btn.on('click', function(e) {

    if (subNav.hasClass(flagClass)) {
      subNav.removeClass(flagClass);
      subNav.slideDown('fast');

    } else {
      subNav.slideUp('fast');
      subNav.addClass(flagClass);
    }
  });
}
