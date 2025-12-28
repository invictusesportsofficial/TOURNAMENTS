// Placeholder JS (intentionally minimal)
console.log("Fullscreen iframe loaded");

document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("embedFrame");

  if (!iframe) return;

  // Safety fallback if iframe fails
  iframe.onerror = () => {
    window.location.href = iframe.src;
  };
});
