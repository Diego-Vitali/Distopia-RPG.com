///////// Alterar Link Interno ///////////
document.addEventListener('DOMContentLoaded', function() {
    let linkOquee = document.getElementById('linkoquee');
    let linkComoSurgiu = document.getElementById('linkcomosurgiu');
    let linkJogadores = document.getElementById('linkjogadores');
    const link1 = "../index.html#oqueepc";
    const link2 = "../index.html#oquee";
    const link3 = "../index.html#comosurgiupc";
    const link4 = "../index.html#comosurgiu";
    const link5 = "../index.html#jogadorespc";
    const link6 = "../index.html#jogadores";

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

///////// Mostrar Tela ///////////
document.addEventListener('DOMContentLoaded', function() {
const btnLista = document.querySelectorAll('button')
const animaTela = document.querySelector('.tela')
const telaTexto = document.querySelector('.tela h4')
const telaTitulo = document.querySelector('.tela h3')

for (btn of btnLista) {
    btn.addEventListener('click', function() { showTela(this.id)})
}

function showTela(_id) {

    if(_id == "ordo"){
        telaTitulo.innerHTML= "Ordo Realitas"
        telaTexto.innerHTML= "A lendária Ordo Realitas se trata de uma organização destinada proteger a Realidade perante os horrores do Outro Lado        Apesar dos graves desafios enfrentados e do seu momentâneo fim durante a Distopia, a Ordo Realitas se reergueu poderosa com o único objetivo de ajudar e salvar o maior número de pessoas possível."
    }
    else if(_id == "foz"){
        telaTitulo.innerHTML= "Aldeia da Foz de Sangue"
        telaTexto.innerHTML= "A Aldeia da Foz se trata de um pequena civilização existente na margem do mar. Possui esse nome pois as vezes, a água do mar e da cachoeira ao longe se tornam vermelhas e espessas como Sangue.Por conta da dificuldade de locomoção por estradas normais, os habitantes da Foz passaram a viajar por meio de barcos, indo a diferentes regiões do país, contornando pela costa, e trazendo seus suprimentos. Por isso, ficaram conhecidos como 'Piratas da Foz de Sangue'"
    }
    else if(_id == "negri"){
        telaTitulo.innerHTML= "A Família Negri"
        telaTexto.innerHTML= "A Família Negri é uma antiga família de Agentes e Mercenários que combatem o Paranormal. De origens muito antigas, os membros da família abandonam seus passados e passam a responderem a apenas um único sobrenome 'Negri'. Como uma máfia secreta, têm como principal objetivo absorver conhecimento sobre a realidade e sobre o Outro Lado. Eles passavam seu conhecimento de geração para geração dentro da própria família, utilizando-se deste para conquistar seus objetivos e salvar pessoas dos terrores do Outro Lado."
    }
    animaTela.classList.add('anima')
    setTimeout(function() {
        animaTela.classList.remove('anima');
    }, 500);
}
})