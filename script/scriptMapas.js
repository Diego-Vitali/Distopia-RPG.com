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
