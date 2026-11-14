/* ==========================================================================
   script.js — Moteur du portfolio (les contenus sont dans data.js)
   Sommaire :
   1. Utilitaires & état        6. Modales (détails, liste de projets)
   2. Médias & fallbacks        7. Rapports protégés par mot de passe
   3. Textes statiques (i18n)   8. Langue & thème
   4. Rendu des sections        9. Navigation, défilement, hero
   5. Délégation d'événements  10. Formulaire de contact & démarrage
   ========================================================================== */

/* ---------- 1. UTILITAIRES & ÉTAT ---------- */
const NAME = "SAWADOGO Mahmoud Abass";
let LANG = "fr";
try { LANG = localStorage.getItem("lang") === "en" ? "en" : "fr"; } catch (e) {}
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (id) => document.getElementById(id);
const t = (path) => path.split(".").reduce((o, k) => o && o[k], UI[LANG]);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const PROFIL = {
  fr: "Ingénieur d'État junior en Systèmes Intelligents, Communicants et Mobiles, je possède une solide formation en télécommunications, RF, réseaux optiques et systèmes de transmission. Lors de mon PFE chez ACLS (partenaire Huawei), j'ai conçu et validé une infrastructure réseau campus complète : routage OSPF/IS-IS/BGP, haute disponibilité, sécurité et WLAN centralisé. J'ai aussi effectué un stage en FH et fibre optique, où j'ai acquis une expérience pratique de la configuration, des mesures et de l'analyse de performance de liaisons de transport. À l'aise avec les outils de modélisation, de simulation et d'instrumentation, je suis ouvert aux opportunités en CDI comme en CDD pour contribuer à la conception, à l'optimisation et au déploiement de solutions de télécommunications avancées.",
  en: "Junior state engineer in Intelligent, Communicating and Mobile Systems, with a solid background in telecommunications, RF, optical networks and transmission systems. During my final-year project at ACLS (a Huawei partner), I designed and validated a complete campus network infrastructure: OSPF/IS-IS/BGP routing, high availability, security and centralized WLAN. I also completed an internship in microwave and fiber-optic transmission, gaining hands-on experience configuring, measuring and analyzing the performance of transport links. Comfortable with modeling, simulation and instrumentation tools, I am open to both permanent and fixed-term opportunities to contribute to the design, optimization and deployment of advanced telecommunications solutions."
};

/* ---------- 2. MÉDIAS & FALLBACKS ---------- */
/* Remplace un média cassé par une icône. Pour <video>, l'erreur est émise par <source>. */
document.addEventListener("error", (e) => {
  let el = e.target;
  if (el && el.tagName === "SOURCE") el = el.parentElement;
  if (!el || !el.dataset || !("fallbackIcon" in el.dataset)) return;
  if (el.tagName !== "IMG" && el.tagName !== "VIDEO") return;
  /* image de secours (ex. illustration du projet) avant de passer à l'icône */
  if (el.tagName === "IMG" && el.dataset.fallbackSrc && !el.dataset.fbTried) { el.dataset.fbTried = "1"; el.src = el.dataset.fallbackSrc; return; }
  const div = document.createElement("div");
  const type = el.dataset.fallbackType || "badge";
  div.className = `icon-fallback icon-fallback-${type}`;
  div.innerHTML = type === "avatar" ? "MA" : (el.dataset.fallbackText || `<i class="fas ${el.dataset.fallbackIcon}"></i>`);
  el.replaceWith(div);
}, true);

function renderMedia(src, alt, icon, type, cls, fb) {
  if (!src) return `<div class="icon-fallback icon-fallback-${type}"><i class="fas ${icon}"></i></div>`;
  return `<img${cls ? ` class="${cls}"` : ""} src="${src}" alt="${esc(alt)}" loading="lazy"${fb ? ` data-fallback-src="${fb}"` : ""} data-fallback-icon="${icon}" data-fallback-type="${type}">`;
}
function renderMediaVideo(src, icon, type, cls) {
  return `<video${cls ? ` class="${cls}"` : ""} autoplay muted loop playsinline data-fallback-icon="${icon}" data-fallback-type="${type}"><source src="${src}" type="video/mp4"></video>`;
}
/* Logo d'établissement : si le fichier manque, un monogramme (FSTF, FSTT, LTN) s'affiche à la place */
function logoImg(f, x, cls) {
  return `<img class="${cls}" src="${f.img}" alt="${esc(x.place)}" loading="lazy" data-fallback-text="${f.mono}" data-fallback-icon="" data-fallback-type="logo">`;
}
const CAT_ICON = { telecom: "fa-tower-broadcast", iot: "fa-microchip", auto: "fa-gear", ia: "fa-brain", fpga: "fa-microchip", fsm: "fa-code-branch", instru: "fa-gauge", adas: "fa-car", web: "fa-laptop-code", adhoc: "fa-network-wired" };
const projMedia = (p, type, cls) => !p.media ? "" :
  p.media.type === "video" ? renderMediaVideo(p.media.src, CAT_ICON[p.cat] || "fa-diagram-project", type, cls)
                           : renderMedia(p.media.src, p[LANG].title, CAT_ICON[p.cat] || "fa-diagram-project", type, cls, p.media.fallback);
const tagList = (arr) => `<div class="tags">${arr.map(x => `<span class="tag">${x}</span>`).join("")}</div>`;
const bulletList = (arr) => `<ul>${arr.map(x => `<li>${x}</li>`).join("")}</ul>`;

/* ---------- 3. TEXTES STATIQUES (i18n) ---------- */
function applyStaticI18n() {
  document.documentElement.lang = LANG;
  $("doc-title").textContent = LANG === "fr"
    ? "SAWADOGO Mahmoud Abass — Ingénieur Réseaux & Télécommunications"
    : "SAWADOGO Mahmoud Abass — Networks & Telecommunications Engineer";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.innerHTML = v;
  });
  $("hero-goals").innerHTML = t("hero.goals").map((g) => `<li>${g}</li>`).join("");
  $("profil-text").textContent = PROFIL[LANG];

  [["input-name", "form.name"], ["input-email", "form.email"], ["input-message", "form.message"]].forEach(([id, key]) => {
    $(id).placeholder = t(key);
    $(id).setAttribute("aria-label", t(key));
  });
  $("footer-text").textContent = `© ${new Date().getFullYear()} SAWADOGO Mahmoud Abass — ${t("contact.location")}`;

  const tt = t("theme");
  $("theme-toggle").title = tt;
  $("theme-toggle").setAttribute("aria-label", tt);
  $("modal-body").parentElement.querySelector(".modal-close").setAttribute("aria-label", t("modal.close"));

  $("pwd-title").textContent = t("pwd.title");
  $("pwd-text").textContent = t("pwd.text");
  $("pwd-label").textContent = t("pwd.label");
  $("pwd-submit").textContent = t("pwd.submit");
  $("pwd-cancel").textContent = t("pwd.cancel");

  /* liens configurables */
  $("cv-btn").href = CONFIG.CV_URL;
  const wa = `https://wa.me/${CONFIG.WHATSAPP}`;
  $("whatsapp-btn").href = wa;
  $("contact-whatsapp").href = wa;
  $("linkedin-btn").hidden = !CONFIG.LINKEDIN_URL;
  $("contact-linkedin-row").hidden = !CONFIG.LINKEDIN_URL;
  if (CONFIG.LINKEDIN_URL) { $("linkedin-btn").href = CONFIG.LINKEDIN_URL; $("contact-linkedin").href = CONFIG.LINKEDIN_URL; }
  $("contact-email-row").hidden = !CONFIG.EMAIL;
  if (CONFIG.EMAIL) { $("contact-email").href = `mailto:${CONFIG.EMAIL}`; $("contact-email").textContent = CONFIG.EMAIL; }

  document.querySelectorAll("#lang-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === LANG));
}

/* ---------- 4. RENDU DES SECTIONS ---------- */
function renderFormations() {
  $("formations-list").innerHTML = FORMATIONS.map((f) => {
    const x = f[LANG];
    return `<div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-head">
          ${logoImg(f, x, "tl-logo")}
          <div><span class="tl-date">${x.date}</span><h3>${x.place}</h3></div>
        </div>
        <p class="tl-degree">${x.title}</p>
        <p class="tl-intro">${x.intro}</p>
        <button type="button" class="link-btn" data-open="formation:${f.id}">${t("formations.more")} <i class="fas fa-arrow-right"></i></button>
      </div></div>`;
  }).join("");
}

function renderExperiences() {
  $("exp-list").innerHTML = EXPERIENCES.map((e, i) => {
    const x = e[LANG];
    return `<article class="exp-row ${i === 0 ? "featured" : ""}" data-open="exp:${e.id}">
      <div class="exp-side">
        ${renderMedia(e.img, x.company, e.icon || "fa-briefcase", "badge")}
        <div><span class="exp-date">${x.date}</span><div class="exp-company">${x.company}</div></div>
      </div>
      <div class="exp-main">
        <h3>${x.role}</h3>
        ${bulletList(x.bullets)}
        ${tagList(x.technologies || e.technologies || [])}
        <span class="link-btn">${t("experiences.more")} <i class="fas fa-arrow-right"></i></span>
      </div></article>`;
  }).join("");
}

const pad2 = (n) => String(n).padStart(2, "0");
function renderSkills() {
  $("skills-container").innerHTML = ["telecom", "polyvalence"].map((g) => {
    const items = SKILLS.filter((s) => s.group === g);
    return `<div class="group-block">
      <aside class="group-side"><span class="group-count">${pad2(items.length)}</span><h3>${t("groups." + g)}</h3><p>${t("groupDesc." + g)}</p></aside>
      <div class="skills-grid">${items.map((s, i) => `
        <div class="skill-card" data-open="skill:${s.id}"><span class="skill-num">${pad2(i + 1)}</span><h4>${s[LANG].title}</h4><p>${s[LANG].short}</p></div>`).join("")}</div>
    </div>`;
  }).join("");
}

function renderProjects() {
  $("projects-grid").innerHTML = PROJECTS.filter((p) => p.featured).map((p, i) => {
    const x = p[LANG], tech = (x.technologies || []).slice(0, 4);
    return `<article class="pcard ${i % 5 === 2 ? "wide" : ""}" data-open="project:${p.id}">
      <div class="pcard-media">${projMedia(p, "media")}</div>
      <div class="pcard-body">
        <span class="pcard-kicker">${t("cats." + p.cat)} · ${x.date}</span>
        <h3>${x.title}</h3>
        <p>${x.desc}</p>
        ${tech.length ? `<div class="pcard-tags">${tech.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
        <span class="pcard-link">${t("projets.more")} ↗</span>
      </div></article>`;
  }).join("");
}

function renderTools() {
  $("tools-container").innerHTML = ["telecom", "polyvalence"].map((g) => {
    const items = TOOLS.filter((x) => x.group === g);
    return `<div class="group-block">
      <aside class="group-side"><span class="group-count">${pad2(items.length)}</span><h3>${t("groups." + g)}</h3><p>${t("groupTools." + g)}</p></aside>
      <div class="tools-grid">${items.map((x, i) => {
        const big = g === "telecom" ? i === 0 : i % 3 === 0;     // tuiles mises en avant : mise en page variée
        return `<div class="tool-card ${big ? "big" : ""}" data-open="tool:${g}-${i}">
          ${renderMedia(x.img, x[LANG].name, x.icon || "fa-toolbox", "badge-sm")}
          <div class="tool-text"><b>${x[LANG].name}</b><span>${x[LANG].detail}</span></div></div>`;
      }).join("")}</div>
    </div>`;
  }).join("");
}

function renderCerts() {
  $("certs-container").innerHTML = ["telecom", "polyvalence"].map((g) => `
    <div class="cert-category">
      <div class="cert-category-head"><h3>${t("groups." + g)}</h3></div>
      <div class="cert-grid">${CERTS.filter((x) => x.group === g).map((x, i) => `
        <article class="cert-card" data-open="cert:${g}-${i}">
          <div class="cert-image-container">${renderMedia(x.img, x[LANG].title, "fa-certificate", "cert")}</div>
          <div class="cert-info"><h4>${x[LANG].title}</h4><p>${x[LANG].detail}</p><span class="link-btn">${t("certifications.zoom")} ↗</span></div>
        </article>`).join("")}
      </div></div>`).join("");
}

function renderAwards() {
  $("awards-grid").innerHTML = AWARDS.map((a) => `
    <article class="info-card">
      <h3>${a[LANG].title}</h3><p>${a[LANG].detail}</p></article>`).join("");
}
function renderAssoc() {
  $("assoc-grid").innerHTML = ASSOC.map((a) => `
    <article class="info-card">
      <span class="date">${a[LANG].date}</span><h3>${a[LANG].title}</h3><p>${a[LANG].detail}</p></article>`).join("");
}
function renderLangHobby() {
  $("lang-list").innerHTML = LANGS.map((l) => `<li>${l[LANG]}</li>`).join("");
  $("hobby-list").innerHTML = HOBBIES.map((h) => `<li>${h[LANG]}</li>`).join("");
}

function renderAll() {
  applyStaticI18n();
  renderFormations(); renderExperiences(); renderSkills(); renderProjects();
  renderTools(); renderCerts(); renderAwards(); renderAssoc(); renderLangHobby();
  bindA11y();
  observeVideos();
}
/* Rend les éléments cliquables atteignables au clavier (rôle + tabindex) */
function bindA11y() {
  document.querySelectorAll("[data-open]:not(button)").forEach((el) => {
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
    if (!el.hasAttribute("role")) el.setAttribute("role", "button");
  });
}

/* ---------- 5. DÉLÉGATION D'ÉVÉNEMENTS (un seul écouteur, pas d'empilement) ---------- */
let lastFocusedTrigger = null;
/* Ouvre la page dédiée d'un projet en lui transmettant le thème courant (sombre / clair) */
function goToCaseStudy(url) {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  location.href = url + (url.includes("?") ? "&" : "?") + "theme=" + theme;
}
function openFrom(el) {
  const [type, id] = el.dataset.open.split(":");
  if (type === "project") {                       // un projet s'ouvre sur sa propre page
    const p = PROJECTS.find((x) => x.id === id);
    if (p) { goToCaseStudy(projectUrl(p)); return; }
  }
  if (!$("detail-modal").classList.contains("active")) lastFocusedTrigger = el;
  openDetail(type, id);
}
document.addEventListener("click", (e) => {
  const rep = e.target.closest("[data-report]");
  if (rep) { askPassword(rep.dataset.report); return; }
  const cl = e.target.closest("[data-close]");
  if (cl) { hideModal(cl.dataset.close); return; }
  const op = e.target.closest("[data-open]");
  if (op) openFrom(op);
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const el = e.target.closest && e.target.closest("[data-open]");
  if (el && e.target === el && el.tagName !== "BUTTON") { e.preventDefault(); openFrom(el); }
});
/* Halo qui suit le curseur sur les cartes de compétences */
$("skills-container").addEventListener("pointermove", (e) => {
  const c = e.target.closest(".skill-card");
  if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--mx", (e.clientX - r.left) + "px");
  c.style.setProperty("--my", (e.clientY - r.top) + "px");
});

/* ---------- 6. MODALES ---------- */
function showModal(id) {
  $(id).classList.add("active");
  document.body.style.overflow = "hidden";
  const first = $(id).querySelector("input, .modal-close");
  if (first) first.focus();
}
function hideModal(id) {
  const m = $(id);
  m.classList.remove("active");
  m.querySelectorAll("video").forEach((v) => v.pause());
  if (!document.querySelector(".modal.active")) {
    document.body.style.overflow = "";
    if (lastFocusedTrigger && document.contains(lastFocusedTrigger)) lastFocusedTrigger.focus();
  }
}
function topModal() {
  if ($("pwd-modal").classList.contains("active")) return $("pwd-modal");
  return $("detail-modal").classList.contains("active") ? $("detail-modal") : null;
}
document.addEventListener("keydown", (e) => {
  const m = topModal();
  if (!m) return;
  if (e.key === "Escape") { hideModal(m.id); return; }
  if (e.key !== "Tab") return;
  const f = [...m.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')].filter((x) => !x.hidden && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
["detail-modal", "pwd-modal"].forEach((id) => $(id).addEventListener("click", (e) => { if (e.target.id === id) hideModal(id); }));

function reportButton(p) {
  return p.report ? `<button type="button" class="btn btn-primary" data-report="${p.report}"><i class="fas fa-lock"></i> ${t("modal.report")}</button>` : "";
}

function openDetail(type, id) {
  let html = "";

  if (type === "formation") {
    const f = FORMATIONS.find((x) => x.id === id), x = f[LANG];
    html = `${logoImg(f, x, "modal-logo")}
      <span class="badge modal-eyebrow">${x.date}</span>
      <h2 class="modal-title">${x.place}</h2>
      <span class="modal-date">${x.title}</span>
      <div class="modal-section"><p>${x.intro}</p></div>
      <div class="modal-section"><h5>${t("modal.content")}</h5>${bulletList(x.details)}</div>
      <div class="modal-section"><h5>${t("modal.excellence")}</h5>${bulletList(x.excellence)}</div>`;
  }
  else if (type === "skill") {
    const s = SKILLS.find((x) => x.id === id);
    html = `<span class="badge modal-eyebrow ${s.group === "telecom" ? "" : "soft"}">${t("groups." + s.group)}</span>
      <h2 class="modal-title">${s[LANG].title}</h2>
      <div class="modal-section"><p>${s[LANG].detail}</p></div>
      <div class="modal-section"><h5>${t("modal.whatICanDo")}</h5><p>${s[LANG].short}</p></div>`;
  }
  else if (type === "tool") {
    const [g, i] = id.split("-"), x = TOOLS.filter((y) => y.group === g)[i];
    html = `<span class="badge modal-eyebrow ${g === "telecom" ? "" : "soft"}">${t("groups." + g)}</span>
      ${renderMedia(x.img, x[LANG].name, x.icon || "fa-toolbox", "badge-lg", "modal-image")}
      <h2 class="modal-title">${x[LANG].name}</h2>
      <div class="modal-section"><p>${x[LANG].detail}</p></div>`;
  }
  else if (type === "cert") {
    const [g, i] = id.split("-"), x = CERTS.filter((y) => y.group === g)[i];
    html = `<span class="badge modal-eyebrow ${g === "telecom" ? "" : "soft"}">${t("groups." + g)}</span>
      ${renderMedia(x.img, x[LANG].title, "fa-certificate", "badge-lg", "modal-cert")}
      <h2 class="modal-title">${x[LANG].title}</h2>
      <div class="modal-section"><h5>${t("modal.whatLearned")}</h5><p>${x[LANG].detail}</p></div>
      ${x.url ? `<a class="modal-verify" href="${x.url}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> ${t("modal.verify")}</a>` : ""}`;
  }
  else if (type === "exp") {
    const e = EXPERIENCES.find((x) => x.id === id), x = e[LANG];
    const grp = e.telecom ? "telecom" : "polyvalence";
    html = `<span class="badge modal-eyebrow ${e.telecom ? "" : "soft"}">${t("groups." + grp)}</span>
      <h2 class="modal-title">${x.role}</h2>
      <span class="modal-date">${x.company} — ${x.date}</span>
      <div class="modal-section"><h5>${t("modal.context")}</h5>${x.detail.split("\n\n").map((p) => `<p>${p}</p>`).join("")}</div>
      <div class="modal-section"><h5>${t("modal.skillsUsed")}</h5>${bulletList(x.bullets)}</div>
      ${(x.technologies || e.technologies) ? `<div class="modal-section"><h5>${t("modal.technologies")}</h5>${tagList(x.technologies || e.technologies)}</div>` : ""}
      ${x.results ? `<div class="modal-section"><h5>${t("modal.results")}</h5>${bulletList(x.results)}</div>` : ""}`;
  }
  else if (type === "project") {
    const p = PROJECTS.find((x) => x.id === id), x = p[LANG];
    const fromList = !p.featured;
    html = `${projMedia(p, "media-lg", "modal-media")}
      <span class="badge modal-eyebrow">${t("cats." + p.cat)}</span>
      <h2 class="modal-title">${x.title}</h2>
      <span class="modal-date">${x.date}</span>
      <div class="modal-section"><h5>${t("modal.context")}</h5><p>${x.context || x.desc}</p></div>
      ${x.objectives ? `<div class="modal-section"><h5>${t("modal.objectives")}</h5>${bulletList(x.objectives)}</div>` : ""}
      ${x.technologies ? `<div class="modal-section"><h5>${t("modal.technologies")}</h5>${tagList(x.technologies)}</div>` : ""}
      ${x.results ? `<div class="modal-section"><h5>${t("modal.results")}</h5>${bulletList(x.results)}</div>` : ""}
      ${(p.caseStudyUrl || p.report || fromList) ? `<div class="modal-actions">
        ${p.caseStudyUrl ? `<a href="${p.caseStudyUrl}" class="btn btn-primary"><i class="fas fa-arrow-up-right-from-square"></i> ${t("modal.caseStudy")}</a>` : ""}
        ${reportButton(p)}
        ${fromList ? `<button type="button" class="btn btn-outline" data-open="allprojects:all"><i class="fas fa-arrow-left"></i> ${t("projets.back")}</button>` : ""}
      </div>` : ""}`;
  }
  else if (type === "allprojects") {
    const cats = [...new Set(PROJECTS.map((p) => p.cat))];
    html = `<h2 class="modal-title">${t("projets.allTitle")}</h2><div style="height:1rem"></div>` + cats.map((c) => `
      <div class="plist-group"><h4>${t("cats." + c)}</h4>
        ${PROJECTS.filter((p) => p.cat === c).map((p) => `
          <div class="plist-item" data-open="project:${p.id}">
            <div><b>${p[LANG].title}</b><span class="d">${p[LANG].desc}</span></div>
            ${p.report ? `<i class="fas fa-lock lock" aria-hidden="true"></i>` : ""}
          </div>`).join("")}
      </div>`).join("");
  }

  $("detail-modal").querySelector(".modal-content").classList.toggle("wide", type === "cert");
  $("modal-body").innerHTML = html;
  $("detail-modal").querySelector(".modal-content").scrollTop = 0;
  bindA11y();
  observeVideos();
  showModal("detail-modal");
}

/* ---------- 7. RAPPORTS PROTÉGÉS PAR MOT DE PASSE ----------
   ATTENTION : la vérification se fait dans le navigateur. Elle décourage les curieux mais ne
   protège pas réellement un fichier hébergé publiquement (voir README pour une vraie protection). */
let pendingReport = null, attempts = 0, lockUntil = 0;
const MAX_ATTEMPTS = 5;

function askPassword(path) {
  pendingReport = path;
  $("pwd-input").value = "";
  $("pwd-error").textContent = Date.now() < lockUntil ? t("pwd.locked") : "";
  showModal("pwd-modal");
}
async function sha256Hex(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
$("pwd-cancel").addEventListener("click", () => hideModal("pwd-modal"));
$("pwd-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = $("pwd-input"), err = $("pwd-error");
  if (Date.now() < lockUntil) { err.textContent = t("pwd.locked"); return; }
  if (!(window.crypto && crypto.subtle)) { err.textContent = t("pwd.noCrypto"); return; }
  const hash = await sha256Hex(input.value);
  if (hash === CONFIG.REPORT_PASSWORD_SHA256) {
    attempts = 0; err.textContent = "";
    hideModal("pwd-modal");
    window.open(pendingReport, "_blank", "noopener");
    return;
  }
  attempts++;
  input.classList.remove("shake"); void input.offsetWidth; input.classList.add("shake");
  if (attempts >= MAX_ATTEMPTS) { lockUntil = Date.now() + 30000; attempts = 0; err.textContent = t("pwd.locked"); }
  else err.textContent = t("pwd.wrongLeft") + (MAX_ATTEMPTS - attempts);
  input.select();
});

/* ---------- 8. LANGUE & THÈME ---------- */
$("lang-toggle").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn || btn.dataset.lang === LANG) return;
  LANG = btn.dataset.lang;
  try { localStorage.setItem("lang", LANG); } catch (_) {}
  ["detail-modal", "pwd-modal"].forEach((id) => $(id).classList.contains("active") && hideModal(id));
  renderAll();
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

/* ---------- 9. NAVIGATION, DÉFILEMENT, HERO ---------- */
const navbar = $("navbar"), scrollProgress = $("scroll-progress"), backToTop = $("back-to-top");
const sectionsForSpy = document.querySelectorAll("section[id]");
let ticking = false;
function onScrollFrame() {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 50);
  backToTop.classList.toggle("visible", y > 600);
  const d = document.documentElement, max = d.scrollHeight - d.clientHeight;
  scrollProgress.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
  sectionsForSpy.forEach((sec) => {
    const link = document.querySelector(`.nav-link[data-target="${sec.id}"]`);
    if (link) link.classList.toggle("active", y > sec.offsetTop - 130 && y <= sec.offsetTop - 130 + sec.offsetHeight);
  });
  ticking = false;
}
window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScrollFrame); ticking = true; } }, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

const navToggle = $("nav-toggle"), navMenu = $("nav-menu");
function closeMenu() { navMenu.classList.remove("active"); navToggle.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); }
navToggle.addEventListener("click", () => {
  const open = !navMenu.classList.contains("active");
  navMenu.classList.toggle("active", open);
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});
navMenu.querySelectorAll(".nav-link").forEach((l) => l.addEventListener("click", closeMenu));

/* Lecture des vidéos seulement quand elles sont visibles */
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => { en.isIntersecting ? en.target.play().catch(() => {}) : en.target.pause(); });
}, { threshold: .25 });
function observeVideos() { document.querySelectorAll(".pcard video, #modal-body video").forEach((v) => videoObserver.observe(v)); }

/* Compteurs animés du hero */
function countUp(el, target) {
  if (reduceMotion || target === 0) { el.textContent = target; return; }
  const dur = 1100, start = performance.now();
  requestAnimationFrame(function step(now) {
    const p = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  });
}
let heroRevealed = false;
function revealHero() {
  if (heroRevealed) return;
  heroRevealed = true;
  document.querySelector(".hero-text").classList.add("revealed");
  countUp($("stat-tech"), TOOLS.length);
  countUp($("stat-exp"), EXPERIENCES.length);
  countUp($("stat-proj"), PROJECTS.length);
}
function typeWriter() {
  const el = $("typing-text");
  if (reduceMotion) { el.textContent = NAME; revealHero(); return; }
  let i = 0;
  (function step() {
    if (i < NAME.length) {
      el.innerHTML = NAME.slice(0, ++i) + '<span class="cursor" aria-hidden="true">|</span>';
      setTimeout(step, 65);
    } else {
      el.innerHTML = NAME + '<span class="cursor" aria-hidden="true">|</span>';
      revealHero();
    }
  })();
}

/* ---------- 10. FORMULAIRE DE CONTACT & DÉMARRAGE ---------- */
function showFormMessage(msg, type) {
  const el = $("form-message");
  el.textContent = msg; el.className = "form-message " + type;
  setTimeout(() => { el.className = "form-message"; el.textContent = ""; }, 6000);
}
$("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target.elements;
  if (f.honeypot.value) return;                                  // anti-spam : champ piège rempli = robot
  const name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
  if (!name || !email || !message) return showFormMessage(t("form.fillAll"), "error");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showFormMessage(t("form.badEmail"), "error");

  if (CONFIG.FORM_ACTION) {
    try {
      const r = await fetch(CONFIG.FORM_ACTION, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(e.target) });
      if (!r.ok) throw new Error("http " + r.status);
      e.target.reset(); showFormMessage(t("form.sent"), "success");
    } catch (err) { showFormMessage(t("form.failed"), "error"); }
  } else {
    /* Sans service de formulaire configuré : envoi via WhatsApp */
    const text = `${message}\n\n— ${name} (${email})`;
    window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    e.target.reset();
  }
});

const loadStart = Date.now();
function boot() {
  renderAll();
  onScrollFrame();
  /* l'avatar du hero peut avoir échoué avant l'exécution du script */
  document.querySelectorAll("img[data-fallback-icon]").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
  });
  typeWriter();
  setTimeout(() => $("loader").classList.add("hidden"), Math.max(0, 500 - (Date.now() - loadStart)));
  setTimeout(() => { $("loader").classList.add("hidden"); revealHero(); }, 4000);   // sécurité
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
