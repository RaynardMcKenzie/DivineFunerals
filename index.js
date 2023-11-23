var wrapper = document.querySelector(".home_container");
// var sliderCont = document.querySelectorAll(".slider_container")
// var leftIcon = document.querySelector(".left_icon");
// var rightIcon = document.querySelector(".right_icon");


var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider_container");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
















































// sliderCont.forEach((slide, index) => {

//     leftIcon.addEventListener("click", () => {
//         //change the current slide
//         wrapper.style.transform = `translateX(${-100 * index}vw)` ;
//         console.log(index)
//     });
// });