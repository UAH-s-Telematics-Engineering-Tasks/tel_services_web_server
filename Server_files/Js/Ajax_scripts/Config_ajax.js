var OPTION_TAG = '<option value="';

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
  var options = "";
  switch (count) {
    case "España":
      for (const x of txt.split("\n")[0].split(","))
        options += OPTION_TAG + x + '">"';
      break;

    case "Francia":
      for (const x of txt.split("\n")[1].split(","))
        options += OPTION_TAG + x + '">"';
      break;

    case "Inglaterra":
      for (const x of txt.split("\n")[2].split(","))
        options += OPTION_TAG + x + '">"';
      break;

    case "Italia":
      for (const x of txt.split("\n")[3].split(","))
        options += OPTION_TAG + x + '">"';
  }
  document.getElementById("city_list").innerHTML = options;
}
