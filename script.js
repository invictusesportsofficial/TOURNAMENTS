const iframe = document.getElementById("embedFrame");

let escaped = false;

// If iframe loses focus during login, redirect
window.addEventListener("blur", () => {
  if (escaped) return;
  escaped = true;
  window.location.href = iframe.src;
});
