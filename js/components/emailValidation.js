export function eMailValidation() {
  let eMail = document.getElementById("e-mail");
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(eMail.value);
}
