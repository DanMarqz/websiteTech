window.onload = function(){
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
  });

  var scrvl = ScrollReveal();
  scrvl.reveal('.showcase');
  scrvl.reveal('.news-cards', {delay:500});
  scrvl.reveal('.cards-banner-one', {delay:500});
  scrvl.reveal('.cards-banner-two', {delay:500});
}
