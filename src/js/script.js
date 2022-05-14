function pegarCardInformacoes() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes = document.getElementById("modulo_descricao")
    cardInformacoes.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const listaHardSkills = [
        "JavaScript (ES6)",
        "Programação Orientada a Objetos",
        "Programação Funcional",
        "Metodologias Ágeis",
        "Qualidade",
        "TDD com Jest, BDD com Cucumber",
        "Noções de UX"
    ];

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaHardSkills.length; contador = contador + 1) {
        const li = document.createElement("li");
        li.innerText = listaHardSkills[contador];

        ul.append(li)
    }

    cardInformacoes.append(meuHeader, ul);
}

function adicionaClick() {
    const botao = document.getElementById("segundoBotao");
    botao.addEventListener("click", pegarCardInformacoes)
}

adicionaClick();