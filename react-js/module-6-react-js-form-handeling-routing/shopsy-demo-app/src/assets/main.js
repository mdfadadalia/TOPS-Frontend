
const container = document.getElementById("categoryContainer");

document.getElementById("scrollLeft").onclick = () => {	
  container.scrollBy({ left: -200, behavior: "smooth" });
};

document.getElementById("scrollRight").onclick = () => {
  container.scrollBy({ left: 200, behavior: "smooth" });
};
