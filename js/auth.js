document.addEventListener("DOMContentLoaded", function () {
    let usuarioLogado = sessionStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar esta página!");
        window.location.href = "login.html"; // Redireciona para login
    }
});

// Função para logout
function logout() {
    sessionStorage.removeItem("usuarioLogado");
    alert("Você saiu da conta!");
    window.location.href = "index.html"; // Redireciona para a página inicial
}
