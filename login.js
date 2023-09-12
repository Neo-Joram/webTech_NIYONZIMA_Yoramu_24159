// N.Yoramu
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "admin@gmail.com" && password.value === "admin12") {
    window.location = "home.html";
  } else {
    alert("email or password incorrect");
  }
});

email.addEventListener("keyup", () => {
  if (email.value.trim() === "") {
    email.classList.add("error");
    email.classList.remove("success");
  } else {
    email.classList.add("success");
    email.classList.remove("error");
  }
});
