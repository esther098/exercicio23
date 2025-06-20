var checkbox = document.getElementById("checkPermissao");

    var botao = document.getElementById("btnEnviar");

    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        botao.disabled = false; 
      } else {
        botao.disabled = true
          }
    })