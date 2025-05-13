document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container-historico");
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    if (agendamentos.length === 0) {
        container.innerHTML = "<p>Você ainda não fez nenhum agendamento.</p>";
        return;
    }

    agendamentos.forEach((agendamento, index) => {
        const card = document.createElement("div");
        card.classList.add("card-agendamento");

        card.innerHTML = `
            <p><strong>Serviço:</strong> ${agendamento.servico}</p>
            <p><strong>Data:</strong> ${agendamento.data}</p>
            <p><strong>Horário:</strong> ${agendamento.horario}</p>
            <button class="btn-excluir" data-index="${index}">Excluir</button>
        `;

        container.appendChild(card);
    });

    container.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-excluir")) {
            const index = e.target.getAttribute("data-index");
            agendamentos.splice(index, 1);
            localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
            location.reload();
        }
    });
});
