let icons = document.querySelectorAll("ul > .icon");
let formSubmitButton = document.querySelector(".button");
let frontSideCard = document.querySelector(".card[data-side='front']");
let backSideCard = document.querySelector(".card[data-side='back']");
let selectionElement = document.querySelector(".selection");

let currentActiveSelection = 0;

// Adds event listener to each icon and sets active class on click
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    removeActiveIconClass();
    icon.toggleAttribute("data-active");
    currentActiveSelection = icon.getAttribute("data-value");
  });
});
formSubmitButton.addEventListener("click", handleRatingSubmit);

// Removes active class from all icons
function removeActiveIconClass() {
  icons.forEach((icon) => icon.removeAttribute("data-active"));
}

// Flips the card over when submitted
function handleRatingSubmit(e) {
  e.preventDefault();
  selectionElement.textContent = currentActiveSelection;
  frontSideCard.classList.toggle("hidden");
  backSideCard.classList.toggle("hidden");
}
