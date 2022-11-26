// Slider
let slideIndex = 1;

showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

const myInterval = setInterval(function(){
    showSlides(slideIndex ++);
}, 4000);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-show");
    let lenghtSlides = slides.length;
    if (n >= lenghtSlides) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = lenghtSlides
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
        slides[slideIndex - 1].style.display = "block";
   
}
    
function changeImg(index) {
    const sourceImg = index.src;
    console.log(sourceImg)
    const newImg = index.closest('.product-item').querySelector('.product-img > a > img');
    newImg.src = sourceImg;
}


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



