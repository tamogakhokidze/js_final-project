let formRegistration = document.getElementById("apointment-form");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};
  let form = event.target;

  let name = document.getElementById("name").value;
  if (name == "") {
    errors.name = " Name can not be empty";
  }
  let password = document.getElementById("password").value;
  if (password == "") {
    errors.password = " Password can not be empty";
  }

  let email = document.getElementById("email").value;
  if (email == "") {
    errors.email = " Email can not be empty";
  }

  let phone = document.getElementById("phone").value;
  if (email == "") {
    errors.phone = " Phone can not be empty";
  }

  let department = document.getElementById("department").value;
  if (email == "") {
    errors.department = " Department can not be empty";
  }

  let date = document.getElementById("date").value;
  if (email == "") {
    errors.date = " Date can not be empty";
  }

  let message = document.getElementById("message").value;
  if (email == "") {
    errors.message = " Message can not be empty";
  }

  document.querySelectorAll("error-text").forEach((element) => {
    element.innerHTML = "";
  });
  for (let item in errors) {
    let errorText = document.getElementById("error-" + item);

    if (errorText) {
      errorText.innerText = errors[item];
    }
  }
});

let emailInput = document.getElementById("email");

emailInput.addEventListener("keyup", function () {
  let emailInputValue = document.getElementById("email").value;
  let errorTextEmail = document.getElementById("error-email");
  let emailpattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailInputValue.match(emailpattern)) {
    emailInput.style.border = "2px solid green";
    emailInput.style.outline = "none";
    errorTextEmail.innerHTML = "Your Email is valid";
    errorTextEmail.style.color = "green";
  } else {
    emailInput.style.border = "2px solid red";
    emailInput.style.outline = "none";
    errorTextEmail.innerHTML = "Your Email is not valid";
    errorTextEmail.style.color = "red";
  }

  if (emailInputValue == "") {
    errorTextEmail.innerHTML = "";
    emailInput.style.border = "2px solid black";
  }
});

let nameField = document.getElementById("name");

nameField.addEventListener("keyup", function () {
  let nameValue = document.getElementById("name").value;
  let errorTextName = document.getElementById("error-name");
  let namePattern = /^[A-Za-z .]{3,15}$/;

  if (namePattern.match(nameValue)) {
    nameField.style.border = "2px solid green";
    nameField.style.outline = "none";
    errorTextName.innerHTML = "Your Username is valid";
    errorTextName.style.color = "green";
  } else {
    nameField.style.border = "2px solid red";
    nameField.style.outline = "none";
    errorTextName.innerHTML = "Your Username is invalid";
    errorTextName.style.color = "red";
  }

  if (nameValue == "") {
    errorText.innerHTML = "";
    nameField.style.border = "2px solid black";
  }
});

let passwordInput = document.getElementById("password");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passwordInput.type == "password") {
    passwordInput.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

let phoneInput = document.getElementById("phone");

phoneInput.addEventListener("keyup", function () {
  let phoneInputValue = document.getElementById("phone").value;
  let errorTextPhone = document.getElementById("error-phone");
  //   let phonePattern = " ^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";

  let phonePattern = " /^(+?995)?d{9}$/";
  //   let phonePattern ="/^(\+?995)?(5|79)\d{7}$/, ";

  if (phonePattern.match(phoneInputValue)) {
    phoneInput.style.border = "2px solid green";
    phoneInput.style.outline = "none";
    errorTextPhone.innerHTML = "Phone number is valid";
    errorTextPhone.style.color = "green";
  } else {
    phoneInput.style.border = "2px solid red";
    phoneInput.style.outline = "none";
    errorTextPhone.innerHTML = "Phone number is not valid";
    errorTextPhone.style.color = "red";
  }

  if (phoneInputValue == "") {
    errorTextPhone.innerHTML = "";
    phoneInput.style.border = "2px solid black";
  }
});
