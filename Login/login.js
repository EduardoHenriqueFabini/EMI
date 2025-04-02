// Função para exibir a tela de login
function showLogin() {
    const loginContainer = document.getElementById('login-container');
    loginContainer.style.display = 'block';
    setTimeout(() => {
        loginContainer.style.opacity = '1';
    }, 100);
}

// Função para redirecionar para a criação de conta
function createAccountRedirect() {
    window.location.href = 'cadastro.html';
}
