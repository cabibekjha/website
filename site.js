(function () {
  "use strict";
  var menuBtn = document.getElementById("menuBtn"), navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) { if (e.target.tagName === "A") { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
  }
  document.querySelectorAll(".yr").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  var today = new Date();
  document.querySelectorAll("[data-expires]").forEach(function (el) {
    var exp = new Date(el.getAttribute("data-expires") + "T00:00:00");
    if (!isNaN(exp) && today >= exp) el.hidden = true;
  });
})();
