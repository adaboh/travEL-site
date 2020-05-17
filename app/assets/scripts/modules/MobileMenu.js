class MobileMenu {
  constructor() {
    // DATA or variable
    this.menuIcon = document.querySelector('.site-header__menu-icon')
    this.menuContent = document.querySelector('.site-header__menu-content')
    this.siteHeader = document.querySelector('.site-header')
    this.events()
    // document.querySelector('.site-header__menu-icon').addEventListener('click', function () {
    //   console.log('this icon was clicked ... ')
    // })
  }
  // list any event that we are on the look for //EVENT METHOD 
  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu())
  }

  // TOGGLE METHOD 
  toggleMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible')
    this.siteHeader.classList.toggle('site-header--is-expanded')
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
  }
}

export default MobileMenu;