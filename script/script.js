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

//////// SLIDER DE APRESENTAÇÃO JOGADORES - MOBILE////////
document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('#jogadores .players')
const btn_next = document.querySelector('#jogadores .next')
const btn_prev = document.querySelector('#jogadores .prev')
const guias = document.querySelectorAll('#jogadores .slidGuia p')
console.log(slides.length)

let slideIndex = 0;

btn_next.addEventListener('click', function() {
    slides[slideIndex].classList.remove('displayed');
    guias[slideIndex].classList.remove('guiaAtual');
    if (slideIndex == 4){
    slideIndex = 0;
    slides[slideIndex].classList.add('displayed');
    guias[slideIndex].classList.add('guiaAtual'); 
    }
    else{
    slideIndex = (slideIndex + 1);
    slides[slideIndex].classList.add('displayed');
    guias[slideIndex].classList.add('guiaAtual');    
    }
})

btn_prev.addEventListener('click', function() {
    slides[slideIndex].classList.remove('displayed');
    guias[slideIndex].classList.remove('guiaAtual');
    if (slideIndex == 0){
        slideIndex = 4;
        slides[slideIndex].classList.add('displayed');
        guias[slideIndex].classList.add('guiaAtual');
    }
    else{
    slideIndex = (slideIndex - 1) % (slides.length -1);
    slides[slideIndex].classList.add('displayed');
    guias[slideIndex].classList.add('guiaAtual');
    }
})
})

//////// SLIDER DE APRESENTAÇÃO JOGADORES - MOBILE////////
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#jogadorespc .players')
    const btn_next = document.querySelector('#jogadorespc .next')
    const btn_prev = document.querySelector('#jogadorespc .prev')
    const guias = document.querySelectorAll('#jogadorespc .slidGuia p')
    console.log(slides.length)
    
    let slideIndex = 0;
    
    btn_next.addEventListener('click', function() {
        slides[slideIndex].classList.remove('displayed');
        guias[slideIndex].classList.remove('guiaAtual');
        if (slideIndex == 4){
        slideIndex = 0;
        slides[slideIndex].classList.add('displayed');
        guias[slideIndex].classList.add('guiaAtual'); 
        }
        else{
        slideIndex = (slideIndex + 1);
        slides[slideIndex].classList.add('displayed');
        guias[slideIndex].classList.add('guiaAtual');    
        }
    })
    
    btn_prev.addEventListener('click', function() {
        slides[slideIndex].classList.remove('displayed');
        guias[slideIndex].classList.remove('guiaAtual');
        if (slideIndex == 0){
            slideIndex = 4;
            slides[slideIndex].classList.add('displayed');
            guias[slideIndex].classList.add('guiaAtual');
        }
        else{
        slideIndex = (slideIndex - 1) % (slides.length -1);
        slides[slideIndex].classList.add('displayed');
        guias[slideIndex].classList.add('guiaAtual');
        }
    })
    })


