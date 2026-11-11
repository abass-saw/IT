/* ==========================================================================
   project.js — Page détaillée d'un projet : project.html?id=<id du projet>
   Les contenus viennent de data.js (PROJECTS). Aucun projet à recopier ici.
   ========================================================================== */
const $ = (id) => document.getElementById(id);
let LANG = "fr";
try { LANG = localStorage.getItem("lang") === "en" ? "en" : "fr"; } catch (e) {}
const t = (path) => path.split(".").reduce((o, k) => o && o[k], UI[LANG]);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const CAT_ICON = { telecom: "fa-tower-broadcast", iot: "fa-microchip", auto: "fa-gear", ia: "fa-brain", fpga: "fa-microchip", fsm: "fa-code-branch", instru: "fa-gauge", adas: "fa-car", web: "fa-laptop-code", adhoc: "fa-network-wired" };

const projectId = new URLSearchParams(location.search).get("id");
const index = PROJECTS.findIndex((p) => p.id === projectId);

/* Image cassée : image de secours, puis icône */
document.addEventListener("error", (e) => {
  let el = e.target;
  if (el && el.tagName === "SOURCE") el = el.parentElement;
  if (!el || !el.dataset || !("fallbackIcon" in el.dataset)) return;
  if (el.tagName === "IMG" && el.dataset.fallbackSrc && !el.dataset.fbTried) { el.dataset.fbTried = "1"; el.src = el.dataset.fallbackSrc; return; }
  const div = document.createElement("div");
  div.className = "icon-fallback icon-fallback-media-lg";
  div.innerHTML = `<i class="fas ${el.dataset.fallbackIcon}"></i>`;
  el.replaceWith(div);
}, true);

const bullets = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const tags = (arr) => `<div class="tags">${arr.map((x) => `<span class="tag">${x}</span>`).join("")}</div>`;
const section = (icon, title, body) => `<section class="pj-section"><h2><i class="fas ${icon}"></i> ${title}</h2>${body}</section>`;

function media(p) {
  if (!p.media) return "";
  const icon = CAT_ICON[p.cat] || "fa-diagram-project";
  const inner = p.media.type === "video"
    ? `<video autoplay muted loop playsinline controls data-fallback-icon="${icon}"><source src="${p.media.src}" type="video/mp4"></video>`
    : `<img src="${p.media.src}" alt="${esc(p[LANG].title)}"${p.media.fallback ? ` data-fallback-src="${p.media.fallback}"` : ""} data-fallback-icon="${icon}">`;
  return `<div class="pj-media">${inner}</div>`;
}

function pager() {
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return `<nav class="pj-pager" aria-label="Projets">
    <a href="${projectUrl(prev)}"><small><i class="fas fa-arrow-left"></i> ${t("pj.prev")}</small><b>${prev[LANG].title}</b></a>
    <a href="${projectUrl(next)}" class="next"><small>${t("pj.next")} <i class="fas fa-arrow-right"></i></small><b>${next[LANG].title}</b></a>
  </nav>`;
}

function render() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("#lang-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === LANG));
  $("back-top-text").textContent = t("pj.back");
  $("theme-toggle").title = t("theme");
  $("theme-toggle").setAttribute("aria-label", t("theme"));
  $("footer-text").textContent = `© ${new Date().getFullYear()} SAWADOGO Mahmoud Abass`;
  $("pwd-title").textContent = t("pwd.title");
  $("pwd-text").textContent = t("pwd.text");
  $("pwd-label").textContent = t("pwd.label");
  $("pwd-submit").textContent = t("pwd.submit");
  $("pwd-cancel").textContent = t("pwd.cancel");

  const root = $("pj-root");
  if (index < 0) {
    $("doc-title").textContent = t("pj.notfound");
    root.innerHTML = `<h1 class="pj-title">${t("pj.notfound")}</h1><p style="margin:1rem 0 1.6rem;color:var(--text-2)">${t("pj.notfoundText")}</p>
      <a class="btn btn-primary" href="index.html#projets"><i class="fas fa-arrow-left"></i> ${t("pj.back")}</a>`;
    return;
  }
  const p = PROJECTS[index], x = p[LANG];
  $("doc-title").textContent = `${x.title} — SAWADOGO Mahmoud Abass`;

  root.innerHTML = `
    <div class="pj-meta"><span class="badge"><i class="fas ${CAT_ICON[p.cat] || "fa-diagram-project"}"></i> ${t("cats." + p.cat)}</span><span class="tl-date">${x.date}</span></div>
    <h1 class="pj-title">${x.title}</h1>
    <p class="pj-lead">${x.desc}</p>
    ${media(p)}
    ${section("fa-clipboard-list", t("modal.context"), `<p>${x.context || x.desc}</p>`)}
    ${x.objectives ? section("fa-bullseye", t("modal.objectives"), bullets(x.objectives)) : ""}
    ${x.technologies ? section("fa-screwdriver-wrench", t("modal.technologies"), tags(x.technologies)) : ""}
    ${x.results ? section("fa-circle-check", t("modal.results"), bullets(x.results)) : ""}
    <div class="pj-actions">
      ${p.report ? `<button type="button" class="btn btn-primary" id="report-btn"><i class="fas fa-lock"></i> ${t("modal.report")}</button>` : ""}
      <a class="btn btn-outline" href="index.html#projets"><i class="fas fa-arrow-left"></i> ${t("pj.back")}</a>
    </div>
    ${pager()}`;
  if (p.report) $("report-btn").addEventListener("click", () => askPassword(p.report));
}

/* ---------- Rapport protégé par mot de passe (même logique que le portfolio) ---------- */
let pendingReport = null, attempts = 0, lockUntil = 0;
const MAX_ATTEMPTS = 5;
function showPwd() { $("pwd-modal").classList.add("active"); document.body.style.overflow = "hidden"; $("pwd-input").focus(); }
function hidePwd() { $("pwd-modal").classList.remove("active"); document.body.style.overflow = ""; }
function askPassword(path) {
  pendingReport = path;
  $("pwd-input").value = "";
  $("pwd-error").textContent = Date.now() < lockUntil ? t("pwd.locked") : "";
  showPwd();
}
async function sha256Hex(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
$("pwd-close").addEventListener("click", hidePwd);
$("pwd-cancel").addEventListener("click", hidePwd);
$("pwd-modal").addEventListener("click", (e) => { if (e.target.id === "pwd-modal") hidePwd(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("pwd-modal").classList.contains("active")) hidePwd(); });
$("pwd-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = $("pwd-input"), err = $("pwd-error");
  if (Date.now() < lockUntil) { err.textContent = t("pwd.locked"); return; }
  if (!(window.crypto && crypto.subtle)) { err.textContent = t("pwd.noCrypto"); return; }
  if (await sha256Hex(input.value) === CONFIG.REPORT_PASSWORD_SHA256) {
    attempts = 0; err.textContent = ""; hidePwd();
    window.open(pendingReport, "_blank", "noopener");
    return;
  }
  attempts++;
  input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
  if (attempts >= MAX_ATTEMPTS) { lockUntil = Date.now() + 30000; attempts = 0; err.textContent = t("pwd.locked"); }
  else err.textContent = t("pwd.wrongLeft") + (MAX_ATTEMPTS - attempts);
  input.select();
});

/* ---------- Langue & thème (partagés avec le portfolio) ---------- */
$("lang-toggle").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-lang]");
  if (!b || b.dataset.lang === LANG) return;
  LANG = b.dataset.lang;
  try { localStorage.setItem("lang", LANG); } catch (_) {}
  render();
});
const themeToggle = $("theme-toggle");
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-checked", String(theme === "light"));
  try { localStorage.setItem("theme", theme); } catch (_) {}
}
themeToggle.addEventListener("click", () =>
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));
setTheme(document.documentElement.getAttribute("data-theme") || "dark");

render();
