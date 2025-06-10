const accordion = document.getElementsByClassName('opened__container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function (e) {
    this.classList.toggle('active');
    e.stopPropagation();
  })
}
