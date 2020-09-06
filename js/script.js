// modal-links
const modalLinkFirst = document.querySelector(".modal__first__link");
const modalLinkSecond = document.querySelector(".modal__second__link");
const modalLinkThird = document.querySelector(".modal__third__link");
const modalLinkFourth = document.querySelector(".modal__fourth__link");
const modalLinkFifth = document.querySelector(".modal__fifth__link");

// modal-wrappers
const modalWrapperFirst = document.querySelector(".modal__wrapper_first");
const modalWrapperSecond = document.querySelector(".modal__wrapper_second");
const modalWrapperThird = document.querySelector(".modal__wrapper_third");
const modalWrapperFourth = document.querySelector(".modal__wrapper_fourth");
const modalWrapperFifth = document.querySelector(".modal__wrapper_fifth");

//modal-show-events
modalLinkFirst.onmouseenter = (e) => {
  e.preventDefault();
  modalWrapperFirst.classList.remove("hide");
};

modalLinkSecond.onmouseenter = (e) => {
  e.preventDefault();
  modalWrapperSecond.classList.remove("hide");
};

modalLinkThird.onmouseenter = (e) => {
  e.preventDefault();
  modalWrapperThird.classList.remove("hide");
};

modalLinkFourth.onmouseenter = (e) => {
  e.preventDefault();
  modalWrapperFourth.classList.remove("hide");
};

modalLinkFifth.onmouseenter = (e) => {
  e.preventDefault();
  modalWrapperFifth.classList.remove("hide");
};

// close-wrapper-functon
function closeWrapper() {
  let closeButtons = document.querySelectorAll(".modal__close__btn");
  closeButtons.forEach((item) => {
    //console.log(item);
    item.onclick = () => {
      let modalWrappers = document.querySelectorAll(".modal__wrapper");
      modalWrappers.forEach((item) => {
        item.classList.add("hide");
      });
    };
  });
}
closeWrapper();
