function get_values() {
  /*for (i in FORM_STATUS) {
    if (!FORM_STATUS[i]) {
      alert("Hay errores en los datos...");
      return
    }
  }*/
  if (FORM_STATUS.coordinates) {
    if (FORMATS.coordinates == "Decimal")
      parse_decimal_coordinates(document.getElementById("coordinates").value);
    else
      parse_cardinal_coordinates(document.getElementById("coordinates").value);
  }
}
