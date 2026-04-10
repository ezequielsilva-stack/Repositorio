function abrir() {
  document.getElementById("overlay").classList.toggle("ativo");
}
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  overlay.classList.remove("ativo");
});

const frase = "Ezequiel - Front-End Developer";
let i = 0;

function digitar() {
  const el = document.getElementById("texto");

  if (!el) return; // evita erro

  if (i < frase.length) {
    el.innerHTML += frase.charAt(i);
    i++;
    setTimeout(digitar, 50);
  }
}

window.addEventListener("DOMContentLoaded", digitar);