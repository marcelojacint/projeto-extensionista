function logar() {
    let emailLogin = document.getElementById("emailLogin").value.trim().toLowerCase();
    let senhaLogin = document.getElementById("senhaLogin").value;

    let usuario = localStorage.getItem(emailLogin);

    if (usuario) {
        usuario = JSON.parse(usuario);
        if (usuario.senha === senhaLogin) {
            alert("Sucesso, Logado!");
            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));

            window.location.href = "../index.html";
            
        } else {
            alert("senha incorreta!");
        }
    } else {
        alert("Usuário não encontrado!");
    }
}