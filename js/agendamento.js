document.addEventListener("DOMContentLoaded", function () {
    const servico = localStorage.getItem("servicoSelecionado");

    if (!servico) {
        localStorage.setItem("aguardandoAgendamento", "true");
    }

    const confirmacao = sessionStorage.getItem("agendamentoConfirmado");

    if (confirmacao === "true") {
        mostrarMensagemFinal();
        sessionStorage.removeItem("agendamentoConfirmado");
    }
});

function agendar() {
    let data = document.getElementById("data").value;
    let horario = document.getElementById("horario").value;
    let servico = localStorage.getItem("servicoSelecionado");
    let usuario = sessionStorage.getItem("usuarioLogado");

    if (!servico) {
        localStorage.setItem("aguardandoAgendamento", "true");
        return window.location.href = "servico.html";
    }

    if (data && horario) {
        let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
        let novoAgendamento = { usuario, data, horario, servico };

        agendamentos.push(novoAgendamento);
        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

        sessionStorage.setItem("agendamentoConfirmado", "true");
        sessionStorage.setItem("ultimoServico", servico);
        sessionStorage.setItem("ultimoHorario", horario);

        localStorage.removeItem("servicoSelecionado");
        localStorage.removeItem("aguardandoAgendamento");

        window.location.href = "agendamento.html";
    } else {
        alert("Por favor, escolha uma data e um horário.");
    }
}


function mostrarMensagemFinal() {
    const container = document.querySelector(".container");

    const servico = sessionStorage.getItem("ultimoServico") || "Serviço não encontrado";
    const horario = sessionStorage.getItem("ultimoHorario") || "Horário não encontrado";

    container.innerHTML = `
        <p class="mensagem-final">
            Agendamento confirmado!<br>
            Serviço: <strong>${servico}</strong><br>
            Horário: <strong>${horario}</strong>
        </p>
        <button id="btnHistorico" class="btn-historico">Ver Histórico</button>
    `;

    document.getElementById("btnHistorico").addEventListener("click", function () {
        window.location.href = "historico.html";
    });

    sessionStorage.removeItem("ultimoServico");
    sessionStorage.removeItem("ultimoHorario");
}


