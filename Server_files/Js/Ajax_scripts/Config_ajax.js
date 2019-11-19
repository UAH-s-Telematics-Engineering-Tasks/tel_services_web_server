function loadDoc(pais)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      mostrar(this.responseText);
    }
  };

  if (pais == "España")
  {
    xhttp.open("GET", "../españa.txt", true);
  }
  else if (pais == "Francia")
  {
    xhttp.open("GET", "../francia.txt", true);
  }
  else if (pais == "Italia")
  {
    xhttp.open("GET", "../italia.txt", true);
  }
  else if (pais == "Inglaterra")
  {
    xhttp.open("GET", "../inglaterra.txt", true);
  }
  else
  {
    xhttp.open("GET", "../vacio.txt", true);
  }

  xhttp.send();
}

function mostrar(txt)
{
  document.getElementById("city").value = txt;
}
