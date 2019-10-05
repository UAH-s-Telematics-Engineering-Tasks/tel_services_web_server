if (typeof(Storage) !== "undefined") {
  if ("name" in localStorage) {
    document.getElementById("info_cont").innerHTML = "Hello " + localStorage.name;
  }
  else {
    document.getElementById("info_cont").innerHTML = "<a href=HTML/Mi_nombre.html>Preséntate :)</a>";
  }
}
