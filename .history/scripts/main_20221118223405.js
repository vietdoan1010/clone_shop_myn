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


let productItems = document.getElementsByClassName("product-img");
var num = 0;

function next() {
  num++;
  if (num >= productItems.length) {
    num = 0;
  }
  productItems = productItems[num];
}

function next() {
  num--;
  if (num < 0) {
    num = productItems.length-1;
  }
  productItems = productItems[num];
}



