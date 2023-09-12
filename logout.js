const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  const confirmation = window.confirm("Confirm logout.");
  if (confirmation) {
    window.location = "index.html";
  }
  null;
});
