///////// Alterar Link Interno ///////////
document.addEventListener('DOMContentLoaded', function() {
    let linkOquee = document.getElementById('linkoquee');
    let linkComoSurgiu = document.getElementById('linkcomosurgiu');
    let linkJogadores = document.getElementById('linkjogadores');
    const link1 = "#oqueepc";
    const link2 = "#oquee";
    const link3 = "#comosurgiupc";
    const link4 = "#comosurgiu";
    const link5 = "#jogadorespc";
    const link6 = "#jogadores";

    function ajustarLink() {
        if (window.innerWidth >= 950) {
            linkOquee.setAttribute('href', link1);
            linkComoSurgiu.setAttribute('href', link3);
            linkJogadores.setAttribute('href', link5);
        } else {
            linkOquee.setAttribute('href', link2);
            linkComoSurgiu.setAttribute('href', link4);
            linkJogadores.setAttribute('href', link6);
        }
    }

    ajustarLink();
    window.addEventListener('resize', ajustarLink);
})

//////// SLIDER DE APRESENTAÇÃO JOGADORES ////////
document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.players')
const btn_next = document.querySelector('.next')
const btn_prev = document.querySelector('.prev')
let slideIndex = 0;

btn_next.addEventListener('click', function() {
    slides[slideIndex].classList.remove('displayed');
    slideIndex = (slideIndex + 1) % (slides.length -1);
    slides[slideIndex].classList.add('displayed');
})

btn_prev.addEventListener('click', function() {
    slides[slideIndex].classList.remove('displayed');
    if (slideIndex == 0){
        slideIndex = 4;
        slides[slideIndex].classList.add('displayed');
    }
    else{
    slideIndex = (slideIndex - 1) % (slides.length -1);
    slides[slideIndex].classList.add('displayed');
    }
})
})
