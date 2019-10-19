// Source for validation rules: https://help.xmatters.com/ondemand/trial/valid_email_format.htm

function validate_mail(input_box) {
  if (!input_box.value.search(/^[a-z0-9]+([\._-][a-z0-9]+)*@[a-z0-9]+([\._-][a-z0-9]{2,})+$/i)) {
    input_box.setAttribute("class", "valid");
    return true;
  }
  else {
    input_box.removeAttribute("class");
    return false;
  }
}
