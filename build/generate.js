'use strict';

/* Static site generator — writes every page, sitemap and robots.txt. */

const fs = require('fs');
const path = require('path');

const { SITE } = require('./lib');
const pages = [].concat(require('./pages-main'), require('./pages-extra'));

const ROOT = path.resolve(__dirname, '..');

function outFile(urlPath) {
  if (urlPath === '/') return path.join(ROOT, 'index.html');
  const clean = urlPath.replace(/^\/|\/$/g, '');
  if (/\.html$/.test(clean)) return path.join(ROOT, clean);
  return path.join(ROOT, clean, 'index.html');
}

const written = [];
pages.forEach(function (p) {
  const file = outFile(p.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, p.html);
  written.push(path.relative(ROOT, file));
});

/* ---------------- sitemap.xml ---------------- */

const today = new Date().toISOString().slice(0, 10);
const priority = function (p) {
  if (p === '/') return '1.0';
  if (['/sell/', '/buy/', '/contact/'].indexOf(p) > -1) return '0.9';
  if (p.indexOf('/listing-detail/') === 0) return '0.4';
  return '0.7';
};

const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(function (p) {
    return '  <url>\n' +
      '    <loc>' + SITE.origin + p.path + '</loc>\n' +
      '    <lastmod>' + today + '</lastmod>\n' +
      '    <changefreq>' + (p.path === '/' ? 'weekly' : 'monthly') + '</changefreq>\n' +
      '    <priority>' + priority(p.path) + '</priority>\n' +
      '  </url>';
  }).join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

/* ---------------- robots.txt ---------------- */

fs.writeFileSync(path.join(ROOT, 'robots.txt'),
  'User-agent: *\n' +
  'Allow: /\n\n' +
  'Sitemap: ' + SITE.origin + '/sitemap.xml\n');

/* ---------------- favicon ---------------- */

fs.writeFileSync(path.join(ROOT, 'favicon.svg'),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Lance McHan">' +
  '<rect width="64" height="64" rx="6" fill="#0C1724"/>' +
  '<rect x="4" y="4" width="56" height="56" rx="3" fill="none" stroke="#C2A14F" stroke-width="1.5"/>' +
  '<text x="32" y="43" text-anchor="middle" font-family="Georgia,\'Times New Roman\',serif" font-size="30" font-weight="700" fill="#C2A14F">LM</text>' +
  '</svg>\n');

/* ---------------- image usage audit ---------------- */

const html = written.map(function (f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }).join('\n');
const imgDir = path.join(ROOT, 'images', 'source');
const unused = [];
if (fs.existsSync(imgDir)) {
  fs.readdirSync(imgDir).forEach(function (f) {
    if (html.indexOf('/images/source/' + f) === -1) unused.push(f);
  });
}

console.log('Pages written: ' + written.length);
console.log('Sitemap entries: ' + pages.length);
if (unused.length) {
  console.log('UNUSED source images (' + unused.length + '):');
  unused.forEach(function (f) { console.log('  ' + f); });
} else {
  console.log('All source images referenced.');
}
