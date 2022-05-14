function pegarCardInformacoes() {
    //Procurar no meu documento HTML, um element com esse ID:""
    const cardInformacoes = document.getElementById("modulo_descricao")
    cardInformacoes.innerHTML = "";

    //Procurar meu documento HTML e criar nele um elemento: ""
    const meuHeader = document.createElement("h4");
    //Texto dentro do H4
    meuHeader.innerText = "HARD SKILLS";
    meuHeader.classList.add("importante");

    const ul = document.createElement("ul");
    const item1 = document.createElement("li");
    const item2 = document.createElement("li");
    const item3 = document.createElement("li");
    const item4 = document.createElement("li");
    const item5 = document.createElement("li");
    const item6 = document.createElement("li");
    const item7 = document.createElement("li");

    item1.innerText = "JavaScript (ES6)"
    item2.innerText = "Programação Orientada a Objetos"
    item3.innerText = "Programação Funcional"
    item4.innerText = "Metodologias Ágeis"
    item5.innerText = "Qualidade"
    item6.innerText = "TDD com Jest, BDD com Cucumber"
    item7.innerText = "Noções de UX"

    ul.append(item1, item2, item3, item4, item5, item6, item7);
    cardInformacoes.append(meuHeader, ul);
}

function adicionaClick() {
    const botao = document.getElementById("segundoBotao");
    botao.addEventListener("click", pegarCardInformacoes)
}

adicionaClick();