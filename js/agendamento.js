document.addEventListener("DOMContentLoaded", function () {
    const servico = localStorage.getItem("servicoSelecionado");

    // Se usuário veio direto para agendar, mas não escolheu serviço ainda
    if (!servico) {
        // Salva flag para saber que precisa voltar
        localStorage.setItem("aguardandoAgendamento", "true");
    }

    // Verifica se já agendou e deve exibir apenas a mensagem
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

        // Salva dados do último agendamento para exibir na confirmação
        sessionStorage.setItem("agendamentoConfirmado", "true");
        sessionStorage.setItem("ultimoServico", servico);
        sessionStorage.setItem("ultimoHorario", horario);

        // Limpa dados temporários
        localStorage.removeItem("servicoSelecionado");
        localStorage.removeItem("aguardandoAgendamento");

        // Recarrega para mostrar mensagem de sucesso
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
    `;

    // (Opcional) Limpa os dados depois de exibir
    sessionStorage.removeItem("ultimoServico");
    sessionStorage.removeItem("ultimoHorario");
}

