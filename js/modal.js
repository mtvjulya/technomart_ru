let popup = document.querySelector(".modal");
let close = popup.querySelector(".modal__close-button");
let contactsButton = document.querySelector(".contacts__button");

contactsButton.addEventListener("click",function(){
  
  popup.classList.add("modal_visible");
})

close.addEventListener("click",function(){
  popup.classList.remove("modal_visible");
})