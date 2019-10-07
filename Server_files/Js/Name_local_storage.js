if (typeof(Storage) !== "undefined") {
  //localStorage.removeItem("name");
  if ("name" in localStorage) {
    document.getElementById("info_cont").innerHTML = "Información: Hola " + localStorage.name + " Bienvenid@ :)";
  }
  else {
    document.getElementById("info_cont").innerHTML = "<a href=Html/Name_entry.html>Preséntate :)</a>";
  }
}
