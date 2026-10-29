const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();

if (header) {
  header.innerHTML = `
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="index.html" aria-label="Udaya Jeevan Trust home">
        <img src="assets/udaya-jeevan-logo.jpeg" alt="Udaya Jeevan Trust colourful people logo">
        <span class="brand-text"><strong>Udaya Jeevan Trust</strong><small>Chennai</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">☰</button>
      <nav class="nav-links" id="primary-navigation" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <div class="nav-group"><a href="about.html" class="nav-parent">About Us <span class="nav-chevron">⌄</span></a><div class="nav-dropdown">
          <a href="about.html">Overview</a><a href="our-story.html">Our Story</a><a href="vision-mission.html">Vision &amp; Mission</a><a href="objectives.html">Objectives</a><a href="leadership.html">Leadership</a><a href="trust-details.html">Trust Details</a>
        </div></div>
        <div class="nav-group"><a href="programs.html" class="nav-parent">Our Programmes <span class="nav-chevron">⌄</span></a><div class="nav-dropdown">
          <a href="women-empowerment.html">Women Empowerment</a><a href="child-development.html">Child Development</a><a href="health-welfare.html">Health &amp; Welfare</a><a href="livelihoods.html">Livelihoods</a><a href="awareness-campaigns.html">Awareness Campaigns</a><a href="training.html">Training</a>
        </div></div>
        <div class="nav-group"><a href="impact.html" class="nav-parent">Impact &amp; Stories <span class="nav-chevron">⌄</span></a><div class="nav-dropdown">
          <a href="achievements.html">Achievements</a><a href="stories.html">Success Stories</a><a href="photo-gallery.html">Photo Gallery</a><a href="future-vision.html">Future Vision 2026–2030</a>
        </div></div>
        <div class="nav-group"><a href="reports.html" class="nav-parent">Reports &amp; Transparency <span class="nav-chevron">⌄</span></a><div class="nav-dropdown">
          <a href="annual-reports.html">Annual Reports</a><a href="trust-documents.html">Trust Documents</a><a href="financial-reports.html">Financial Reports</a><a href="verified-registrations.html">Verified Registrations</a>
        </div></div>
        <div class="nav-group"><a href="get-involved.html" class="nav-parent">Get Involved <span class="nav-chevron">⌄</span></a><div class="nav-dropdown">
          <a href="donate.html">Donate</a><a href="volunteer.html">Volunteer</a><a href="institutional-partnerships.html">Institutional Partnerships</a><a href="csr-enquiries.html">CSR Enquiries</a>
        </div></div>
        <a href="contact.html">Contact Us</a>
      </nav>
    </div>
  </header>`;
  const menuButton = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    menuButton.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll(".nav-group > .nav-parent").forEach(parent => {
    parent.addEventListener("click", event => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        event.preventDefault();
        const group = parent.closest(".nav-group");
        const wasOpen = group.classList.contains("open");
        nav.querySelectorAll(".nav-group.open").forEach(item => item.classList.remove("open"));
        if (!wasOpen) group.classList.add("open");
      }
    });
  });
  nav.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === currentFile) { link.classList.add("active"); const group = link.closest(".nav-group"); if (group) group.querySelector(".nav-parent")?.classList.add("active"); }
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}
if (footer) {
  footer.innerHTML = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.html"><img src="assets/udaya-jeevan-logo.jpeg" alt="Udaya Jeevan Trust logo"><span class="brand-text"><strong>Udaya Jeevan Trust</strong><small>Chennai</small></span></a>
        <p>Empowering Women · Nurturing Children · Building Sustainable Communities. Community-led work rooted in dignity, inclusion and shared opportunity.</p>
      </div>
      <div><h3 class="footer-title">Explore</h3><div class="footer-links"><a href="about.html">About the Trust</a><a href="programs.html">Our Programmes</a><a href="impact.html">Impact & Achievements</a><a href="stories.html">Community Stories</a><a href="future-vision.html">Future Vision 2026–2030</a></div></div>
      <div><h3 class="footer-title">Get involved</h3><div class="footer-links"><a href="get-involved.html">Donate / Support</a><a href="get-involved.html">Volunteer</a><a href="get-involved.html">CSR Partnerships</a><a href="contact.html">Contact the Trust</a></div></div>
      <div class="footer-contact"><h3 class="footer-title">Contact</h3><p>No: 14/27, MH Road, Moolakadai,<br>Chennai – 600 060, Tamil Nadu</p><p><a href="tel:+919884902374">9884902374</a> · <a href="tel:+917550162296">7550162296</a></p><p><a href="mailto:udhayajeevan09@gmail.com">udhayajeevan09@gmail.com</a></p><p>Established 26 November 2009<br>Legal and tax details should be verified before publication.</p></div>
    </div>
    <div class="footer-bottom"><span>© <span id="year-now"></span> Udaya Jeevan Trust. All rights reserved.</span><span><a href="about.html#legal">Organisation details</a> · English website; Tamil language support can be added.</span></div>
  </footer>`;
  const year = footer.querySelector("#year-now");
  if (year) year.textContent = new Date().getFullYear();
}

// Accessible animated counters for non-impact navigation highlights.
const counters = document.querySelectorAll("[data-count]");
if ("IntersectionObserver" in window && counters.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = Number(el.dataset.count), suffix = el.dataset.suffix || "";
      const start = performance.now(), duration = 1300;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => observer.observe(el));
} else {
  counters.forEach(el => el.textContent = Number(el.dataset.count).toLocaleString("en-IN") + (el.dataset.suffix || ""));
}

// Demo contact forms open a prefilled email; no visitor data is stored or transmitted by this static site.
document.querySelectorAll("[data-mail-form]").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Website enquiry: ${data.get("interest") || "General enquiry"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not supplied"}`,
      `Organisation: ${data.get("organisation") || "Not supplied"}`,
      `Interest: ${data.get("interest") || "General enquiry"}`,
      "",
      "Message:",
      data.get("message")
    ].join("\n");
    window.location.href = `mailto:udhayajeevan09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
