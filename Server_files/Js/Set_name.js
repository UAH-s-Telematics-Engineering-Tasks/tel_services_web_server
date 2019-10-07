function set_name() {
  localStorage.name = document.getElementById("username").value;
  //Como el sitio no está calificado como seguro al carecer de HTTPS algunos navegadores no permiten hacer este redireccionamiento. Nuestro novaegador de pruebas, Chromium, si que permite hacerlo.
  location.href = "../Index.html";
}
