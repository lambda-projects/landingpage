class Carousel {
  constructor(carousel) {
      this.carousel = carousel;
      this.btnPrev = this.carousel.querySelector('.prev');
      this.btnPrev.addEventListener('click', this.prev.bind(this));
      this.btnNext = this.carousel.querySelector('.next');
      this.btnNext.addEventListener('click', this.next.bind(this));
      this.images = this.carousel.querySelectorAll('img');
      this.index = 0;
      this.images[this.index].classList.add('img-active');
  }

  prev() {
      this.images[this.index].classList.remove('img-active');
      this.index - 1 < 0 ?
          this.index = this.images.length -1 :
          this.index--;
      this.images[this.index].classList.add('img-active');
  }
  next() {
      this.images[this.index].classList.remove('img-active');
      this.index + 1 >= this.images.length ?
          this.index = 0 :
          this.index++;
      this.images[this.index].classList.add('img-active');
  }
}

let carousel = new Carousel(document.querySelector('.carousel-wrap'));