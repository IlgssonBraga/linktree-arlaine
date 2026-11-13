(() => {
  // Ano no rodapé
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Fallback do avatar (monograma "AB")
  const avatar = document.querySelector(".avatar");
  const img = avatar && avatar.querySelector("img");
  if (img) {
    const fail = () => avatar.classList.add("is-fallback");
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  }

  // Luz que segue o cursor nos cards
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // Copiar e-mail + toast
  const toast = document.querySelector(".toast");
  let timer;
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  };

  const fallbackCopy = (text) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) {}
    ta.remove();
    return ok;
  };

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.dataset.copy;
      let ok = false;
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch (_) {
        ok = fallbackCopy(text);
      }
      showToast(ok ? "E-mail copiado ✓" : text);
    });
  });
})();
