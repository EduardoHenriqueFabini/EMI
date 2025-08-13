function validarRadio(name) {
    const radios = document.getElementsByName(name);
    for (let radio of radios) {
        if (radio.checked) {
            return true;  
        }
    }
    return false;  
}

function validarCadastro() {
    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let data_nasc = document.getElementById("data_nasc").value.trim();

    if (nome === "") {
        alert("Por favor, preencha o campo de Nome.");
        document.getElementById("nome").focus();
        return false;
    }

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

    if (data_nasc === "") {
        alert("Por favor, informe sua Data de Nascimento.");
        document.getElementById("data_nasc").focus();
        return false;
    }

    if (!validarRadio("genero")) {
        alert("Por favor, selecione o gênero.");
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
