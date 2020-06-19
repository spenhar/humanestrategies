(function() {

// THIS WAS MAKING THE WHOLE PAGE TAPPABLE
//   document.addEventListener('click', function(event) {
//     if (event.target.tagName !== 'A') {
//       window.location.reload();
//     }
//   });

  document.querySelector('.about-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    var about = document.querySelector('#about');
    this.innerHTML = about.classList.contains('visible') ? '?' : '&times;';
    about.classList.toggle('visible');
  });
}());