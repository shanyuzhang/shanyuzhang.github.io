module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    standard: ["lang-en", "lang-cn"],
    // data-lang attribute is set at runtime by lang.js; PurgeCSS cannot detect it
    // statically, so safelist any selector that references it.
    greedy: [/\[data-lang/],
  },
};
