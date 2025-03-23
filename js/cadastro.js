function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;

    if (nome && email && telefone && senha) {
        let usuario = {nome, email, telefone, senha};
        localStorage.setItem(email, JSON.stringify(usuario));
        alert("Cadastro realizado com sucesso!")
        window.location.href = "login.html";
    } else{
        alert("Preencha todos os campos!");
    }
}