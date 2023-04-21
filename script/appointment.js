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

// ------------------------cookies &  local storage-------------------

// cookies notification

// js cookies

// let form = document.getElementById("apointment-form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let nameValue = document.getElementById("name").value;
//   cookies.set("usernamevalue", nameValue);
//   e.target.submit();
// });

// let usernameCookies = cookies.get("usernamevalue");

// if (usernameCookies) {
//   document.getElementById("name").value = usernameCookies;
// }

// let cookie_consent = getCookie("user_cookie_consent");
// if (cookie_consent != "") {
//   document.getElementById("cookieNotice").style.display = "none";
// } else {
//   document.getElementById("cookieNotice").style.display = "block";
// }

// if (getCookie("cookieConsent") === "true") {
//   hideCookieConsent();
// } else {
//   showCookieConsent();
// }

// function showCookieConsent() {
//   document.getElementById("cookiesNote").style.display = "block";
// }

// // Hide the cookie consent form
// function hideCookieConsent() {
//   document.getElementById("cookiesNote").style.display = "none";
// }

// // Function to accept the cookie consent
// function acceptCookieConsent() {
//   setCookie("cookieConsent", "true", 365);
//   hideCookieConsent();
// }

// // Function to get a cookie by name
// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(";");
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// // Function to set a cookie with a name, value, and expiration date in days
// function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

(function () {
  var infoBar = document.querySelector(".cookies-infobar");
  var btnAccept = document.querySelector("#cookies-infobar-close");

  if (wasAccepted()) {
    hideInfobar();
    return;
  }

  btnAccept.addEventListener("click", function (e) {
    e.preventDefault();
    hideInfobar();
    saveAcceptInCookies(7);
  });

  function hideInfobar() {
    infoBar.className = infoBar.classList.value + " cookies-infobar_accepted";
  }

  function wasAccepted() {
    return checkCookie() === "1";
  }

  function checkCookie() {
    var name = "cookieInfoHidden=";
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }

  function saveAcceptInCookies(daysOfValidity) {
    var now = new Date();
    var time = now.getTime() + daysOfValidity * 24 * 60 * 60 * 1000;
    var newTime = new Date(now.setTime(time));

    newTime = newTime.toUTCString();

    document.cookie = "cookieInfoHidden=1; expires=" + newTime + "; path=/";
  }
})();
