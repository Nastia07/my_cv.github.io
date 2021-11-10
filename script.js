window.addEventListener('DOMContentLoaded', function () {
  //burger
  let burger = document.querySelector('.burger'),
    menu_overlay = document.querySelector('.menu_overlay'),
    menu_close = document.querySelector('.menu_overlay__close');

  function showMenu() {
    menu_overlay.classList.add('open', 'fade');
  }
  function hideMenu() {
    menu_overlay.classList.remove('open', 'fide');
  }
  burger.addEventListener('click', function (event) {
    showMenu();
  });

  menu_close.addEventListener('click', function (event) {
    hideMenu();
  });

  mybutton = document.getElementById("myBtn");

  // to top

  let to_top = document.getElementById("to_top");
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      to_top.style.display = "block";
    } else {
      to_top.style.display = "none";
    }
  }

  to_top.addEventListener('click', function (event) {
    topFunction();
  });

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
})
