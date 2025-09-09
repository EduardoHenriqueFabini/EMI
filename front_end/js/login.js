function mudarTela(url){
  window.location.href = url
}

function validar() {
    
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let formatacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Por favor, preencha o campo de Email.");
        document.getElementById("email").focus();
        return false;
    }

    else if (senha === "") {
        alert("Por favor, preencha o campo de Senha.");
        document.getElementById("senha").focus();
        return false;
    }

    else if (!formatacaoEmail.test(email)) {
        alert("Digite um email válido.");
        document.getElementById("email").focus();
        return false;
    }

    else{
        mudarTela("/html/inicio.html")
    }

    return true; 
}

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

 document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");


  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });


  let dots = document.querySelectorAll(".dot");


  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }


  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });


  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });


  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});
