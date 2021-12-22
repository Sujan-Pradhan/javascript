function firstnameValidate() {
  let first_name = document.getElementById("firstname").value;
  if (first_name == "") {
    displayMsg("Firstname is required", "fnamemsg", "red");
    return false;
  } else if (!first_name.match(/^([a-zA-Z])+$/)) {
    displayMsg("Firstname must be characters", "fnamemsg", "red");
    return false;
  } else if (first_name.length < 3) {
    displayMsg(
      "Firstname must be more than three characters",
      "fnamemsg",
      "red"
    );
    return false;
  } else {
    displayMsg("Valid Firstname", "fnamemsg", "green");
    return true;
  }
}
function displayMsg(msg, id, colorValue) {
  document.getElementById(id).innerHTML = msg;
  document.getElementById(id).style.color = colorValue;
}

function lastnameValidate() {
  let last_name = document.getElementById("lastname").value;
  if (last_name == "") {
    displayMsg("Lastname is required", "lnamemsg", "red");
    return false;
  } else if (!last_name.match(/^([a-zA-Z])+$/)) {
    displayMsg("Lastname must be characters", "lnamemsg", "red");
    return false;
  } else if (last_name.length < 3) {
    displayMsg(
      "Lastname must be more than three characters",
      "lnamemsg",
      "red"
    );
    return false;
  } else {
    displayMsg("Valid Lastname", "lnamemsg", "green");
    return true;
  }
}

function emailValidate() {
  let email = document.getElementById("email").value;
  if (email == "") {
    displayMsg("Email is required", "emailmsg", "red");
    return false;
  } else if (
    !email.match(/^([a-z0-9])[a-z0-9\#\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/)
  ) {
    displayMsg("Email is not in valid format", "emailmsg", "red");
    return false;
  } else {
    displayMsg("Valid Email", "emailmsg", "green");
    return true;
  }
}

function passwordValidate() {
  let password = document.getElementById("password").value;
  if (password == "") {
    displayMsg("Password is required", "passwordmsg", "red");
    return false;
  } else if (
    !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$@!%?&]).{8,}$/)
  ) {
    displayMsg(
      "Password must be of 8 character including one uppercase lowercase digit and special character",
      "passwordmsg",
      "red"
    );
    return false;
  } else {
    displayMsg("Valid Password", "passwordmsg", "green");
    return true;
  }
}

function validForm() {
  if (
    firstnameValidate() &&
    lastnameValidate() &&
    emailValidate() &&
    passwordValidate()
  ) {
    return true;
  } else {
    return false;
  }
}
