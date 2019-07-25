

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__close')) {
      navMain.classList.remove('main-nav__close');
      navMain.classList.add('main-nav__open');
      navToggle.classList.remove('page-header__toggle');
      navToggle.classList.add('page-header__toggle-close');
    } else {
      navMain.classList.add('main-nav__close');
      navMain.classList.remove('main-nav__open');
      navToggle.classList.add('page-header__toggle');
      navToggle.classList.remove('page-header__toggle-close');
    }
  });
