document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s),
    $$ = (s) => document.querySelectorAll(s);
  const serviceGrid = $("#serviceGrid"),
    projectGrid = $("#projectGrid"),
    companyGrid = $("#companyGrid"),
    teamGrid = $("#teamGrid");
  if (serviceGrid) serviceGrid.innerHTML = services.map(serviceCard).join("");
  if (projectGrid)
    projectGrid.innerHTML = projects
      .filter((p) => [1, 5].includes(p.id))
      .map(projectCard)
      .join("");
  if (companyGrid) companyGrid.innerHTML = companies.map(companyCard).join("");
  if (teamGrid) teamGrid.innerHTML = team.map(teamCard).join("");

  const toggle = $("#menuToggle"),
    nav = $("#main-nav") || $("#nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }),
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const header = $(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      if (header) header.classList.toggle("scrolled", scrollY > 20);
      const h = document.documentElement.scrollHeight - innerHeight;
      const progress = $("#progress");
      if (progress && h > 0) progress.style.width = (scrollY / h) * 100 + "%";
    },
    { passive: true },
  );

  const reveal = () => {
    $$(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight - 60)
        el.classList.add("visible");
    });
  };
  window.addEventListener("scroll", reveal, { passive: true });
  reveal();

  $$(".stat strong[data-count]").forEach((el) => {
    const target = +el.dataset.count;
    let done = false;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done) {
        done = true;
        let n = 0;
        const step = Math.max(1, Math.ceil(target / 35));
        const timer = setInterval(() => {
          n += step;
          if (n >= target) {
            n = target;
            clearInterval(timer);
          }
          el.textContent = "+" + n;
        }, 30);
        io.disconnect();
      }
    });
    io.observe(el);
  });

  const dot = $(".cursor-dot"),
    ring = $(".cursor-ring");
  if (matchMedia("(pointer:fine)").matches && dot && ring) {
    addEventListener("mousemove", (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    });
    $$(
      "a,.btn,.project-card,.service-card,.company-card,.team-card,.skill-node,.collab-card",
    ).forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.style.width = "44px";
        ring.style.height = "44px";
        ring.style.borderColor = "#79ab8f";
      });
      el.addEventListener("mouseleave", () => {
        ring.style.width = "28px";
        ring.style.height = "28px";
        ring.style.borderColor = "rgba(121,171,143,.65)";
      });
    });
  }

  $$(".tilt").forEach((card) => {
    if (!matchMedia("(pointer:fine)").matches) return;
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect(),
        x = e.clientX - r.left,
        y = e.clientY - r.top;
      card.style.transform = `perspective(800px) rotateX(${-(y - r.height / 2) / 30}deg) rotateY(${(x - r.width / 2) / 30}deg) translateY(-5px)`;
    });
    card.addEventListener("mouseleave", () => (card.style.transform = ""));
  });
  const visual = $(".hero-visual");
  if (visual && matchMedia("(pointer:fine)").matches) {
    addEventListener("mousemove", (e) => {
      const x = (e.clientX / innerWidth - 0.5) * 10,
        y = (e.clientY / innerHeight - 0.5) * 10;
      visual.style.transform = `translate(${x}px,${y}px)`;
    });
  }
});

function refreshReveal() {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight - 60)
      el.classList.add("visible");
  });
}
function serviceCard(s) {
  const iconStyle = s.icon === "fa-instagram" ? "fa-brands" : "fa-solid";
  return `<article class="service-card tilt reveal"><div class="service-icon"><i class="${iconStyle} ${s.icon}"></i></div><h3>${s.title}</h3><p>${s.desc}</p><span class="price">${s.price}</span></article>`;
}
function projectCard(p) {
  const projectImage = p.image
    ? `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('project-image-fallback')">`
    : "";
  return `<a class="project-card reveal tilt" href="project.html?id=${p.id}">
    <div class="project-image ${p.image ? "has-project-image" : "project-image-fallback"}">
      ${projectImage}
      <span class="project-image-icon">${p.icon}</span>
      <span class="project-image-caption">${p.categoryLabel || "نمونه‌کار تک‌رایا"}</span>
    </div>
    <div class="project-body">
      <div class="project-meta"><span>${p.company}</span><span class="project-status">${p.status}</span></div>
      <h3>${p.title}</h3><p>${p.summary}</p>
      <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
  </a>`;
}
function companyCard(c) {
  return `<div class="company-card reveal"><div class="company-logo">${c.logo}</div><b>${c.name}</b><span>${c.tag}</span></div>`;
}
function teamCard(t) {
  return `<article class="team-card reveal"><div class="team-photo"><img src="${t.icon}" alt="${t.alt || t.name}" loading="lazy"></div><h3>${t.name}</h3><p>${t.role}</p></article>`;
}
setTimeout(refreshReveal, 0);
