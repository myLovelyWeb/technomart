var linkModalWriteUs = document.querySelector(".link-modal-write-us-js");
var modalWriteUS = document.querySelector(".modal-write-us");
var closeModalWriteUs = modalWriteUS.querySelector(".modal-close-btn");

linkModalWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUS.classList.add("modal--show");
});

closeModalWriteUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalWriteUS.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWriteUS.classList.contains("modal--show")) {
      evt.preventDefault();
      modalWriteUS.classList.remove("modal--show");
    }
  }
});