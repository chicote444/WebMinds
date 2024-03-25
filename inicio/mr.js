document.addEventListener("DOMContentLoaded", function() {
    // Ativa o carrossel Bootstrap
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, // tempo em milissegundos entre os slides
      wrap: true // permite que o carrossel volte para o primeiro slide após o último
    });
  });
  