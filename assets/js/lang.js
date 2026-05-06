// Language toggle: EN <-> CN. Mirrors the theme.js pattern so visibility
// is set synchronously in <head> to avoid a flash of the wrong language.

let determineLangSetting = () => {
  let lang = localStorage.getItem("site-lang");
  if (lang !== "cn" && lang !== "en") {
    lang = "en";
  }
  return lang;
};

let setLang = (lang) => {
  localStorage.setItem("site-lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
};

let toggleLang = () => {
  let cur = determineLangSetting();
  setLang(cur === "en" ? "cn" : "en");
};

let initLang = () => {
  setLang(determineLangSetting());

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", toggleLang);
    }
  });
};
