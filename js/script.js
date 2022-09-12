// Troca de imagens da galeria
const galeria = document.querySelectorAll(".galeria-imgs img");
const galeriaContainer = document.querySelector(".galeria-imgs");

galeria.forEach(function (img) {
  img.addEventListener("click", function (event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 600px)").matches;

    if (media) {
      galeriaContainer.prepend(img);
    }
  });
});

// Esconde o botão orçamento da página de orçamento
const orcamentoButton = document.querySelector(".botao");
const url = location.href;

if (url.includes(orcamentoButton.href)) {
  orcamentoButton.style.display = "none";
}

/* Passa os parâmetros para a página de orçamento orçamento */
const parametros = new URLSearchParams(location.search);

parametros.forEach(function (parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
});
