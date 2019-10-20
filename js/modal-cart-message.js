var linkModaCartMessage = document.querySelectorAll(".card__btn--buy");
var modaCartMessage = document.querySelector(".modal-cart-message");

linkModaCartMessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  modaCartMessage.classList.add("modal--show");
}); 