document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    window.location.href = "Games.html";
  }
});

document.getElementById("ctcsubmit").addEventListener("click", (e) => {
  e.preventDefault(); // para hindi mag-submit agad yung form
  alert("Message sent! Thanks for reaching out.");
});

document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault(); // para hindi mag-submit agad yung form
  alert("Top Up successfully. Thanks for purchasing!");
});
