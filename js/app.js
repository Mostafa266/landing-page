
document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
  $('.menu-mobile').addClass('open');
});