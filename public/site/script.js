/* Onecall Solution — site interactions */
(function () {
  "use strict";

  /* ---------- Inline icon set (stroke SVG, lucide-style) ---------- */
  var P = {
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18a15 15 0 010-18"/>',
    badge: '<circle cx="12" cy="9" r="5"/><path d="M8.5 13L7 21l5-2.5L17 21l-1.5-8"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    tag: '<path d="M3 12l9-9 9 9-9 9z"/><circle cx="12" cy="8" r="1.4"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    clipboard: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 12h6M9 16h4"/>',
    wrench: '<path d="M15 3a6 6 0 00-5.6 8.2L3 17.6 6.4 21l6.4-6.4A6 6 0 1015 3z"/>',
    headset: '<path d="M4 13v-1a8 8 0 0116 0v1"/><rect x="2" y="13" width="5" height="7" rx="2"/><rect x="17" y="13" width="5" height="7" rx="2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    laptop: '<rect x="4" y="5" width="16" height="10" rx="2"/><path d="M2 19h20"/>',
    database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    network: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
    camera: '<path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    fingerprint: '<path d="M12 4a8 8 0 018 8v3"/><path d="M4 12a8 8 0 018-8"/><path d="M7 18a10 10 0 001-6 4 4 0 018 0v5"/><path d="M12 12v6"/>',
    printer: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="7" rx="2"/><path d="M7 16h10v5H7z"/>',
    monitor: '<rect x="2.5" y="4" width="19" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 10v4"/><path d="M6 12h7"/>',
    cloud: '<path d="M7 18a4 4 0 010-8 6 6 0 0111.3 1.6A3.5 3.5 0 0117.5 18z"/>',
    lock: '<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
    wifi: '<path d="M2.5 9a15 15 0 0119 0"/><path d="M6 12.5a10 10 0 0112 0"/><path d="M9.5 16a5 5 0 015 0"/><path d="M12 19.5h.01"/>',
    code: '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
    truck: '<rect x="2" y="7" width="12" height="9" rx="1"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h6v6H9z"/>',
    heart: '<path d="M12 20s-7-4.4-7-9.3A4 4 0 0112 8a4 4 0 017 2.7c0 4.9-7 9.3-7 9.3z"/>',
    cap: '<path d="M2 8l10-4 10 4-10 4z"/><path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"/>',
    factory: '<path d="M3 21V10l5 3V10l5 3V7l6 4v10z"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
    gov: '<path d="M3 10l9-6 9 6"/><path d="M5 10v9M10 10v9M14 10v9M19 10v9M3 21h18"/>',
    pill: '<rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0112 0"/><path d="M16 5.5a3.2 3.2 0 010 6.4M17 20a6 6 0 00-2-4.4"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>',
    move: '<path d="M4 12h12M13 8l4 4-4 4"/><rect x="18" y="4" width="3" height="16" rx="1"/>'
  };

  function icon(name) {
    return '<span class="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || P.check) + "</svg></span>";
  }

  /* ---------- Data ---------- */
  var why = [
    ["layers", "Complete End-to-End IT Solutions", "Procurement, design, deployment and support from one accountable partner."],
    ["globe", "PAN India Service & Support", "Franchise and partner network reaching 16,000+ pin codes across India."],
    ["badge", "Certified Technical Experts", "OEM-certified engineers for networking, security, servers and AV."],
    ["server", "Enterprise IT Infrastructure", "Server, storage, data centre and smart rack solutions built to scale."],
    ["zap", "Fast Response Time", "Smart dispatch allocates tickets by engineer proximity and skill set."],
    ["tag", "Competitive Pricing", "Transparent commercials backed by strong distribution relationships."],
    ["check", "Genuine OEM Products", "Only authentic, warranty-backed hardware from authorised channels."],
    ["clipboard", "Professional Project Management", "Dedicated managers, structured rollouts and clear reporting."],
    ["wrench", "Annual Maintenance Contracts (AMC)", "AMC for switches, routers, firewalls, printers, laptops and servers."],
    ["headset", "Dedicated Customer Support", "Central control hub for ticketing, escalation and client reporting."],
    ["settings", "Customised Business Solutions", "Architectures designed around your users, data and bandwidth."],
    ["shield", "High Service Quality", "Consistent delivery standards, SLA discipline and quality checks on every engagement."],
    ["truck", "On-Time Project Delivery", "Planned timelines, milestone tracking and dependable go-live schedules."],
    ["network", "Scalable IT Infrastructure", "Future-ready designs that grow with your organisation."],
    ["clock", "24×7 Remote Support (Available for Selected Services)", "Round-the-clock remote monitoring and assistance where your contract includes it."]
  ];

  var products = [
    ["laptop", "Computing", ["Laptops", "Desktops", "Workstations"]],
    ["database", "Servers & Storage", ["Servers", "Storage Solutions", "Data Centre Equipment", "Racks & Accessories"]],
    ["network", "Networking", ["Networking Products", "Enterprise Wi-Fi", "Firewalls", "Routers", "Switches", "Access Points"]],
    ["camera", "Surveillance & Security", ["CCTV Surveillance Systems", "IP Cameras", "NVR & DVR", "Video Management Systems", "Video Door Phones", "Smart Home Security"]],
    ["fingerprint", "Access Control", ["Biometric Attendance Systems", "Face Recognition Devices", "Access Control Systems", "Boom Barriers", "Tripod Turnstiles", "Flap Barriers", "Full Height Turnstiles", "Visitor Management Systems", "Smart Locks"]],
    ["printer", "Office Solutions", ["Printers", "Scanners", "Barcode Printers", "POS Machines"]],
    ["monitor", "Audio Visual", ["Interactive Flat Panels", "Digital Signage", "LED Video Walls", "Projectors", "Video Conferencing Systems", "Audio Visual Solutions"]],
    ["battery", "Power", ["UPS Systems", "Power Backup Solutions"]]
  ];

  var services = [
    ["layers", "Infrastructure & Networking", [
      "IT Infrastructure Setup", "Network Design & Implementation", "Structured Cabling",
      "Server Installation", "Firewall Configuration", "Data Centre Services",
      "System Integration", "Virtualisation Solutions"
    ]],
    ["camera", "Security & Surveillance", [
      "CCTV Installation", "Access Control Installation", "Biometric Installation",
      "Cybersecurity Solutions", "Endpoint Security", "Network Security", "VPN Configuration"
    ]],
    ["cloud", "Cloud & Productivity", [
      "Cloud Solutions", "Microsoft 365 Deployment", "Google Workspace Setup",
      "Email Migration", "Cloud Backup"
    ]],
    ["database", "Backup & Continuity", [
      "Data Backup Solutions", "Disaster Recovery Planning"
    ]],
    ["headset", "Support & Managed Services", [
      "Annual Maintenance Contract (AMC)", "Facility Management Services (FMS)",
      "Remote IT Support", "Onsite IT Support", "Managed IT Services",
      "Helpdesk Support", "Hardware Maintenance"
    ]],
    ["settings", "Software & Assets", [
      "Software Installation", "Software Licensing", "IT Asset Management"
    ]],
    ["briefcase", "Consulting & Procurement", [
      "IT Consulting", "Technology Audits", "IT Procurement"
    ]],
    ["zap", "Smart Solutions", [
      "IoT Solutions", "Smart Office Solutions"
    ]]
  ];

  var industries = [
    ["briefcase", "Banking & Financial Services"],
    ["gov", "Government"],
    ["heart", "Healthcare"],
    ["factory", "Manufacturing"],
    ["cart", "Retail"],
    ["cap", "Education"],
    ["users", "Hospitality"],
    ["truck", "Logistics"],
    ["layers", "Warehousing"],
    ["building", "Real Estate"],
    ["laptop", "Corporate Offices"],
    ["code", "IT Companies"],
    ["wifi", "Telecom"],
    ["tag", "E-commerce"],
    ["globe", "Smart Cities"],
    ["settings", "Industrial Plants"],
    ["clipboard", "Co-working Spaces"],
    ["monitor", "Residential Projects"]
  ];

  var values = [
    ["heart", "Customer First"],
    ["zap", "Innovation"],
    ["badge", "Excellence"],
    ["shield", "Integrity"],
    ["globe", "Transparency"],
    ["check", "Reliability"],
    ["clipboard", "Accountability"],
    ["users", "Teamwork"],
    ["settings", "Continuous Improvement"],
    ["layers", "Quality Commitment"]
  ];

  var commitments = [
    ["layers", "High-Quality Products"],
    ["check", "Genuine OEM Brands"],
    ["wrench", "Professional Installation"],
    ["badge", "Certified Engineers"],
    ["zap", "Fast Service Response"],
    ["globe", "PAN India Deployment"],
    ["headset", "Enterprise-Level Support"],
    ["network", "Scalable Technology"],
    ["lock", "Secure Infrastructure"],
    ["users", "Long-Term Partnership"]
  ];

  var partners = ["Cisco", "Dell", "HP", "Lenovo", "Fortinet", "Sophos", "Microsoft", "AWS", "Aruba", "Netgear", "D-Link", "Canon", "Epson", "Brother", "Poly", "Logitech"];

  var clients = ["Hiranandani", "Piramal", "AU Bank", "Indian Railways", "Global Pay", "Alkem", "Hinduja", "Rizvi Foundation", "TechConnect", "Recoup Health"];

  /* ---------- Render ---------- */
  function html(id, markup) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = markup;
  }

  html("whyGrid", why.map(function (w) {
    return '<article class="card reveal">' + icon(w[0]) + "<h3>" + w[1] + "</h3><p>" + w[2] + "</p></article>";
  }).join(""));

  html("productGrid", products.map(function (p) {
    return '<article class="card reveal">' + icon(p[0]) + "<h3>" + p[1] + '</h3><ul class="tags">' +
      p[2].map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></article>";
  }).join(""));

  html("serviceList", services.map(function (s) {
    return '<article class="card reveal">' + icon(s[0]) + "<h3>" + s[1] + '</h3><ul class="tags">' +
      s[2].map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></article>";
  }).join(""));

  html("industryGrid", industries.map(function (i) {
    return '<article class="card industry reveal">' + icon(i[0]) + "<h3>" + i[1] + "</h3></article>";
  }).join(""));

  html("valuesGrid", values.map(function (v) {
    return '<article class="card industry reveal">' + icon(v[0]) + "<h3>" + v[1] + "</h3></article>";
  }).join(""));

  html("commitmentGrid", commitments.map(function (c) {
    return '<article class="card industry reveal">' + icon(c[0]) + "<h3>" + c[1] + "</h3></article>";
  }).join(""));

  html("partnerTrack", partners.concat(partners).map(function (p) {
    return '<div class="logo-chip">' + p + "</div>";
  }).join(""));

  html("clientGrid", clients.map(function (c) {
    return '<div class="client reveal">' + c + "</div>";
  }).join(""));

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header scroll ---------- */
  var header = document.getElementById("header");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en, idx) {
      if (!en.isIntersecting) return;
      var el = en.target;
      setTimeout(function () { el.classList.add("is-in"); }, Math.min(idx * 70, 350));
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- Count up ---------- */
  var counters = document.querySelectorAll(".count");
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      var target = parseInt(el.dataset.target, 10);
      var suffix = el.dataset.suffix || "";
      var start = performance.now();
      function step(now) {
        var t = Math.min((now - start) / 1400, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      co.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(function (el) { co.observe(el); });

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      note.className = "form__note";
      note.textContent = "Please fill in your name, phone and a valid email.";
      form.reportValidity();
      return;
    }
    var d = new FormData(form);
    var body = [
      "Name: " + (d.get("name") || ""),
      "Company: " + (d.get("company") || ""),
      "Phone: " + (d.get("phone") || ""),
      "Email: " + (d.get("email") || ""),
      "",
      d.get("message") || ""
    ].join("\n");
    window.location.href =
      "mailto:sales@onecallsolution.in?subject=" +
      encodeURIComponent("Website enquiry — " + (d.get("company") || d.get("name") || "New lead")) +
      "&body=" + encodeURIComponent(body);
    note.className = "form__note ok";
    note.textContent = "Thank you! Your email client is opening — or call us on +91 9113326092.";
    form.reset();
  });

  /* ---------- Remove Lovable watermark if injected ---------- */
  function stripLovableBadge() {
    var badge = document.getElementById("lovable-badge");
    if (badge) badge.remove();
  }
  stripLovableBadge();
  new MutationObserver(stripLovableBadge).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
