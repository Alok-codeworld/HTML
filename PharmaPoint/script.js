
function searchItems(event) {
  event.preventDefault(); // stop page reload

  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h5").innerText.toLowerCase();

    if (title.includes(input)) {
      card.parentElement.style.display = "block"; // show
    } else {
      card.parentElement.style.display = "none"; // hide
    }
  });
}
