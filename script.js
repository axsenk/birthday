const celebrateButton = document.querySelector("#celebrate-button");
const confettiLayer = document.querySelector("#confetti");

celebrateButton.addEventListener("click", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const colors = ["#e99ab9", "#c9b4e6", "#f4c76b", "#a9d9c8", "#f28c8c"];
  for (let index = 0; index < 65; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.setProperty("--fall-duration", `${2.2 + Math.random() * 2.2}s`);
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    confettiLayer.append(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
});
