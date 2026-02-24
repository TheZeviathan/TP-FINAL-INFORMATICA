const cards = document.querySelectorAll(".card-game");
let firstCard = null;
let lock = false;

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (lock || card === firstCard || card.classList.contains("active")) return;

    card.classList.add("active");

    if (!firstCard) {
      firstCard = card;
    } else {
      if (firstCard.dataset.id === card.dataset.id) {
        firstCard = null;
      } else {
        lock = true;
        setTimeout(() => {
          firstCard.classList.remove("active");
          card.classList.remove("active");
          firstCard = null;
          lock = false;
        }, 1000);
      }
    }
  });
});
