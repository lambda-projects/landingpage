class BtnGH {
  constructor(btn) {
    this.btn = btn;
    this.gh = this.btn.dataset.gh;
    this.url = `https://github.com/${this.gh}`;
    this.btn.addEventListener('click', this.redirect.bind(this));
  }
  redirect() {
    console.log('clicked');
    window.location.replace(this.url);
  }
}

let btnsGH = document.querySelectorAll('button.btn-gh');
btnsGH.forEach(btn => new BtnGH(btn));