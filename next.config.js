/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 auto-writes AI coding-agent instruction files on every dev/build
  // run; this repo doesn't want those generated.
  agentRules: false,

  // The site is served by GitHub Pages, which only hands back files that are
  // already on disk — so the whole app is pre-rendered to static HTML at build
  // time and `out/` is what gets published.
  output: 'export',

  // With `output: 'export'` this is what decides the shape of the emitted
  // files: `/en/about/index.html` (reachable as /en/about/) rather than
  // `/en/about.html`. Directory-per-route is the form GitHub Pages serves
  // without any rewrite rules, so every internal link in lib/site-data.js
  // ends in a slash to match.
  trailingSlash: true,

  // next/image's optimizer is a server feature and cannot run on Pages. The
  // site uses plain <img> throughout, but this keeps a stray <Image> from
  // failing the export.
  images: { unoptimized: true },

  // NOTE: redirects()/rewrites() do not exist in a static export — there is no
  // server to run them. The old flat URLs from the pre-Next site
  // (/about.html, /services.html, …) are preserved instead by the redirect
  // stubs in public/, and by the Cloudflare rules documented in DEPLOY.md.
};

module.exports = nextConfig;
