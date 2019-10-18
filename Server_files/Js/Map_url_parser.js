
var URL_STATUS = {
  valid: false,
  type: "Undefined"
};

function parse_cardinal_coordinates(coord) {
  var google_query = "https://maps.google.com/maps?q=+Xº+X’+X”,+Xº+X’+X”";
  var values = coord.match(/\d+(\.\d+)?/g);
  var cardinality = coord.match(/[nNsSeEoO]/g);

  if (cardinality[0] == "S" || cardinality[0] == "s")
    values[0] = "-" + values[0];
  if (cardinality[1] == "O" || cardinality[1] == "o")
    values[1] = "-" + values[1];

  for (i in values)
    google_query = google_query.replace(/X/, values[i]);
  //return google_query;
  alert(google_query);
}

function parse_decimal_coordinates(coord) {
  var values = coord.match(/-?\d+(\.\d+)?/g);

  for (i in values)
    if (values[i] > 0)
      values[i] = "+" + values[i];

  //return "https://maps.google.com/maps?q=" + values[0] + "," + values[1];
  alert("https://maps.google.com/maps?q=" + values[0] + "," + values[1]);
}

function validate_input(input_box) {
  if (!input_box.value.search(/^[nNsS]\s*((\d|[0-8]\d)º\s*(\d|[0-5]\d)'\s*(\d|[0-5]\d)(\.\d{1,6})?"|90º\s*0'\s*0"),\s*[eEoO]\s*((\d|\d\d|[12]\d\d|3[0-5]\d)º\s*(\d|[0-5]\d)'\s*(\d|[0-5]\d)(\.\d{1,6})?"|360º\s*0'\s*0")$/)) {
    parse_cardinal_coordinates(input_box.value);
    var new_att = document.createAttribute("style");
    new_att.value = "background-color: #86ceb4";
    input_box.setAttributeNode(new_att);
  }
  else if (!input_box.value.search(/^-?((\d|[0-8]\d)(\.\d{1,6})?|90)º,\s*-?((\d|\d\d|[12]\d\d|3[0-5]\d)(\.\d{1,6})?|360)º$/)) {
    parse_decimal_coordinates(input_box.value);
    var new_att = document.createAttribute("style");
    new_att.value = "background-color: #86ceb4";
    input_box.setAttributeNode(new_att);
  }
  else {
    var new_att = document.createAttribute("style");
    new_att.value = "background-color: white";
    input_box.setAttributeNode(new_att);
  }

}
