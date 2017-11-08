require('smoothscroll-polyfill').polyfill();

export default class Carousel {
  constructor({ element } = {}) {
    this.element = element;
    this.container = this.element.querySelector('.carousel__items');
    this.nextButton = this.element.querySelector('.carousel__navigation_next');
    this.prevButton = this.element.querySelector('.carousel__navigation_prev');
  }

  init() {
    if (!this.nextButton || !this.prevButton) {
      throw new Error('[CAROUSEL]: No next/previous button in the DOM!');
    }
    this.nextButton.addEventListener('click', () => this.goNext());
    this.prevButton.addEventListener('click', () => this.goPrev());
    return this;
  }

  goNext() {
    if (!this.container) {
      throw new Error('[CAROUSEL]: No container to scroll!');
    }

    this.container.scrollBy(this.container.offsetWidth, 0);
    return true;
  }

  goPrev() {
    if (!this.container) {
      throw new Error('[CAROUSEL]: No container to scroll!');
    }

    this.container.scrollBy(this.container.offsetWidth * -1, 0);
    return true;
  }
}
