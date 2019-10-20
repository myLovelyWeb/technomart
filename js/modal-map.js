var linkModalMap = document.querySelector(".link-modal-map-js");
var modalMap = document.querySelector(".modal-map");
var modalMapclose = modalMap.querySelector(".modal-close-btn");

linkModalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal--show");
});

modalMapclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal--show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal--show");
    }
  }
});