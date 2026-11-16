'use strict';

/* ============================================================
   Shared data + components for the Lance McHan static site
   ============================================================ */

const ORIGIN = 'https://www.lancemchan.com';

const SITE = {
  origin: ORIGIN,
  agent: 'Lance McHan',
  agentFull: 'Lance McHan, REALTOR®',
  brokerage: 'Cornerstone Real Estate Group',
  phone: '(209) 279-2235',
  phoneHref: 'tel:+12092792235',
  email: 'lance@lancemchan.com',
  street: '611 Lincoln Center',
  city: 'Stockton',
  state: 'CA',
  zip: '95207',
  addressLine: '611 Lincoln Center, Stockton, CA 95207',
  license: '01987449',
  brokerLicense: '01037761',
  rating: '5.0',
  reviewCount: '1238',
  reviewCountPretty: '1,238',
  googleReviews: 'https://maps.google.com/?cid=12463006545790073597',
  cdreProfile: 'https://www.ilumniinstitute.com/cdre/lance-mchan',
  formAction: 'https://vision.leadrai.com/api/forms/9bda3a915c13b192327a0718ef2731c0',
  tagline: 'Yes, you can with Lance McHan.'
};

const SOCIALS = [
  { name: 'Facebook', url: 'https://www.facebook.com/LanceMcHan209/' },
  { name: 'Instagram', url: 'https://www.instagram.com/lancemchan_broker/?hl=en' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lancemchanstocktonrealtor/' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UC_dfsko7pPuS8bPkO71pkpQ' },
  { name: 'X (Twitter)', url: 'https://twitter.com/lancemchan' },
  { name: 'Zillow', url: 'https://www.zillow.com/profile/McHanLance' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/lancemch/pins/' },
  { name: 'Google', url: 'https://g.co/kgs/5tzhHNQ' }
];

const IMG = {
  logoWordmark: { src: '/images/source/21-h200-original-73620120-2b95-447f-9731-96c486b16657.png', w: 719, h: 200, alt: 'Yes You Can With Lance McHan logo' },
  logoCornerstone: { src: '/images/source/22-h200-original-1157c480-1f89-41df-946a-399e9861a174.png', w: 167, h: 200, alt: 'Cornerstone Real Estate Group logo' },
  markCornerstone: { src: '/images/source/25-h60-202666-8e2f67ab7b6144fd.png', w: 58, h: 60, alt: 'Cornerstone Real Estate Group mark' },
  cdre: { src: '/images/source/26-h60-original-cd168a3a-71cd-4bfa-a893-979bc0edbdfa.png', w: 49, h: 60, alt: 'Certified Divorce Real Estate Expert logo' },
  masters: { src: '/images/source/27-h60-2026513-6ebbd54a79e746e7.png', w: 46, h: 60, alt: 'Lodi Association of Realtors Masters Club 2025 Life Member badge' },
  google: { src: '/images/source/24-fca51e28-d699-4dae-9bb2-4e68413af6db-googlemybusiness.svg', w: 22, h: 22, alt: 'Google logo' },
  lance: { src: '/images/source/23-h600-original-6d76de69-bf4d-4093-916c-289495ab999a.png', w: 600, h: 600, alt: 'Lance McHan, REALTOR® with Cornerstone Real Estate Group in Stockton, California' },
  lanceAlt: { src: '/images/source/28-w600-original-b98e5334-971a-4a0c-9790-cd36df91dcdf.png', w: 600, h: 600, alt: 'Portrait of Stockton REALTOR® Lance McHan seated on brick steps' },
  hero: { src: '/images/source/29-original-de3a752e-c329-4eba-84df-6de2e2d74c25.jpg', w: 1500, h: 999, alt: 'Back deck of a waterfront home with patio furniture looking out across the water toward neighbouring houses' },
  seniors: { src: '/images/source/30-w600-original-830e95ff-64db-42d9-a0b1-8e76a315fd14.png', w: 600, h: 425, alt: 'Retired couple holding hands in lawn chairs on a sunny lawn' },
  luxuryDusk: { src: '/images/source/17-h600-original-2e4f54db-446f-4273-abc2-fd52f3410772.jpg', w: 903, h: 600, alt: 'Two contemporary luxury homes with tall gabled windows lit from inside at dusk' },
  luxuryGlass: { src: '/images/source/13-h600-original-39f2e23d-784c-40d7-acc9-a31172d5337b.jpg', w: 899, h: 600, alt: 'White contemporary home with a full-height glass entry, lit at dusk' },
  luxuryHillside: { src: '/images/source/12-h600-original-4ebb294e-40d2-446d-8480-0cbe92ae9b46.jpg', w: 900, h: 600, alt: 'Timber-clad contemporary home on a sloping lawn with warm interior lighting' },
  sold1: { src: '/images/source/18-w600-original-pmfldcmgdadqicdmg9rtyuoqvywg4p1v9zllk96potclop.jpg', w: 600, h: 399, alt: 'Single family home on E Hobart Avenue in Stockton sold by Cornerstone Real Estate Group' },
  sold2: { src: '/images/source/19-w600-original-pmdrdsigdabge8epdtbm24a0reyggb1-jc97-zlvmjvrbx.jpg', w: 600, h: 399, alt: 'Single family home on N Airport Way in Stockton sold by Cornerstone Real Estate Group' },
  sold3: { src: '/images/source/20-w600-original-pmdrrsigeaxqfcefyun13a2jix0jhztzf4w-pzkhgzz3ya.jpg', w: 600, h: 399, alt: 'Single family home on S Union Street in Stockton sold by Cornerstone Real Estate Group' }
};

/* ---------------- Reviews (verbatim, real) ---------------- */

const GOOGLE_REVIEWS = [
  {
    quote: 'Had a wonderful experience with Lance. I reached out for a consultation, and he was extremely responsive, even offering an appointment that very same day. He is knowledgeable, professional, and very transparent about what the process of putting your home on the market entails.',
    name: 'Judith B.',
    source: '5 stars on Google'
  },
  {
    quote: 'Lance and his team did an amazing job selling a home for me. As a successor trustee there was a lot of stress and details that came along with this home and Lance was able to step in and resolve several issue and lighten the stress load. Thank you for a job well done.',
    name: 'Jeramy N.',
    source: '5 stars on Google'
  },
  {
    quote: 'Lance was very professional during our consultation. He was able to answer all of our questions confidently and assured us he had a strong team to back him. He definitely has the experience and it shows. I would recommend him for any real estate needs.',
    name: 'Wilbert B.',
    source: '5 stars on Google'
  }
];

const SITE_REVIEWS = [
  {
    quote: 'Lance McHan and his team made the sale of the property a wonderful experience. They are caring skilled professionals that I highly recommend to sellers and buyers',
    name: 'denise estrada',
    source: 'Google review'
  },
  {
    quote: 'Lance and Sheri were fantastic in selling our property. They were incredibly responsive and kept us updated throughout the entire process!',
    name: 'Charlie Chres',
    source: 'Google review'
  },
  {
    quote: 'Lance and his team are very responsive and helpful throughout the process 👍',
    name: 'Vicheka Chres',
    source: 'Google review'
  }
];

const ALL_REVIEWS = GOOGLE_REVIEWS.concat(SITE_REVIEWS);

/* ---------------- Service areas ---------------- */

const CITIES = [
  { slug: 'stockton', name: 'Stockton', county: 'San Joaquin County', blurb: 'Lincoln Village, Brookside, Spanos Park, downtown waterfront' },
  { slug: 'lodi', name: 'Lodi', county: 'San Joaquin County', blurb: 'Downtown Lodi, Woodbridge, Acampo, vineyard acreage' },
  { slug: 'manteca', name: 'Manteca', county: 'San Joaquin County', blurb: 'New subdivisions, established streets, 55+ communities' },
  { slug: 'tracy', name: 'Tracy', county: 'San Joaquin County', blurb: 'Commuter corridor along I-205 and I-580' },
  { slug: 'modesto', name: 'Modesto', county: 'Stanislaus County', blurb: 'Stanislaus County homes, acreage and land' },
  { slug: 'elk-grove', name: 'Elk Grove', county: 'Sacramento County', blurb: 'Sacramento County family neighbourhoods' }
];

const NEIGHBOURHOODS = [
  { path: '/neighborhood/11325890/Elk-Grove/', name: 'Elk Grove', blurb: 'Sacramento County' },
  { path: '/neighborhood/11325888/Escalon/', name: 'Escalon', blurb: 'San Joaquin County' },
  { path: '/neighborhood/11325884/French-Camp/', name: 'French Camp', blurb: 'San Joaquin County' },
  { path: '/neighborhood/11325885/Ripon/', name: 'Ripon', blurb: 'San Joaquin County' }
];

const AREA_SERVED = ['Stockton', 'Lodi', 'Manteca', 'Tracy', 'Lathrop', 'Modesto', 'Ripon', 'Galt', 'Escalon', 'French Camp', 'Elk Grove'];

/* ---------------- Navigation ---------------- */

const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Sell', href: '/sell/', children: [
      { label: 'Sell your home & free valuation', href: '/sell/' },
      { label: 'Recently sold by Lance', href: '/sold-listing/' }
    ]
  },
  {
    label: 'Buy', href: '/buy/', children: [
      { label: 'Buy a home with Lance', href: '/buy/' },
      { label: 'Start a home search', href: '/listing/' },
      { label: 'Featured homes', href: '/featured-listing/' },
      { label: 'Open houses', href: '/open-house-listings/' },
      { label: 'Mortgage calculator', href: '/mortgage-calculator/' },
      { label: 'Home financing basics', href: '/home-mortgage/' }
    ]
  },
  {
    label: 'Specialties', href: '/probate-trust/', children: [
      { label: 'Probate & trust sales', href: '/probate-trust/' },
      { label: 'Divorce real estate (CDRE)', href: '/divorce-real-estate/' },
      { label: '55+ community moves', href: '/55-plus-communities/' }
    ]
  },
  {
    label: 'Areas', href: '/areas/', children: [
      { label: 'All service areas', href: '/areas/' },
      { label: 'Stockton', href: '/areas/stockton/' },
      { label: 'Lodi', href: '/areas/lodi/' },
      { label: 'Manteca', href: '/areas/manteca/' },
      { label: 'Tracy', href: '/areas/tracy/' },
      { label: 'Modesto', href: '/areas/modesto/' },
      { label: 'Elk Grove', href: '/areas/elk-grove/' }
    ]
  },
  {
    label: 'Reviews', href: '/reviews/', children: [
      { label: 'Client reviews', href: '/reviews/' },
      { label: 'Zillow reviews', href: '/zillow-reviews/' },
      { label: 'Open house updates', href: '/open-house-listings-3/' }
    ]
  },
  { label: 'About', href: '/about-lance-mchan/' },
  { label: 'Contact', href: '/contact/' }
];

/* ---------------- Helpers ---------------- */

function decodeEntities(str) {
  return String(str)
    .replace(/&mdash;/g, '\u2014')
    .replace(/&ndash;/g, '\u2013')
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&ldquo;/g, '\u201C')
    .replace(/&rdquo;/g, '\u201D')
    .replace(/&middot;/g, '\u00B7')
    .replace(/&rarr;/g, '\u2192')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function img(o, opts) {
  opts = opts || {};
  const cls = opts.class ? ` class="${opts.class}"` : '';
  const loading = opts.eager ? '' : ' loading="lazy" decoding="async"';
  const sizes = opts.sizes ? ` sizes="${opts.sizes}"` : '';
  const alt = opts.alt !== undefined ? opts.alt : o.alt;
  return `<img src="${o.src}" width="${o.w}" height="${o.h}" alt="${esc(alt)}"${cls}${loading}${sizes}>`;
}

const STARS = '★★★★★';

function ratingBadge(variant) {
  const cls = variant === 'light' ? 'rating rating--light' : 'rating';
  return `<a class="${cls}" href="${SITE.googleReviews}" target="_blank" rel="noopener">
        <span class="score">${SITE.rating}</span>
        <span>
          <span class="stars" aria-hidden="true">${STARS}</span>
          <span class="meta">${SITE.rating} stars from ${SITE.reviewCountPretty} reviews<br><u>Read our reviews on Google</u></span>
        </span>
      </a>`;
}

function callBtn(cls) {
  return `<a class="btn ${cls || 'btn-outline'}" href="${SITE.phoneHref}">Call ${SITE.phone}</a>`;
}

function bookBtn(cls, label) {
  return `<a class="btn ${cls || 'btn-gold'}" href="/contact/">${label || 'Book a Consultation'}</a>`;
}

/* ---------------- Header & drawer ---------------- */

function header(current) {
  const navItems = NAV.map(function (item) {
    const isCurrent = item.href === current ? ' aria-current="page"' : '';
    if (!item.children) {
      return `<li><a href="${item.href}"${isCurrent}>${esc(item.label)}</a></li>`;
    }
    const sub = item.children.map(function (c) {
      const cur = c.href === current ? ' aria-current="page"' : '';
      return `<li><a href="${c.href}"${cur}>${esc(c.label)}</a></li>`;
    }).join('\n            ');
    const anyCurrent = item.children.some(function (c) { return c.href === current; }) || item.href === current;
    return `<li>
            <a href="${item.href}"${anyCurrent ? ' aria-current="page"' : ''}>${esc(item.label)} <span class="caret" aria-hidden="true"></span></a>
            <ul class="submenu">
            ${sub}
            </ul>
          </li>`;
  }).join('\n          ');

  return `<header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="Lance McHan, REALTOR® — home">
          ${img(IMG.logoWordmark, { eager: true, alt: 'Yes You Can With Lance McHan, REALTOR®' })}
          <span class="brand-divider" aria-hidden="true"></span>
          ${img(IMG.logoCornerstone, { eager: true, class: 'brand-logo-2', alt: 'Cornerstone Real Estate Group' })}
        </a>
        <nav class="nav" aria-label="Primary">
          <ul>
          ${navItems}
          </ul>
        </nav>
        <div class="header-cta">
          <a class="header-phone" href="${SITE.phoneHref}">
            <span class="lbl">Call or text</span>
            <span class="num">${SITE.phone}</span>
          </a>
          ${bookBtn('btn-gold btn-sm')}
        </div>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-drawer">
          <span class="bars" aria-hidden="true"><span></span></span> Menu
        </button>
      </div>
    </header>`;
}

function drawer() {
  const items = NAV.map(function (item, i) {
    if (!item.children) return `<li><a href="${item.href}">${esc(item.label)}</a></li>`;
    const id = 'dsub-' + i;
    const sub = item.children.map(function (c) {
      return `<li><a href="${c.href}">${esc(c.label)}</a></li>`;
    }).join('\n              ');
    return `<li>
            <button class="d-toggle" type="button" aria-expanded="false" aria-controls="${id}">${esc(item.label)} <span class="plus" aria-hidden="true">+</span></button>
            <ul class="d-sub" id="${id}">
              ${sub}
            </ul>
          </li>`;
  }).join('\n          ');

  return `<div class="drawer" id="site-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
      <div class="drawer-scrim"></div>
      <div class="drawer-panel">
        <div class="drawer-head">
          ${img(IMG.logoWordmark, { alt: 'Lance McHan, REALTOR®', eager: true })}
          <button class="drawer-close" type="button" aria-label="Close menu">&times;</button>
        </div>
        <nav aria-label="Mobile">
          <ul>
          ${items}
          </ul>
        </nav>
        <div class="drawer-foot">
          ${bookBtn('btn-gold btn-block')}
          ${callBtn('btn-outline btn-block')}
          <p class="rating-line">${SITE.rating} <span aria-hidden="true">${STARS}</span> from ${SITE.reviewCountPretty} Google reviews</p>
        </div>
      </div>
    </div>`;
}

/* ---------------- Footer ---------------- */

function footer() {
  const socialLinks = SOCIALS.map(function (s) {
    return `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`;
  }).join('\n            ');

  return `<footer class="site-footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            ${img(IMG.logoWordmark, { alt: 'Yes You Can With Lance McHan, REALTOR®' })}
            <p><strong style="color:#fff">${SITE.brokerage}</strong><br>Lance McHan License ID: ${SITE.license}</p>
            <p><a href="${SITE.phoneHref}">${SITE.phone}</a><br>
            <a href="mailto:${SITE.email}">${SITE.email}</a></p>
            <p>${SITE.addressLine}<br>United States</p>
            <p>Here 24/7, start to finish.</p>
          </div>
          <div>
            <h2 class="f-h">Work with Lance</h2>
            <ul class="footer-links">
              <li><a href="/sell/">Sell &amp; free home valuation</a></li>
              <li><a href="/buy/">Buy a home</a></li>
              <li><a href="/probate-trust/">Probate &amp; trust sales</a></li>
              <li><a href="/divorce-real-estate/">Divorce real estate</a></li>
              <li><a href="/55-plus-communities/">55+ community moves</a></li>
              <li><a href="/mortgage-calculator/">Mortgage calculator</a></li>
              <li><a href="/home-mortgage/">Home financing basics</a></li>
              <li><a href="/sold-listing/">Recently sold</a></li>
            </ul>
          </div>
          <div>
            <h2 class="f-h">Service areas</h2>
            <ul class="footer-links">
              ${CITIES.map(function (c) { return `<li><a href="/areas/${c.slug}/">${c.name} real estate</a></li>`; }).join('\n              ')}
              <li><a href="/areas/">All areas &amp; neighborhoods</a></li>
              ${NEIGHBOURHOODS.map(function (n) { return `<li><a href="${n.path}">${n.name} neighborhood</a></li>`; }).join('\n              ')}
            </ul>
          </div>
          <div>
            <h2 class="f-h">More</h2>
            <ul class="footer-links">
              <li><a href="/about-lance-mchan/">About Lance McHan</a></li>
              <li><a href="/reviews/">Client reviews</a></li>
              <li><a href="/zillow-reviews/">Zillow reviews</a></li>
              <li><a href="/featured-listing/">Featured homes</a></li>
              <li><a href="/listing/">Start a home search</a></li>
              <li><a href="/open-house-listings/">Open houses</a></li>
              <li><a href="/open-house-listings-3/">Open house updates</a></li>
              <li><a href="/contact/">Contact &amp; book a consultation</a></li>
            </ul>
            <h2 class="f-h" style="margin-top:26px">Follow Lance</h2>
            <ul class="socials">
            ${socialLinks}
            </ul>
          </div>
        </div>

        <div class="footer-badges">
          ${img(IMG.markCornerstone, { alt: 'Cornerstone Real Estate Group logo' })}
          <a href="${SITE.cdreProfile}" target="_blank" rel="noopener">${img(IMG.cdre, { alt: 'Certified Divorce Real Estate Expert logo' })}</a>
          ${img(IMG.masters, { alt: 'Lodi Association of Realtors Masters Club 2025 Life Member badge' })}
          <a class="review-link" href="/review">Leave us a review</a>
        </div>

        <div class="footer-legal">
          <div class="eho">
            <svg viewBox="0 0 64 64" role="img" aria-label="Equal Housing Opportunity logo"><path d="M32 8 4 28h8v28h16V40h8v16h16V28h8L32 8zm0 7.6L50 29.1V50H42V34H22v16h-8V29.1L32 15.6z"/></svg>
            <p style="margin:0">Equal Housing Opportunity. We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the nation.</p>
          </div>
          <p style="margin:0">Lance McHan, REALTOR® — California DRE License ID ${SITE.license}. ${SITE.brokerage}, DRE ${SITE.brokerLicense}. ${SITE.addressLine}.</p>
          <p style="margin:0">&copy; ${new Date().getFullYear()} ${SITE.brokerage}. All rights reserved. Information deemed reliable but not guaranteed. This website does not display third-party MLS listing data — for current availability, <a href="/contact/">contact Lance directly</a>.</p>
        </div>
      </div>
    </footer>`;
}

function mobileBar() {
  return `<div class="mobile-bar">
      <a href="${SITE.phoneHref}">Call Lance</a>
      <a href="/sell/">Free Valuation</a>
    </div>`;
}

/* ---------------- Forms ---------------- */

const CONSENT = 'By submitting this form you agree that Lance McHan and Cornerstone Real Estate Group may contact you by phone, text message (SMS) and email about your request. Message and data rates may apply, message frequency varies, and you can reply STOP at any time to opt out. Your information is never sold.';

const F = {
  name: { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name', placeholder: 'First and last name' },
  phone: { name: 'phone', label: 'Phone', type: 'tel', required: true, autocomplete: 'tel', placeholder: '(209) 555-0123' },
  email: { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email', placeholder: 'you@example.com' },
  address: { name: 'Property address', label: 'Property address', type: 'text', required: true, autocomplete: 'street-address', placeholder: 'Street, city, CA', full: true },
  propertyType: {
    name: 'Property type', label: 'Property type', type: 'select', required: true,
    options: ['Single family home', 'Condo or townhome', 'Multi-family', 'Acreage or ranch', 'Land', 'Commercial', '55+ community home', 'Other']
  },
  timeline: {
    name: 'Timeline', label: 'When do you want to move?', type: 'select', required: true,
    options: ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', '6–12 months', 'Just researching for now']
  },
  need: {
    name: 'Service needed', label: 'What do you need help with?', type: 'select', required: true,
    options: ['Selling a home', 'Buying a home', 'Free home valuation', 'Probate or trust sale', 'Divorce real estate (CDRE)', '55+ community move', 'Land, acreage or commercial', 'Something else']
  },
  message: { name: 'Message', label: 'Anything Lance should know?', type: 'textarea', full: true, placeholder: 'Tell Lance about your property, timing or questions.' }
};

function field(f) {
  const id = 'f-' + f.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const req = f.required ? ' required' : '';
  const reqMark = f.required ? ' <span class="req" aria-hidden="true">*</span>' : '';
  const cls = 'field' + (f.full ? ' field--full' : '');
  let control;
  if (f.type === 'select') {
    control = `<select id="${id}" name="${esc(f.name)}"${req}>
            <option value="">Please choose…</option>
            ${f.options.map(function (o) { return `<option value="${esc(o)}">${esc(o)}</option>`; }).join('\n            ')}
          </select>`;
  } else if (f.type === 'textarea') {
    control = `<textarea id="${id}" name="${esc(f.name)}" rows="4"${req} placeholder="${esc(f.placeholder || '')}"></textarea>`;
  } else {
    const value = f.value ? ` value="${esc(f.value)}"` : '';
    control = `<input id="${id}" type="${f.type}" name="${esc(f.name)}"${req}${f.autocomplete ? ` autocomplete="${f.autocomplete}"` : ''} placeholder="${esc(f.placeholder || '')}"${value}>`;
  }
  return `<div class="${cls}">
          <label for="${id}">${esc(f.label)}${reqMark}</label>
          ${control}
        </div>`;
}

/**
 * opts: { formName, title, note, fields, submit, successText, id }
 */
function form(opts) {
  const fields = opts.fields.map(field).join('\n        ');
  const two = opts.fields.length > 2 ? ' field-grid--2' : '';
  return `<div class="form-card" id="${opts.id || 'request'}">
      <form data-leadr method="POST" action="${SITE.formAction}">
        <div class="form-success" role="status">
          <h3>Thanks, your message was sent</h3>
          <p>${opts.successText || 'Lance McHan will follow up personally. Need an answer right now? Call or text ' + SITE.phone + '.'}</p>
        </div>
        <div class="form-body">
          ${opts.title ? `<h3>${esc(opts.title)}</h3>` : ''}
          ${opts.note ? `<p class="form-note">${opts.note}</p>` : ''}
          <input type="hidden" name="_form" value="${esc(opts.formName)}">
          <input type="hidden" name="_page" value="">
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" style="display:none">
          <div class="field-grid${two}">
            ${fields}
          </div>
          <p class="consent">${CONSENT}</p>
          <p class="form-error" role="alert">We couldn't send that just now. Please call or text ${SITE.phone} and Lance will take care of you.</p>
          <button class="btn btn-gold btn-block" type="submit">${esc(opts.submit || 'Send my request')}</button>
        </div>
      </form>
    </div>`;
}

/* ---------------- FAQ ---------------- */

function faqBlock(items, prefix) {
  prefix = prefix || 'faq';
  const html = items.map(function (it, i) {
    const id = prefix + '-' + i;
    return `<div class="faq-item">
          <h3 style="margin:0"><button class="faq-q" type="button" aria-expanded="false" aria-controls="${id}">${esc(it.q)} <span class="ico" aria-hidden="true"></span></button></h3>
          <div class="faq-a" id="${id}">${it.a}</div>
        </div>`;
  }).join('\n        ');
  return `<div class="faq">\n        ${html}\n      </div>`;
}

/* ---------------- Reusable sections ---------------- */

function reviewCarousel(reviews, opts) {
  opts = opts || {};
  const cards = reviews.map(function (r) {
    return `<li class="review">
            <div class="stars" aria-label="5 out of 5 stars">${STARS}</div>
            <blockquote>&ldquo;${esc(r.quote)}&rdquo;</blockquote>
            <footer>
              ${img(IMG.google, { class: 'glogo', alt: 'Google' })}
              <span><span class="r-name">${esc(r.name)}</span><br><span class="r-src">${esc(r.source)}</span></span>
            </footer>
          </li>`;
  }).join('\n          ');
  return `<div class="carousel">
        <ul class="carousel-track" tabindex="0" aria-label="Client reviews">
          ${cards}
        </ul>
        <div class="carousel-nav">
          <button class="carousel-btn" type="button" data-car="prev" aria-label="Previous review">&#8592;</button>
          <button class="carousel-btn" type="button" data-car="next" aria-label="Next review">&#8594;</button>
        </div>
      </div>${opts.hideLink ? '' : `
      <p class="mb-0" style="margin-top:18px"><a href="${SITE.googleReviews}" target="_blank" rel="noopener">Read our reviews on Google</a> &middot; <a href="/reviews/">See all reviews</a></p>`}`;
}

function trustStrip() {
  const items = [
    { k: SITE.rating + ' ★ Google rating', v: SITE.reviewCountPretty + ' reviews. <a href="' + SITE.googleReviews + '" target="_blank" rel="noopener">Read our reviews on Google</a>.' },
    { k: 'Certified Divorce Real Estate Expert', v: 'Trained to handle court-involved and divorce home sales.' },
    { k: 'Masters Club 2025 Life Member', v: 'Lodi Association of Realtors Masters Club.' },
    { k: 'Here 24/7, start to finish', v: 'Luxury listing specialist with Cornerstone Real Estate Group.' }
  ];
  return `<section class="trust" aria-label="Credentials and trust signals">
      <div class="wrap">
        <div class="trust-grid">
          ${items.map(function (i) { return `<div class="trust-item"><span class="t-k">${i.k}</span><p class="t-v">${i.v}</p></div>`; }).join('\n          ')}
        </div>
      </div>
    </section>`;
}

function chooser() {
  const choices = [
    { n: '01', t: 'Sell my home', d: 'Pricing, prep and a marketing plan built for your property.', href: '/sell/' },
    { n: '02', t: 'Buy a home', d: 'Search strategy, financing basics and offers that get accepted.', href: '/buy/' },
    { n: '03', t: 'Probate or trust', d: 'Guidance for executors, administrators and successor trustees.', href: '/probate-trust/' },
    { n: '04', t: 'Divorce', d: 'A neutral, court-aware approach from a Certified Divorce Real Estate Expert.', href: '/divorce-real-estate/' },
    { n: '05', t: '55+ move', d: 'Sell the family home and find the right 55 and up community.', href: '/55-plus-communities/' }
  ];
  return `<div class="chooser">
        ${choices.map(function (c) {
    return `<a class="choice reveal" href="${c.href}">
          <span class="c-n">${c.n}</span>
          <span class="c-t">${c.t}</span>
          <p class="c-d">${c.d}</p>
          <span class="c-go">Start here <span aria-hidden="true">&rarr;</span></span>
        </a>`;
  }).join('\n        ')}
      </div>`;
}

function areasGrid(exclude) {
  const tiles = CITIES.filter(function (c) { return c.slug !== exclude; }).map(function (c) {
    return `<a class="area reveal" href="/areas/${c.slug}/">
          <span class="a-s">${c.county}</span>
          <span class="a-n">${c.name}</span>
          <span class="a-b">${c.blurb}</span>
          <span class="a-go" aria-hidden="true">&rarr;</span>
        </a>`;
  }).join('\n        ');
  return `<div class="areas">\n        ${tiles}\n      </div>`;
}

function ctaBand(opts) {
  opts = opts || {};
  return `<section class="cta-band${opts.image ? '' : ' cta-band--plain'}">
      ${opts.image ? `<div class="cta-band-media">${img(opts.image, { alt: opts.image.alt })}</div>` : ''}
      <div class="wrap">
        <div class="cta-split">
          <div>
            <p class="eyebrow">${opts.eyebrow || 'Next step'}</p>
            <h2>${opts.title || 'Let&rsquo;s talk about your move'}</h2>
            <p class="lede">${opts.text || 'Tell Lance what you are trying to do and he will map out the options. Here 24/7, start to finish.'}</p>
          </div>
          <div>
            <div class="btn-row" style="margin-bottom:22px">
              ${bookBtn('btn-gold')}
              ${callBtn('btn-ghost-light')}
            </div>
            ${ratingBadge()}
          </div>
        </div>
      </div>
    </section>`;
}

function valuationCta() {
  return `<section class="section section--cream">
      <div class="wrap">
        <div class="cta-split">
          <div>
            <p class="eyebrow">Free home valuation</p>
            <h2>What is your Central Valley home worth today?</h2>
            <p class="lede">Get a no-obligation valuation prepared by Lance McHan for your Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove property &mdash; homes, acreage, land and commercial included.</p>
            <div class="btn-row">
              <a class="btn btn-gold" href="/sell/">Get my free valuation</a>
              ${callBtn('btn-outline')}
            </div>
          </div>
          <div>${ratingBadge('light')}</div>
        </div>
      </div>
    </section>`;
}

function profileCard() {
  return `<div class="profile-card">
        <dl>
          <dt>Call or text</dt>
          <dd><a href="${SITE.phoneHref}">${SITE.phone}</a></dd>
          <dt>Email</dt>
          <dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd>
          <dt>Office</dt>
          <dd>${SITE.addressLine}</dd>
          <dt>License</dt>
          <dd>License ID ${SITE.license} &middot; ${SITE.brokerage} DRE ${SITE.brokerLicense}</dd>
          <dt>Availability</dt>
          <dd>Here 24/7, start to finish</dd>
        </dl>
      </div>`;
}

/* ---------------- JSON-LD ---------------- */

function agentNode() {
  return {
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': ORIGIN + '/#agent',
    name: 'Lance McHan, REALTOR® — Cornerstone Real Estate Group',
    alternateName: 'Lance McHan',
    description: 'Lance McHan is a REALTOR® and luxury listing specialist with Cornerstone Real Estate Group in Stockton, California, serving San Joaquin, Stanislaus and Sacramento counties. Certified Divorce Real Estate Expert handling home sales, probate and trust sales, 55+ community moves, acreage, land and commercial property.',
    url: ORIGIN + '/',
    image: ORIGIN + IMG.lance.src,
    logo: ORIGIN + IMG.logoWordmark.src,
    telephone: '+1-209-279-2235',
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
      addressCountry: 'US'
    },
    parentOrganization: {
      '@type': 'RealEstateAgent',
      name: SITE.brokerage,
      identifier: 'DRE ' + SITE.brokerLicense
    },
    identifier: 'License ID ' + SITE.license,
    areaServed: AREA_SERVED.map(function (a) { return { '@type': 'City', name: a + ', CA' }; }),
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }],
    sameAs: SOCIALS.map(function (s) { return s.url; }).concat([SITE.googleReviews]),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: '5',
      worstRating: '1'
    },
    review: GOOGLE_REVIEWS.map(function (r) {
      return {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: r.name },
        reviewBody: r.quote,
        publisher: { '@type': 'Organization', name: 'Google' }
      };
    })
  };
}

function breadcrumbNode(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map(function (c, i) {
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: ORIGIN + c.url
      };
    })
  };
}

function faqNode(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(function (it) {
      return {
        '@type': 'Question',
        name: decodeEntities(it.q),
        acceptedAnswer: { '@type': 'Answer', text: decodeEntities(it.a.replace(/<[^>]+>/g, '')).trim() }
      };
    })
  };
}

/* ---------------- Breadcrumb markup ---------------- */

function breadcrumbHtml(crumbs) {
  const last = crumbs.length - 1;
  return `<nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            ${crumbs.map(function (c, i) {
    return i === last
      ? `<li><span aria-current="page">${esc(c.name)}</span></li>`
      : `<li><a href="${c.url}">${esc(c.name)}</a></li>`;
  }).join('\n            ')}
          </ol>
        </nav>`;
}

/* ---------------- Page shell ---------------- */

function page(opts) {
  const url = ORIGIN + opts.path;
  const crumbs = [{ name: 'Home', url: '/' }].concat(opts.crumbs || []);
  const graph = [agentNode(), breadcrumbNode(crumbs)];
  if (opts.faq && opts.faq.length) graph.push(faqNode(opts.faq));
  const ld = { '@context': 'https://schema.org', '@graph': graph };
  const ogImage = ORIGIN + (opts.ogImage || IMG.hero.src);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(opts.title)}</title>
<meta name="description" content="${esc(opts.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0C1724">
<meta name="author" content="Lance McHan, REALTOR®">
<meta property="og:type" content="${opts.path === '/' ? 'website' : 'article'}">
<meta property="og:site_name" content="Lance McHan, REALTOR® — Cornerstone Real Estate Group">
<meta property="og:title" content="${esc(opts.title)}">
<meta property="og:description" content="${esc(opts.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(opts.title)}">
<meta name="twitter:description" content="${esc(opts.description)}">
<meta name="twitter:image" content="${ogImage}">
<meta name="twitter:site" content="@lancemchan">
<meta name="geo.region" content="US-CA">
<meta name="geo.placename" content="Stockton, California">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap"></noscript>
<link rel="stylesheet" href="/css/site.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>
${header(opts.path)}
${drawer()}
<main id="main">
${opts.body}
</main>
${footer()}
${mobileBar()}
<script src="/js/site.js" defer></script>
</body>
</html>
`;
}

module.exports = {
  SITE, SOCIALS, IMG, CITIES, NEIGHBOURHOODS, AREA_SERVED, NAV,
  GOOGLE_REVIEWS, SITE_REVIEWS, ALL_REVIEWS, STARS, CONSENT, F,
  esc, img, page, form, field, faqBlock, reviewCarousel, trustStrip, chooser,
  areasGrid, ctaBand, valuationCta, ratingBadge, callBtn, bookBtn,
  breadcrumbHtml, profileCard
};
