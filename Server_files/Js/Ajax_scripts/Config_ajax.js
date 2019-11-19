function loadDoc(pais)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      mostrar(pais, this.responseText);
    }
  };
  xhttp.open("GET", "../Ajax_files/Cities_ajax.txt", true);
  xhttp.send();

}

function mostrar(count, txt)
{
  switch (count) {
    case "España":
      document.getElementById("city").value = txt.split("\n")[0];
      break;

    case "Fracncia":
      document.getElementById("city").value = txt.split("\n")[1];
      break;

    case "Italia":
      document.getElementById("city").value = txt.split("\n")[2];
      break;

    case "Inglaterra":
      document.getElementById("city").value = txt.split("\n")[3];
      break;

    default:
      document.getElementById("city").value = txt.split("\n")[4];

  }
}
