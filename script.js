document.addEventListener("scroll", function () {
  var sections = document.querySelectorAll(".slide");
  var navLinks = document.querySelectorAll(".navBar a");

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (
      window.pageYOffset >= sectionTop - sectionHeight / 2 &&
      window.pageYOffset < sectionTop + sectionHeight / 2
    ) {
      var targetLink = document.querySelector(`a[href="#${section.id}"]`);
      navLinks.forEach(function (navLink) {
        navLink.querySelector("h2").style.color = "#626262";
      });
      targetLink.querySelector("h2").style.color = "white";
    }
  });
});
