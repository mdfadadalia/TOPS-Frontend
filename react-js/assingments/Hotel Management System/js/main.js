document.getElementById("user").innerText = localStorage.getItem("loginUser");

function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}