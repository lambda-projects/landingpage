// Carousels
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

let carousels = Array.from(document.querySelectorAll('.carousel-wrap'));
carousels.map(crsl => new Carousel(crsl));




// Jump Links
class JumpNav {
    constructor(jumpNav) {
        this.jumpNav = jumpNav;
        this.jumpLinks = jumpNav.querySelectorAll('.jump');
        this.jumpLinks.forEach(link => new JumpLink(link));
    }
}
class JumpLink {
    constructor(jumpLink) {
        this.jumpLink = jumpLink;
        this.jumpLink.addEventListener('click', this.jump.bind(this));
    }
    jump() {
        console.log('clicked');
        element.scrollIntoView();
    }
}

let jumpLinks = document.querySelector('.nav-page');
jumpLinks = new JumpNav(jumpLinks);

// var elmnt = document.getElementById("content");
// elmnt.scrollIntoView();