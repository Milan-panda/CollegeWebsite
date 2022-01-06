window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("desktop-logo-img").style.width = "225px";
  } else {
    document.getElementById("desktop-logo-img").style.width = "280px";
  }
}

AOS.init({
  duration:1000,
  disable: 'mobile',
});