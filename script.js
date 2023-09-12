// N.Yoramu
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("btn");

form.addEventListener("input", () => {
  var isFormValid = validateInputs();
  button.disabled = !isFormValid;

  console.log(button.disabled);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registered successfuly");
  window.location = "index.html";
});

const setError = (element, message) => {
  element.classList.add("error");
  element.classList.remove("success");
};

const setSuccess = (element) => {
  element.classList.add("success");
  element.classList.remove("error");
};

const validateInputs = () => {
  var isFnameValid = fname.value.trim() !== "";
  var isLnameValid = lname.value.trim() !== "";
  var isEmailValid =
    email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) &&
    email.value.trim() !== null;
  var isPhoneValid =
    phone.value.match(/[0-9]{10,23}$/) && email.value.trim() !== null;
  var isPwdValid =
    password.value.match(/^[\w!@#$%^&*()\-+=[\]{};:'",.<>/?]{6,30}$/) &&
    password.value.trim() !== null;
  var isPwd2Valid =
    password2.value.match(/^[\w!@#$%^&*()\-+=[\]{};:'",.<>/?]{6,30}$/) &&
    password2.value.trim() !== null;
  var isPwdMatching = password.value === password2.value;

  fname.addEventListener("keyup", () => {
    if (!isFnameValid) {
      setError(fname, "Firstname is required");
    } else {
      setSuccess(fname);
    }
  });
  lname.addEventListener("keyup", () => {
    if (!isLnameValid) {
      setError(lname, "Lastname is required");
    } else {
      setSuccess(lname);
    }
  });
  email.addEventListener("keyup", () => {
    if (!isEmailValid) {
      setError(email, "Invalid email");
    } else {
      setSuccess(email);
    }
  });
  phone.addEventListener("keyup", () => {
    if (!isPhoneValid) {
      setError(phone, "Phone value must be 10");
    } else {
      setSuccess(phone);
    }
  });
  password.addEventListener("keyup", () => {
    if (!isPwdValid) {
      setError(password, "password value must be >= 8");
    } else {
      setSuccess(password);
    }
  });
  password2.addEventListener("keyup", () => {
    if (!isPwd2Valid) {
      setError(password2, "password value must be >= 8");
    } else {
      setSuccess(password2);
    }
  });

  return (
    isFnameValid &
    isLnameValid &
    isEmailValid &
    isPhoneValid &
    isPwdValid &
    isPwd2Valid &
    isPwdMatching
  );
};
