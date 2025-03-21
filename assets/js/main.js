window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  const darkmode = new Darkmode();
  darkmode.showWidget();
  
  var typed = new Typed('.first-typed', {
    strings: ["WordPress", "Portfolio" ,"Online Store" , "Creative"],
    typeSpeed: 50,
    fadeOut: true,
    backSpeed: 100,
    loop: true,
    showCursor: false,
  });

  function animateCounter(id, target) {
    let element = document.getElementById(id);
    let start = 0;
    let end = target;
    let duration = 2000; 
    let increment = end / (duration / 10);

    function updateCounter() {
        start += increment;
        if (start >= end) {
            element.innerText = end;
        } else {
            element.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}
   animateCounter("counter1", 700);
   animateCounter("counter2", 24);

