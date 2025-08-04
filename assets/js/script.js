window.addEventListener("scroll", function () {
  const elm = document.querySelector(".button__wrapper");
  const scroll = window.pageYOffset;
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  if (scroll >= maxHeight - 100) {
    elm.classList.remove("show");
  } else if (scroll > 100) {
    elm.classList.add("show");
  } else {
    elm.classList.remove("show");
  }
});