/* Bright Volition — shared site behaviour */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "bv-lang";

  /* ---------------- language toggle ---------------- */
  var RTL_LANGS = ["ar", "ckb"];

  function applyLang(lang, persist) {
    var isRtl = RTL_LANGS.indexOf(lang) !== -1;
    root.classList.toggle("lang-ar", lang === "ar");
    root.classList.toggle("lang-ckb", lang === "ckb");
    root.setAttribute("lang", lang);
    root.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(saved === "ar" || saved === "ckb" ? saved : "en", false);

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"), true);
      });
    });
  }

  /* ---------------- mobile nav ---------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  /* ---------------- active nav link ---------------- */
  function markActiveNav() {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a[href]").forEach(function (a) {
      var href = a.getAttribute("href").split("/").pop();
      if (href === path) a.classList.add("active");
    });
  }

  /* ---------------- scroll reveal ---------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- header shadow + back to top ---------------- */
  function initScrollFx() {
    var header = document.querySelector(".site-header");
    var top = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.style.borderBottomColor = y > 8 ? "#201747" : "#B4B5DF";
      if (top) top.classList.toggle("show", y > 500);
    }, { passive: true });
    if (top) {
      top.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ---------------- contact form (client-side, mailto fallback) ---------------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("[name=name]").value.trim();
      var email = form.querySelector("[name=email]").value.trim();
      var subject = form.querySelector("[name=subject]").value.trim() || "Website enquiry";
      var message = form.querySelector("[name=message]").value.trim();
      var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
      var mailto = "mailto:info@brightvolition.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
      window.location.href = mailto;
      var note = document.getElementById("form-note");
      if (note) note.style.display = "block";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initNav();
    markActiveNav();
    initReveal();
    initScrollFx();
    initContactForm();
  });
})();
