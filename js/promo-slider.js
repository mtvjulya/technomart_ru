let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let sliderControls = document.querySelectorAll(".slider-control");

let slideOneWrapper = document.querySelector(".promo__slide-one-wrapper");
let slideTwoWrapper = document.querySelector(".promo__slide-two-wrapper");

arrowLeft.addEventListener("click",function(){
  slideOneWrapper.classList.toggle("visually-hidden");
  slideTwoWrapper.classList.toggle("visually-hidden");
})

arrowRight.addEventListener("click",function(){
  slideOneWrapper.classList.toggle("visually-hidden");
  slideTwoWrapper.classList.toggle("visually-hidden");
})

for(let i=0;i<sliderControls.length;i++){
  sliderControls[i].addEventListener("click",function(e){
    // sliderControls[i].classList.remove("current-slide");
    // sliderControls[i][e.target.dataset.slide].classList.add('current-slide');
    // if(!this.classList.contains("current-slide")){
    //   this.classList.add("current-slide");
    // }else{
    //   this.classList.remove("current-slide");
    // }
    document.querySelector(".current-slide").classList.remove("current-slide");
    sliderControls[e.target.dataset.slide].classList.add('current-slide');
    slideOneWrapper.classList.toggle("visually-hidden");
  slideTwoWrapper.classList.toggle("visually-hidden");
  }) 
}
// sliderControls.forEach(clickControl);