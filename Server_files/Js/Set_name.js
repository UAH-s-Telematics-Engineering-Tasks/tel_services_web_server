function set_name(input_text) {
  localStorage.name = input_text.value;
  //Como el sitio no está calificado como seguro al carecer de HTTPS algunos navegadores no permiten hacer este redireccionamiento. Nuestro novaegador de pruebas, Chromium, sí que permite hacerlo.
  //location.href = "../Index.html";
  if (validate_mail(document.getElementById("mail").value))
    alert("Okay!");
}
