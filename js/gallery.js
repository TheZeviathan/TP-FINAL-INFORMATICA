document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.querySelector("#mainCarousel");
  const bsCarousel = new bootstrap.Carousel(carousel);
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach(thumb => {

    thumb.addEventListener("click", function () {

      const index = this.getAttribute("data-index");
      bsCarousel.to(index);

      thumbs.forEach(t => t.classList.remove("active-thumb"));
      this.classList.add("active-thumb");

    });

  });

  carousel.addEventListener("slid.bs.carousel", function (event) {

    thumbs.forEach(t => t.classList.remove("active-thumb"));
    thumbs[event.to].classList.add("active-thumb");

  });

});