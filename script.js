window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
