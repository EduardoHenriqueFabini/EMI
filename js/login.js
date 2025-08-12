function validar() {
    
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (email === "") {
        alert("Por favor, preencha o campo de Email.");
        document.getElementById("email").focus();
        return false;
    }

    if (senha === "") {
        alert("Por favor, preencha o campo de Senha.");
        document.getElementById("senha").focus();
        return false;
    }

    let formatacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatacaoEmail.test(email)) {
        alert("Digite um email válido.");
        document.getElementById("email").focus();
        return false;
    }

    return true; 
}
