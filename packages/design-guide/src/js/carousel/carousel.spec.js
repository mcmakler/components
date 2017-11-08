import Carousel from './carousel';

const emptyElement = document.createElement('div');
emptyElement.classList.add('carousel');

const properElement = document.createElement('div');
properElement.classList.add('carousel');

const properElementNext = document.createElement('div');
properElementNext.classList.add('carousel__navigation_next');
properElement.appendChild(properElementNext);

const properElementPrev = document.createElement('div');
properElementPrev.classList.add('carousel__navigation_prev');
properElement.appendChild(properElementPrev);

describe('Carousel Tests', () => {
  test('Should construct', () => {
    const carousel = new Carousel({ element: emptyElement });
    expect(carousel).toBeDefined();
  });

  test('Should gracefully fail when no navigation present', () => {
    const carousel = () => new Carousel({ element: emptyElement }).init();
    expect(carousel).toThrow(/No next\/previous/);
  });

  test('Should add event listeners to navigation', () => {
    const carousel = new Carousel({ element: properElement }).init();
    expect(carousel).toBeDefined();
  });

  test('Should properly fail when a container of items is not available', () => {
    const carousel = new Carousel({ element: properElement }).init();
    expect(() => carousel.goNext()).toThrow(/No container/);
    expect(() => carousel.goPrev()).toThrow(/No container/);
  });

  test('Should navigate next', () => {
    const properElementContainer = document.createElement('div');
    properElementContainer.classList.add('carousel__items');
    properElement.appendChild(properElementContainer);

    const carousel = new Carousel({ element: properElement }).init();
    expect(carousel.goNext()).toEqual(true);
  });

  test('Should navigate previous', () => {
    const properElementContainer = document.createElement('div');
    properElementContainer.classList.add('carousel__items');
    properElement.appendChild(properElementContainer);

    const carousel = new Carousel({ element: properElement }).init();
    expect(carousel.goPrev()).toEqual(true);
  });
});
