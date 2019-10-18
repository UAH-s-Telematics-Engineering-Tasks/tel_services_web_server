// Source for validation rules: https://help.xmatters.com/ondemand/trial/valid_email_format.htm

function validate_mail(input_text) {
  if (!input_text.search(/^[a-z0-9]+([\._-][a-z0-9]+)*@[a-z0-9]+([\._-][a-z0-9]{3,})+$/i))
}
