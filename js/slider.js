let deliveryButton = document.querySelector(".delivery-button");
let geranteeButton = document.querySelector(".gerantee-button");
let creditButton = document.querySelector(".credit-button");
let slideDelivery = document.querySelector('.slide-wrapper-delivery');
let slideGarentee = document.querySelector(".slide-wrapper-garentee");
let slideCredit = document.querySelector(".slide-wrapper-credit");

deliveryButton.addEventListener("click",function(){
  console.log("hello");
  this.classList.add("control_current");
  geranteeButton.classList.remove("control_current");
  creditButton.classList.remove("control_current");
  slideDelivery.classList.add('show-slide');
  slideGarentee.classList.remove('show-slide');
  slideCredit.classList.remove('show-slide');
})

geranteeButton.addEventListener("click",function(){
  this.classList.add("control_current");
  deliveryButton.classList.remove("control_current");
  creditButton.classList.remove("control_current");
  slideDelivery.classList.remove('show-slide');
  slideGarentee.classList.add('show-slide');
  slideCredit.classList.remove('show-slide');
})

creditButton.addEventListener("click",function(){
  this.classList.add("control_current");
  geranteeButton.classList.remove("control_current");
  deliveryButton.classList.remove("control_current");
  slideDelivery.classList.remove('show-slide');
  slideGarentee.classList.remove('show-slide');
  slideCredit.classList.add('show-slide');
})

