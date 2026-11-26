// Writes the redirect stubs and robots.txt that a static export cannot produce
// for itself. Run once; the output is committed under public/.
//
// The sitemap is no longer written here: app/sitemap.js builds it on every
// build, from the live list of pages and blog articles.
const fs = require('fs');
const path = require('path');

const OUT = process.argv[2];
const BASE = 'https://brightvolition.com';
// The pages that existed as flat .html files before the move to Next. Newer
// pages (the blog) never had an old URL, so they need no stub.
const PAGES = ['index', 'about', 'services', 'products', 'projects', 'contact'];

const url = (seg, page) => (page === 'index' ? `${BASE}/${seg}/` : `${BASE}/${seg}/${page}/`);
const target = (seg, page) => (page === 'index' ? `/${seg}/` : `/${seg}/${page}/`);

// The pre-Next site remembered the visitor's language in localStorage under
// "bv-lang" and re-applied it on every page. Reading the same key here means
// someone who had chosen Kurdish before the migration still lands on Kurdish,
// rather than being reset to English by the move to per-language URLs.
const stub = (page) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Bright Volition</title>
<link rel="canonical" href="${url('en', page)}">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0; url=${target('en', page)}">
<script>
(function () {
  var seg = 'en';
  try {
    var saved = localStorage.getItem('bv-lang');
    if (saved === 'ar') seg = 'ar';
    else if (saved === 'ckb' || saved === 'ku') seg = 'ku';
    else {
      var nav = (navigator.language || '').toLowerCase();
      if (nav.indexOf('ar') === 0) seg = 'ar';
      else if (nav.indexOf('ckb') === 0 || nav.indexOf('ku') === 0) seg = 'ku';
    }
  } catch (e) {}
  location.replace(seg === 'en' ? '${target('en', page)}' : '${target('SEG', page)}'.replace('SEG', seg));
})();
</script>
</head>
<body><p>Redirecting to <a href="${target('en', page)}">${target('en', page)}</a>…</p></body>
</html>
`;

for (const page of PAGES) {
  // index.html doubles as the site root: GitHub Pages serves it for "/" too.
  fs.writeFileSync(path.join(OUT, `${page}.html`), stub(page));
}

// The 404 does NOT go in public/ — see scripts/postbuild.mjs for why. It is
// written next to that script and copied over Next's own 404 after the build.
fs.writeFileSync(
  path.join(__dirname, '404.html'),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Page not found — Bright Volition</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="3; url=/en/">
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f6f2f4;color:#201747;
       font:400 16px/1.65 "Segoe UI",Arial,sans-serif;text-align:center;padding:24px}
  h1{font-size:clamp(1.7rem,3.2vw,2.5rem);font-weight:900;margin:0 0 .5em}
  a{color:#201747;font-weight:700}
</style>
</head>
<body>
<div>
  <h1>Page not found</h1>
  <p>Taking you back to <a href="/en/">brightvolition.com</a>…</p>
</div>
</body>
</html>
`,
);

fs.writeFileSync(
  path.join(OUT, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`,
);

console.log(`wrote ${PAGES.length} stubs + scripts/404.html + robots.txt`);
