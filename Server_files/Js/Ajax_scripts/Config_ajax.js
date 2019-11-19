function loadDoc(pais)
{
  alert("Got to loadDoc()");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      mostrar(pais, this.responseText);
    }
  };

  // if (pais == "España")
  // {
  //   xhttp.open("GET", "../españa.txt", true);
  // }
  // else if (pais == "Francia")
  // {
  //   xhttp.open("GET", "../francia.txt", true);
  // }
  // else if (pais == "Italia")
  // {
  //   xhttp.open("GET", "../italia.txt", true);
  // }
  // else if (pais == "Inglaterra")
  // {
  //   xhttp.open("GET", "../inglaterra.txt", true);
  // }
  // else
  // {
  //   xhttp.open("GET", "../vacio.txt", true);
  // }
  //
  // xhttp.send();
  alert("Hello");
  xhttp.open("GET", "../Ajax_files/Cities_ajax.txt", true);
  xhhtp.send();
  alert("Reached the end of loadDoc()");

}

function mostrar(count, txt)
{
  alert("Hi from mostrar()");
  for (ent of txt.split("\n"))
    alert(ent);
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
