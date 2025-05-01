document.addEventListener("DOMContentLoaded", function () {
    let botoes = document.querySelectorAll(".nav-servico button");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            let servico = this.parentElement.textContent.trim();
            alert("Serviço selecionado: " + servico);
        });
    });
});
