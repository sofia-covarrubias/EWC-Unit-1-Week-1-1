class Slider {
  constructor({
    sliderSelector = '.slider',
    sliderContainerSelector = '.slider__container',
    previousSelector = '.previous',
    nextSelector = '.next',
    transitionTime = 3000,
  } = {}) {
    this.slider = document.querySelector(sliderSelector);
    this.slides = document.querySelectorAll('${sliderContainerSelector} img').length;
    this.sliderContainer = document.querySelector(sliderContainerSelector);
    this.previousBtn = document.querySelector(previousSelector);
    this.nextBtn = document.querySelector(nextSelector);
    this.slideSize = this.slider.offsetWidth;
    this.currentSlide = 0;

    this.setEventListeners();
  }

  moveSlides() {
    this.sliderContainer.style.transform = 'translateX(-${this.currentSlide * this.slideSize}px)';
  }

  nextSlide() {
    this.currentSlide = this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1;
    this.moveSlides();
  }

  previousSlide() { 
    this.currentSlide = this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
    this.moveSlides(); 
  }

  setEventListeners() {
    this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
    this.previousBtn.addEventListener('click', this.previousSlide.bind(this));
  }

}