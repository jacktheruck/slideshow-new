$(document).ready(function(){
  $('.slider').slick({
    accessibility: false,
    infinite: true,
    draggable: false,
    arrows: false,
    pauseOnHover: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    zIndex: 0,
  });
});


function animate() {
  document.querySelector('blockquotex').classList.toggle('animate');
}

document.addEventListener('click', animate);

setTimeout(animate, 1000);