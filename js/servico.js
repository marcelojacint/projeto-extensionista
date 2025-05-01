document.addEventListener("DOMContentLoaded", function () {
    let botoes = document.querySelectorAll(".nav-servico button");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            // Pegando apenas o texto da linha antes do botão
            let servico = this.parentElement.firstChild.textContent.trim();

            localStorage.setItem("servicoSelecionado", servico);
            window.location.href = "agendamento.html";
        });
    });
});
