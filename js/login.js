function mostrarSenha(){
    var senha = document.getElementById('senha');
    var mostrarSenha = document.getElementById('mostrar_senha');

    if (senha.type === 'password'){
        senha.setAttribute('type', 'text')
        mostrarSenha.classList.replace('bi-eye-slash','bi-eye')
    }
    else{
        senha.setAttribute('type', 'password')
        mostrarSenha.classList.replace('bi-eye','bi-eye-slash')
    }
}