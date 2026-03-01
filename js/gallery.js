document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.querySelector(".close-modal");

  document.querySelectorAll(".carousel-img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

});