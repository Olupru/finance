
function slideOne() {
let slideIndex = 0;
showSlides();

function showSlides() {
    let i ;
    let slides = document.getElementsByClassName("testimonial");
    let dots = document.getElementsByClassName("round");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[slideIndex-1].style.display = "flex"
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);
}

}

slideOne()



let slideIndex = 1;
showSlider(slideIndex);

function plusSlides(n) {
    showSlider(slideIndex += n);

}

function currentSlide(n) {
    showSlider(slideIndex = n);
}

function showSlider(n) {
    let i;
    let slides = document.getElementsByClassName("slid")
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

.sr.reveal(`.section-text`)
.sr.reveal(`.img`, {delay: 700, origin: 'bottom'})
.sr.reveal(`.image, .text-part, .section-three`, {interval: 100})
.sr.reveal(`.`)
