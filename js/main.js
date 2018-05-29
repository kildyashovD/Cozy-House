var showModalButton = document.getElementById("showPetCard1");
var closeModalButton = document.getElementById("closePetCard1")
var modalItem1 = document.getElementById("petsModal1");
var modalWindow = document.getElementById("modalWindow");

showModalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("pets-modal--show");
});

closeModalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove("pets-modal--show");
});
