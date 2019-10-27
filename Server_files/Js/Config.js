function pais()
{
  var c = document.getElementById("country").value;
  var l = document.getElementById("count_list");
  var i;
  var s = 0;

  for (i = 0; i < l.options.length; i++)
  {
    if (c != l.options[i].value)
    {
      s++;
    }
  }

  if (s == l.options.length)
  {
    alert("Pais Erroneo");
  }
}

function passwd()
{
  var p = document.getElementById("pass").value;
  var c = document.getElementById("canvas");
  var s = 5;


  if (p.length >= 6 && p.length < 9)
  {
    c.style.background = "red";
  }
  else if (p.length >= 9 && p.length < 12)
  {
    c.style.background = "yellow";
  }
  else if (p.length >= 12)
  {
    c.style.background = "#00ff00";
  }
  else {
    c.style.background = "none";
  }
}

function temp(t)
{
  if (t.value < 22 || t.value > 26)
  {
    alert("La temperatura debe estar entre 22 y 26 °C");
    t.style.color = "red";
  }
}

function check_pswd(text_box) {
  if(text_box.value.length < 6)
    alert("¡Mínimo 6 caracteres!");
}
