const form = document.getElementById("formulario");

form.addEventListener("submit", function (evento) {
  const nome = document.getElementById("nome").value;

  const email = document.getElementById("emaillllll").value;

  console.log(`Obrigadoooooooo, ${nome}! Dicas para ${email}`);
  alert(`Obrigado, ${nome}! Dicas para ${email}`);
  evento.preventDefault();
});
