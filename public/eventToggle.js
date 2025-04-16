document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-info-btn").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".event-row").classList.toggle("open");
    });
  });
});
