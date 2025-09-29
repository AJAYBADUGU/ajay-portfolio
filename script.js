/* --------------------------
   Portfolio Script.js
   Author: Ajay Badugu
--------------------------- */

// ========== NAVIGATION ==========
const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" }
];

const navMenu = document.getElementById("nav-menu");
const mobileMenu = document.querySelector("#mobile-menu div");

function renderNav() {
  const links = navItems.map(
    item => `<a href="#${item.id}" class="nav-link">${item.name}</a>`
  ).join("");
  navMenu.innerHTML = links;
  mobileMenu.innerHTML = links;
}
renderNav();

document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// ========== HERO ==========
document.getElementById("hero-role").textContent =
  "AI/ML & Full-Stack Development Enthusiast";

document.getElementById("hero-summary").textContent =
  "A passionate learner in Artificial Intelligence and Machine Learning with hands-on experience in web development and building innovative solutions. Currently pursuing B.Tech in AIML at SRKR Engineering College with a CGPA of 8.01.";

// ========== ABOUT ==========
document.getElementById("about-summary-main").textContent =
  "I'm Ajay, a final-year AIML student with strong fundamentals in AI/ML, full-stack development, and problem-solving. I've completed two summer internships in AI/ML and Web Development, gaining real-world project experience. I love working on impactful projects like healthcare AI solutions and scalable web apps.";

document.getElementById("about-contact-links").innerHTML = `
  <a href="mailto:ajaybadugu@example.com" class="btn-primary">Email Me</a>
  <a href="https://github.com/AJAYBADUGU" target="_blank" class="btn-secondary">GitHub</a>
  <a href="https://leetcode.com/u/Ajay_BadugusaImSF" target="_blank" class="btn-secondary">LeetCode</a>
  <a href="https://www.linkedin.com/in/ajaybadugu" target="_blank" class="btn-secondary">LinkedIn</a>
`;

document.getElementById("about-stats").innerHTML = `
  <h4 class="text-xl font-bold text-purple-400 mb-2">Quick Stats</h4>
  <ul class="space-y-3 text-zinc-300">
    <li>🎓 B.Tech in AIML, SRKR College</li>
    <li>📊 CGPA: 8.01</li>
    <li>💼 2 Internships (AI/ML, Web Dev)</li>
    <li>🏆 150+ LeetCode Problems</li>
  </ul>
`;

// ========== SKILLS ==========
const skills = [
  "Python", "C++", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "React", "Node.js", "MongoDB", "SQL", "Machine Learning", "Deep Learning"
];

document.getElementById("skills-grid").innerHTML =
  skills.map(skill =>
    `<span class="px-4 py-2 rounded-lg bg-zinc-800 text-purple-300 font-medium shadow">
      ${skill}
     </span>`
  ).join("");

document.getElementById("certifications-achievements").innerHTML = `
  <h3 class="text-2xl font-bold text-gray-100 mb-4">Certifications & Achievements</h3>
  <ul class="list-disc list-inside text-zinc-300 space-y-2">
    <li>🏅 Completed AI/ML Internship (2024)</li>
    <li>🏅 Web Development Internship (2024)</li>
    <li>🏆 Solved 150+ LeetCode Problems</li>
    <li>📜 GATE 2026 Aspirant in AIML</li>
  </ul>
`;

// ========== PROJECTS ==========
const projects = [
  {
    title: "FlipShop – E-Commerce App",
    desc: "A complete MERN-stack e-commerce platform with cart, authentication, and payment integration.",
    link: "https://github.com/AJAYBADUGU/E-Commerce-App"
  },
  {
    title: "AI Health Predictor",
    desc: "Machine learning model to predict health risks based on patient data.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    desc: "This responsive portfolio built with HTML, Tailwind CSS, and JavaScript.",
    link: "https://ajaybadugu.github.io/ajay-portfolio/"
  }
];

document.getElementById("projects-grid").innerHTML =
  projects.map(p => `
    <div class="bg-zinc-800 rounded-xl shadow-lg p-6 border border-zinc-700 hover:scale-105 transition duration-300">
      <h3 class="text-xl font-bold text-purple-300 mb-2">${p.title}</h3>
      <p class="text-zinc-400 mb-4">${p.desc}</p>
      <a href="${p.link}" target="_blank" class="btn-primary">View Project</a>
    </div>
  `).join("");

// ========== EXPERIENCE ==========
const timeline = [
  {
    year: "2022-2026",
    title: "B.Tech in AIML",
    desc: "SRKR Engineering College, CGPA 8.01"
  },
  {
    year: "2024",
    title: "AI/ML Internship",
    desc: "Worked on healthcare-related AI solutions."
  },
  {
    year: "2024",
    title: "Web Development Internship",
    desc: "Built full-stack applications and APIs."
  }
];

document.getElementById("timeline-container").innerHTML =
  timeline.map(item => `
    <div class="relative pl-8 pb-8 border-l-2 border-purple-500">
      <span class="absolute -left-3 top-1.5 w-5 h-5 rounded-full bg-purple-500"></span>
      <h4 class="text-lg font-semibold text-purple-300">${item.year}</h4>
      <h5 class="text-xl font-bold text-gray-100">${item.title}</h5>
      <p class="text-zinc-400">${item.desc}</p>
    </div>
  `).join("");

// ========== CONTACT ==========
document.getElementById("contact-info").innerHTML = `
  <p class="text-zinc-300">📧 Email: <a href="mailto:ajaybadugu@example.com" class="text-purple-400">ajaybadugu@example.com</a></p>
  <p class="text-zinc-300">🔗 GitHub: <a href="https://github.com/AJAYBADUGU" target="_blank" class="text-purple-400">github.com/AJAYBADUGU</a></p>
  <p class="text-zinc-300">💼 LinkedIn: <a href="https://linkedin.com/in/ajaybadugu" target="_blank" class="text-purple-400">linkedin.com/in/ajaybadugu</a></p>
`;

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});

// ========== FOOTER ==========
document.getElementById("current-year").textContent = new Date().getFullYear();

// ========== ICONS ==========
lucide.createIcons();
