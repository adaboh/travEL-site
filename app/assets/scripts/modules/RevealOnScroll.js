import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
  constructor(els, threeholdPercent) {
    this.threeholdPercent = threeholdPercent
    this.itemsToReveal = els
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle)
    window.addEventListener('resize', debounce(() => {
      console.log('resized here ')
      this.browserHeight = window.innerHeight
    }, 334))
  }
  /// method 
  calcCaller() {
    console.log('scroll function run')
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }


  // this is a method n it is called in events funtion 
  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log('Element was calculated')
      let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
      if (scrollPercent < this.threeholdPercent) {
        el.classList.add('reveal-item--is-visible')
        el.isRevealed = true
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle)
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add('reveal-item')
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
  }

}


export default RevealOnScroll