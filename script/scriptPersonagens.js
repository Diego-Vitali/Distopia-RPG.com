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

///////// Descrição Protagonistas ///////////
document.addEventListener('DOMContentLoaded', function() {
    const array_img = document.querySelectorAll('.protagonistas tr td img')
    const obj_info = document.querySelector('.info')
    const obj_contInfo = document.querySelector('.content')
    const obj_imgInfo = document.querySelector('.info img')
    const btn_fechar = document.querySelector('.fechar')
    
    let arrayIndex = 0;


    for (Img of array_img ) {
        Img.addEventListener('click', function() { ShowInfo(this.src, this.alt)})
    }

btn_fechar.addEventListener('click', closeInfo)

function ShowInfo(_src, _alt) {
    obj_imgInfo.setAttribute('src', _src)
    obj_imgInfo.setAttribute('alt', _alt)
    obj_imgInfo.setAttribute('title', _alt)

        if(_alt == "Verônica"){
            obj_contInfo.innerHTML = "Verônica Küster é uma ex-criminosa e uma agente extremamente experiente da Ordem, tendo resolvido grandes casos no passado. No entanto, uma última missão traumática a fez se separar de seu antigo grupo. Hoje, equipada de suas lâminas amaldiçoadas, Verônica segue acompanhada da própria Morte da ciência de que nunca mais voltará a ser o que um dia já fora."
        }
        else if(_alt == "Dillon"){
            obj_contInfo.innerHTML = "Dillon é o guitarrista Paranormal membro da misteriosa organização nomeada 'Guilda'. Anteriormente conhecido como 'F-14', Dillon sobrevive à Distopia livre das amarras de sua organização. Empunhando 'Serpente', seu Lendário Baixo-Machado, ele segue descobrindo cada vez mais sobre seu passado e entendendo que o Sangue é mais do que apenas o laço que o liga ao seus irmãos."
        }
        else if(_alt == "Rudá"){
            obj_contInfo.innerHTML = "Um dia, Rudá fora apenas uma professora em um mundo comum, mas as memórias de mais de uma década atrás já se perderam em meio ao caos da Distopia. Hoje, Rudá é uma agente de elite de uma organização derivada da antiga Ordo Realitas. Equipada com seu fuzil de Precisão absoluto, Rudá atravessa a assombrosa névoa da Distopia acompanhada dos ecos de uma ex-vida que se recusa morrer."
        }
        else if(_alt == "Mei-Hui"){
            obj_contInfo.innerHTML = "Mei-Hui fora uma genial cientista antes da Distopia, tendo uma família feliz e trabalhando em uma grande empresa de desenvolvimento médico e tecnológico. No entanto, a alegria não seria eterna e logo tudo começou a ruir. A chegada da Distopia destruiu seu mundo e sua família e, hoje, Mei-Hui se vê obrigada a continuar avançando em busca daqueles que ama, mesmo que isso signifique se afundar no Medo e no Desconhecido. "
        }
    obj_info.style.display = 'block'
}

function closeInfo() {
    obj_info.style.display = 'none'
}
})
