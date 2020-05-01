document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {});

  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {});


  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, {});
});
