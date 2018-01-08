;jQuery(function($) {

  // handle banner pic slide
  slideHandler();

  // handle navigator and subNavigator interaction module
  navigatorAndSubNavHandler();

});

/***************************************************************/
/************* banner picture slide interaction ****************/
/***************************************************************/

function slideHandler() {
  $('.slideBox').unslider();
}


/***************************************************************/
/*********** navigator and subNavigator interaction ************/
/***************************************************************/

/**
 * navigator and subNavigator interaction handle module
 * @return {[type]} [description]
 */
function navigatorAndSubNavHandler() {
  // initialize subNav to hide status
  hideSubNavs();

  // navItem add clickEvent listener to toggle subNav
  var btnIntro  = $('#introduce'),
      btnLesson = $('#lesson');

  var subNavIntro  = $('#subNav-introduce'),
      subNavLesson = $('#subNav-lesson');

  navBtnListeningClick(btnIntro, subNavIntro, 'hideStatus');
  navBtnListeningClick(btnLesson, subNavLesson, 'hideStatus');

  // document area add clickEvent listener to hide subNav
  docListeningClick();
}


/**
 * hide subNavigators when initialize the page,
 * aim to give a slideDown effect when first show subNav
 * @return {[type]} [description]
 */
function hideSubNavs() {

  var subNavs = $('.subNav-item');

  for (var index=0; index < subNavs.length; index++) {
    subNavs.eq(index).slideUp('fast').addClass('hideStatus');
  }
}


/**
 * document(except subNavigators and navigatorItems) listening click event,
 * if click area out of subNavigators, hide subNavigators
 * @return {[type]} [description]
 */
function docListeningClick() {

  $(document).on('click', function(e) {

    var inSubNavArea   = false,
        inTabContainer = false;

    var _target = e.target;

    while(_target && _target !== document) {

      if ($(_target).hasClass('subNav-item')) { inSubNavArea = true; }
      if ($(_target).hasClass('tab-container')) { inTabContainer = true; }

      _target = _target.parentNode;
    }

    if (!inSubNavArea && !inTabContainer) {
      hideSubNavs();
    }

  });
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

    var _target = e.target;

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
