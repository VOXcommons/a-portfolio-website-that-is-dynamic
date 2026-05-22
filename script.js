const projects = [
  {
    title: "VOXcommons",
    category: "infrastructure",
    summary: "A participatory voice infrastructure for language and AI in low-bandwidth, low-literacy environments.",
    role: "Founder, researcher, UX designer, systems designer, creative technologist, full-stack prototype developer",
    tools: "Twilio, Flask, FastAPI, React, TypeScript, Tailwind CSS, Streamlit, Pandas, Whisper, Hugging Face, NLLB-200",
    outcome: "Reframes AI accessibility as an infrastructure problem and proposes community-owned speech datasets.",
    type: "2026 research prototype",
    link: "assets/Mawa-Keita-Resume-2026.pdf",
    tags: ["Voice", "AI Equity", "Language"],
    colors: ["#063b38", "#0f7470", "#d89221"],
    icon: "V",
    topImage: "assets/woman-on-phone.jpeg",
    topImageAlt: "Woman smiling while holding a phone outdoors.",
    image: "assets/voxcommons-language-ai-poster.png",
    imageAlt: "VOXcommons poster asking whether AI speaks your language and showing voice data infrastructure steps.",
    details: [
      {
        heading: "Prototype interface",
        images: [
          {
            src: "assets/voxcommons-dashboard-overview.png",
            alt: "VOXcommons dashboard overview showing sessions, pending validations, callback success rate, and activity trends.",
          },
          {
            src: "assets/voxcommons-validation-queue.png",
            alt: "VOXcommons validation queue with waveform regions, quick annotations, and reviewer notes.",
          },
        ],
      },
      {
        heading: "Problem",
        body: "Most AI systems assume people can read, type, access the internet, and communicate in globally dominant languages. That excludes oral and underrepresented language communities, including Maninkakan, Susu, and Pular speakers in Guinea.",
      },
      {
        heading: "Solution",
        body: "VOXcommons uses simple phone calls and IVR flows to collect, organize, validate, and export spoken language data that can support speech recognition, translation, health communication, and future AI systems.",
      },
      {
        heading: "Key features",
        items: [
          "Missed-call callback workflow for low-cost access",
          "Consent and multilingual IVR navigation",
          "Audio waveform visualization and real-time contribution display",
          "Human validation, annotation, and CSV / Parquet dataset export",
        ],
      },
      {
        heading: "Next steps",
        items: [
          "Conduct field research and data collection in Guinea",
          "Expand support for Susu and Pular",
          "Develop community governance models for language datasets",
        ],
      },
    ],
  },
  {
    title: "AI Health Literacy App",
    category: "health",
    summary: "A multilingual health education platform for Guinea that turns verified information into plain language, voice, and visuals.",
    role: "Concept, UX design, AI prototyping, research",
    tools: "Python, Streamlit, Replit AI Agent, RunwayML, Figma",
    outcome: "Shifts AI from diagnostic authority toward community education, health literacy, and empowerment.",
    type: "2025 - present research prototype",
    link: "assets/Mawa-Keita-Resume-2026.pdf",
    tags: ["Health", "AI", "Education"],
    colors: ["#d89221", "#f1dcc0", "#b7370b"],
    icon: "H",
    details: [
      {
        heading: "Overview",
        body: "The AI Health Literacy App improves access to understandable health information by translating and simplifying verified content into local languages and visual formats.",
      },
      {
        heading: "Problem",
        body: "In Guinea, limited literacy levels, linguistic diversity, and inconsistent access to health education contribute to misinformation and delayed care-seeking. Many digital health tools are built in French or English, creating barriers for rural communities.",
      },
      {
        heading: "Solution",
        items: [
          "AI translation and summarization for plain-language health content",
          "Voice and visual modes for users with limited reading ability",
          "Community-verified content for local trust and accuracy",
          "Offline-first direction for low-connectivity regions",
        ],
      },
      {
        heading: "Next steps",
        items: [
          "Curate content for common illnesses",
          "Co-design iconography and voice models with native speakers",
          "Pilot with local health NGOs and rural health centers",
        ],
      },
    ],
  },
  {
    title: "AI Medical Triage Assistant",
    category: "health",
    summary: "A culturally-aware triage prototype exploring how AI can support early care decisions in Guinea.",
    role: "Concept, UX design, AI prototyping",
    tools: "Python, Streamlit, Replit AI Agent, Glide App, ChatGPT",
    outcome: "Evolved from diagnostic prediction toward safer health literacy and user empowerment.",
    type: "2025 - present research prototype",
    link: "assets/Mawa-Keita-Resume-2026.pdf",
    tags: ["Triage", "Ethics", "Prototype"],
    colors: ["#034a47", "#0f7470", "#f1dcc0"],
    icon: "T",
    details: [
      {
        heading: "Overview",
        body: "The AI Medical Triage Assistant helps users describe symptoms in plain language and receive non-diagnostic guidance about whether to seek urgent care, visit a clinic, or manage symptoms at home.",
      },
      {
        heading: "Problem",
        body: "Healthcare access in Guinea is limited, especially in rural areas. Linguistic and literacy barriers further limit trust and adoption because many tools do not support local languages or culturally familiar dialogue patterns.",
      },
      {
        heading: "Design process",
        items: [
          "Mapped health-seeking behaviors, mobile access, and traditional care pathways",
          "Built an early Streamlit prototype with sample symptom dialogues",
          "Reviewed risks including overconfidence bias and model misclassification",
        ],
      },
      {
        heading: "Key features",
        items: [
          "Simple empathetic chat interface",
          "Text and audio interaction options",
          "Local language support direction",
          "Visual symptom cards for low-literacy accessibility",
        ],
      },
    ],
  },
  {
    title: "EMK Language Documentation App",
    category: "language",
    summary: "An AI-assisted documentation platform for preserving Eastern Maninkakan audio, translation, and cultural metadata.",
    role: "Concept, UX design, AI prototyping, research",
    tools: "Python, Streamlit, Replit AI Agent, RunwayML, Figma",
    outcome: "Frames AI as a tool for cultural preservation, data sovereignty, and linguistic inclusion.",
    type: "2025 - present research prototype",
    link: "assets/Mawa-Keita-Resume-2026.pdf",
    tags: ["EMK", "Archive", "AI Ethics"],
    colors: ["#fff7e9", "#d89221", "#034a47"],
    icon: "L",
    details: [
      {
        heading: "Overview",
        body: "The EMK Language Documentation App preserves, documents, and revitalizes Eastern Maninkakan through AI-assisted transcription, translation, and speaker-contributed audio archives.",
      },
      {
        heading: "Problem",
        body: "Maninkakan and other Mande languages remain underrepresented in digital corpora and AI language systems. Documentation efforts are often fragmented and not designed for community-friendly use.",
      },
      {
        heading: "Solution",
        items: [
          "AI speech-to-text for EMK recordings",
          "Collaborative translation workspace",
          "Linguistic tagging for phonetic, lexical, and cultural notes",
          "Community data ownership controls",
        ],
      },
      {
        heading: "Impact",
        body: "The project reframes technology as a collaborative medium for memory, language, and belonging rather than a tool of extraction.",
      },
    ],
  },
  {
    title: "AccessGuide / LUNA",
    category: "accessibility",
    summary: "A Runway-powered Chrome extension that explores AI characters as real-time guides for complex web interfaces.",
    role: "Interaction designer, prototype developer, accessibility researcher",
    tools: "Runway Characters, LiveKit WebRTC, Chrome Extension APIs, JavaScript, content scripts, postMessage bridge",
    outcome: "Demonstrates conversational AI as a persistent cognitive and navigational support layer for the web.",
    type: "2026 research prototype",
    link: "assets/Mawa-Keita-Resume-2026.pdf",
    tags: ["LUNA", "Web", "Access"],
    colors: ["#151312", "#0f7470", "#b7370b"],
    icon: "A",
    details: [
      {
        heading: "Problem",
        body: "Many digital systems assume users understand complex onboarding flows, forms, portals, and online workflows. Traditional accessibility tools do not always address confusion, cognitive load, or uncertainty about what to do next.",
      },
      {
        heading: "Concept",
        body: "AccessGuide layers Luna, a live AI character, over existing webpages so users can ask for step-by-step guidance, voice navigation, element explanations, and simplified instructions.",
      },
      {
        heading: "Technical architecture",
        items: [
          "content.js handles DOM analysis, field tracking, highlighting, and region selection",
          "panel.html and panel.js host Runway and LiveKit sessions",
          "A bidirectional postMessage bridge synchronizes web context and Luna's guidance",
        ],
      },
      {
        heading: "Outcome",
        body: "The prototype shows how AI characters can move beyond isolated chat interfaces and become contextual guides layered onto live digital environments.",
      },
    ],
  },
];

const root = document.documentElement;
const workGrid = document.querySelector("#workGrid");
const modal = document.querySelector("#projectModal");
const modalArt = document.querySelector("#modalArt");
const modalTitle = document.querySelector("#modalTitle");
const modalCategory = document.querySelector("#modalCategory");
const modalDescription = document.querySelector("#modalDescription");
const modalMeta = document.querySelector("#modalMeta");
const modalLink = document.querySelector("#modalLink");
const progressBar = document.querySelector(".progress span");

document.querySelector("#year").textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

document.querySelector("#themeToggle").addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

function setArtVars(element, colors) {
  element.style.setProperty("--art-a", colors[0]);
  element.style.setProperty("--art-b", colors[1]);
  element.style.setProperty("--art-c", colors[2]);
}

function renderProjects(activeFilter = "all") {
  workGrid.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("button");
    card.className = "project-card";
    card.type = "button";
    card.dataset.category = project.category;
    card.dataset.projectIndex = index;
    card.style.animationDelay = `${index * 70}ms`;
    if (activeFilter !== "all" && project.category !== activeFilter) {
      card.classList.add("hidden");
    }

    const art = document.createElement("div");
    art.className = "project-art";
    art.dataset.icon = project.icon;
    setArtVars(art, project.colors);

    card.innerHTML = `
      <div>
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <footer>
        <span class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</span>
        <span aria-hidden="true">Open</span>
      </footer>
    `;
    card.prepend(art);
    workGrid.appendChild(card);
  });
}

function getProjectFromCard(card) {
  const index = Number(card.dataset.projectIndex);
  if (Number.isInteger(index) && projects[index]) {
    return projects[index];
  }

  return projects.find((project) => card.textContent.includes(project.title));
}

workGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card || !workGrid.contains(card)) return;

  const project = getProjectFromCard(card);
  if (project) {
    openProject(project);
  }
});

workGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".project-card");
  if (!card || !workGrid.contains(card)) return;

  event.preventDefault();
  const project = getProjectFromCard(card);
  if (project) {
    openProject(project);
  }
});

function openProject(project) {
  setArtVars(modalArt, project.colors);
  modalArt.innerHTML = project.topImage && project.image
    ? `
      <img class="modal-art-top" src="${project.topImage}" alt="${project.topImageAlt}" />
      <img class="modal-art-bottom" src="${project.image}" alt="${project.imageAlt}" />
    `
    : project.image
      ? `<img src="${project.image}" alt="${project.imageAlt}" />`
      : "";
  modalArt.classList.toggle("has-image", Boolean(project.image));
  modalArt.classList.toggle("stacked-media", Boolean(project.topImage && project.image));
  modalArt.style.backgroundImage = "";
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.summary;
  modalLink.href = project.link;
  modalLink.textContent = "View resume";
  modal.querySelector(".case-study")?.remove();
  const details = project.details
    .map((section) => {
      if (section.items) {
        return `
          <section class="case-section">
            <h3>${section.heading}</h3>
            <ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
        `;
      }

      if (section.images) {
        return `
          <section class="case-section case-media">
            <h3>${section.heading}</h3>
            ${section.images.map((image) => `<img src="${image.src}" alt="${image.alt}" />`).join("")}
          </section>
        `;
      }

      return `
        <section class="case-section">
          <h3>${section.heading}</h3>
          <p>${section.body}</p>
        </section>
      `;
    })
    .join("");

  modalMeta.innerHTML = `
    <dt>Role</dt><dd>${project.role}</dd>
    <dt>Tools</dt><dd>${project.tools}</dd>
    <dt>Outcome</dt><dd>${project.outcome}</dd>
    <dt>Type</dt><dd>${project.type}</dd>
  `;
  modalMeta.insertAdjacentHTML("afterend", `<div class="case-study">${details}</div>`);
  modal.showModal();
}

document.querySelector(".close-modal").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    renderProjects(chip.dataset.filter);
  });
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message") || ""}`
  );
  window.location.href = `mailto:mawakeita@utexas.edu?subject=${subject}&body=${body}`;
});

window.addEventListener("pointermove", (event) => {
  root.style.setProperty("--x", `${event.clientX}px`);
  root.style.setProperty("--y", `${event.clientY}px`);
});

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.setProperty("--progress", `${progress}%`);
});

renderProjects();

const canvas = document.querySelector("#constellation");
const ctx = canvas.getContext("2d");
const stage = canvas.parentElement;
let bars = [];
let pointer = { x: 0.5, y: 0.5 };

function resizeCanvas() {
  const rect = stage.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * ratio);
  canvas.height = Math.floor(rect.height * ratio);
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = Math.max(44, Math.floor(rect.width / 12));
  bars = Array.from({ length: count }, (_, index) => ({
    x: (index + 0.5) * (rect.width / count),
    phase: Math.random() * Math.PI * 2,
    amp: Math.random() * 0.7 + 0.35,
  }));
}

function drawConstellation(time = 0) {
  const rect = stage.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);

  const centerY = rect.height * 0.32;
  ctx.strokeStyle = "rgba(255, 250, 240, 0.86)";
  ctx.lineWidth = 2;
  ctx.beginPath();

  bars.forEach((bar) => {
    const pull = 1 + Math.max(0, 1 - Math.abs(pointer.x * rect.width - bar.x) / 180) * 0.9;
    const height = (22 + Math.sin(time / 280 + bar.phase) * 28 * bar.amp) * pull;
    ctx.moveTo(bar.x, centerY - height);
    ctx.lineTo(bar.x, centerY + height);
  });

  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 250, 240, 0.42)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(rect.width * 0.08, centerY);
  ctx.lineTo(rect.width * 0.92, centerY);
  ctx.stroke();

  requestAnimationFrame(drawConstellation);
}

stage.addEventListener("pointermove", (event) => {
  const rect = stage.getBoundingClientRect();
  pointer = {
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height,
  };
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawConstellation();
