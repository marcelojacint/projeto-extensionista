
        function agendar() {
            let data = document.getElementById("data").value;
            let horario = document.getElementById("horario").value;

            if (data) {
                document.getElementById("mensagem").innerText = `Agendado para ${data} das ${horario}`;
            } else {
                document.getElementById("mensagem").innerText = "Por favor, selecione uma data!";
                document.getElementById("mensagem").style.color = "#d9534f";
            }
        }