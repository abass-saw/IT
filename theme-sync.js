/* theme-sync.js — à inclure dans le <head> de chaque page de projet (ex. project_ipsec.html)
   <script src="theme-sync.js"></script>
   Applique le même thème (sombre / clair) que le portfolio : paramètre ?theme=… de l'URL,
   sinon valeur mémorisée par le portfolio. */
(function () {
  var root = document.documentElement;
  function read() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("theme"); } catch (e) {}
    if (q === "light" || q === "dark") return q;
    try { var s = localStorage.getItem("theme"); if (s === "light" || s === "dark") return s; } catch (e) {}
    return window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);                 // convention du portfolio
    root.classList.remove("dark", "light", "theme-dark", "theme-light");
    root.classList.add(theme, "theme-" + theme);             // au cas où la page utilise des classes
    root.style.colorScheme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }
  apply(read());
  /* Si la page de projet a son propre bouton, appelle setPortfolioTheme("light" | "dark") */
  window.setPortfolioTheme = apply;
  window.addEventListener("storage", function (e) {
    if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) apply(e.newValue);
  });
})();
