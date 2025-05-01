function agendar() {
    let data = document.getElementById("data").value;
    let horario = document.getElementById("horario").value;

    if (data && horario) {
        let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

        let usuario = sessionStorage.getItem("usuarioLogado");
        let novoAgendamento = { usuario, data, horario };

        agendamentos.push(novoAgendamento);
        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

        document.getElementById("mensagem").innerText = "Agendamento realizado com sucesso!";
    } else {
        alert("Por favor, escolha uma data e um horário.");
    }
}
