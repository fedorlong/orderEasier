;jQuery(function() {

  // handle banner pic slide
  slideHandler();

  // handle navigator and subNavigator interaction module
  navigatorAndSubNavHandler();

  // handle video-item clicked, video popup and autoplay
  videoHandler();

});

/***************************************************************/
/************* banner picture slide interaction ****************/
/***************************************************************/

function slideHandler() {
  $('.banner').unslider({
    arrows: false,
    fluid: true,
    dots: true
  });
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
  var btnProdIntro  = $('#prod-intro'),
      btnLesson     = $('#prod-lesson'),
      btnTeamIntro  = $('#team-intro');

  var subNavProdIntro  = $('#prodIntroduce-subNav'),
      subNavLesson = $('#subNav-lesson'),
      subNavTeamIntro  = $('#teamIntroduce-subNav');

  navBtnListeningClick(btnProdIntro, subNavProdIntro, 'hideStatus');
  navBtnListeningClick(btnLesson, subNavLesson, 'hideStatus');
  navBtnListeningClick(btnTeamIntro, subNavTeamIntro, 'hideStatus');

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

    var inSubNavArea  = false,
        inExceptItems = false;

    var _target = e.target;

    while(_target && _target !== document) {

      if ($(_target).hasClass('subNav-item')) { inSubNavArea = true; }
      if ($(_target).hasClass('except')) { inExceptItems = true; }

      _target = _target.parentNode;
    }

    if (!inSubNavArea && !inExceptItems) {
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

/***************************************************************/
/*********** handle video item clicked interaction  ************/
/***************************************************************/

/**
 * add click eventListener for video-item, show video popup and disableScroll
 * @return {[type]} [description]
 */
function videoHandler() {
  var body = $('body')[0];
  var popupGray = $('.popup-gray');

  $('.video-item').on('click', function(e) {
    if (popupGray.hasClass('display') && popupGray.css('display') !== 'block'
        || !popupGray || !popupGray.hasClass('display')) {

      popupGray.show();
      disableScroll(body);

      videoAreaListeningMouseMove();
      popupGrayListeningClick(body, popupGray);
      closeBtnListeningClick(body, popupGray);
    }
  });
}


/**
 * video title show when mousemove, hide after few seconds
 * @return {[type]} [description]
 */
function videoAreaListeningMouseMove() {
  var timerId = -1;

  var video = $('.popup-video');
  var videoTitle = $('.video-tt');

  hideTitleAfterSeconds(1000);

  video.on('mousemove', function(e) {
    videoTitle.fadeIn();
    hideTitleAfterSeconds(2750);
  });

  function hideTitleAfterSeconds(delay) {
    if (!!timerId) { clearTimeout(timerId); }
    timerId = setTimeout(function() {
      videoTitle.fadeOut();
    }, delay);
  }

}

/**
 * popup hiding handler
 * @param  {dom} body      enable body scroll after hide popup
 * @param  {jQuery object} popupGray the popup module
 * @return {[type]}           [description]
 */
function popupGrayListeningClick(body, popupGray) {
  if (popupGray && popupGray.css('display') === 'block') {

    popupGray.on('click', function(e) {

      var inGrayArea = false;
      var _target = e.target;

      while(_target && _target !== $('.popup-video')[0]) {

        if ($(_target).hasClass('popup-gray')) { inGrayArea = true; }

        _target = _target.parentNode;
      }

      if (inGrayArea) {
        popupGray.hide();
        enableScroll(body);
      }
    });
  }
}

function closeBtnListeningClick(body, popupGray) {
  var closeBtn = $('.close-btn');

  closeBtn.on('click', function() {
    popupGray.hide();
    enableScroll(body);
  });
}
