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
 * hide subNavigators when initialize the page,
 * aim to give a slideDown effect when first show subNav
 * @return {*} [description]
 */
function hideSubNavs() {
  $('#subNav-introduce').hide();
  $('#subNav-lesson').hide();
}


/**
 * navigator item listening click event,
 * item`s subNav toggle when item clicked
 * @param  {jQuery object} btn       the navigator item
 * @param  {jQuery object} subNav    the subNav related to item
 * @param  {string} flagClass        the class record hideStatus
 * @return {[type]}           [description]
 */
function navBtnListeningClick(btn, subNav, flagClass) {

  btn.on('click', function(e) {

    hideOtherSubNav(subNav, flagClass);

    if (subNav.hasClass(flagClass)) {
      subNav.removeClass(flagClass).slideDown('fast');

    } else {
      subNav.slideUp('fast').addClass(flagClass);
    }
  });
}

/**
 * hide other subNavigators before click current btn
 * @param  {jQuery object} currentSubNav [description]
 * @param  {string} flagClass     the class record hideStatus
 * @return {[type]}               [description]
 */
function hideOtherSubNav(currentSubNav, flagClass) {
  var subNavs = $('.subNav-item');

  for (var index=0; index < subNavs.length; index++) {

    // skip self
    if (subNavs[index] === currentSubNav[0]) { continue; }

    if (!subNavs.eq(index).hasClass(flagClass)) {
      subNavs.eq(index).slideUp('fast').addClass(flagClass);
    }
  }

}
