'use strict';

const L = require('./lib');
const {
  SITE, IMG, GOOGLE_REVIEWS, ALL_REVIEWS, F, CITIES, NEIGHBOURHOODS,
  img, page, form, faqBlock, reviewCarousel, areasGrid, ctaBand, valuationCta,
  ratingBadge, callBtn, bookBtn, breadcrumbHtml, esc
} = L;

function head(o) {
  const media = o.image
    ? `<div class="page-head-media">${img(o.image, { eager: true, alt: o.image.alt })}</div>`
    : '';
  return `<section class="page-head${o.image ? ' page-head--photo' : ''}">
      ${media}
      <div class="wrap">
        ${breadcrumbHtml(o.crumbs)}
        <p class="eyebrow">${o.eyebrow}</p>
        <h1>${o.h1}</h1>
        <p class="lede">${o.lede}</p>
        <div class="btn-row" style="margin-top:28px">
          ${bookBtn('btn-gold')}
          ${callBtn('btn-ghost-light')}
        </div>
        <div style="margin-top:26px">${ratingBadge()}</div>
      </div>
    </section>`;
}

const pages = [];

/* ============================================================
   AREAS INDEX
   ============================================================ */

pages.push({
  path: '/areas/',
  html: page({
    path: '/areas/',
    title: 'Service Areas | Central Valley Real Estate with Lance McHan, REALTOR®',
    description: 'Lance McHan sells and finds homes in Stockton, Lodi, Manteca, Tracy, Modesto, Elk Grove, Lathrop, Ripon, Galt, Escalon and French Camp across San Joaquin, Stanislaus and Sacramento counties.',
    crumbs: [{ name: 'Service areas', url: '/areas/' }],
    body: `
  ${head({
      crumbs: [{ name: 'Home', url: '/' }, { name: 'Service areas', url: '/areas/' }],
      eyebrow: 'Service areas',
      h1: 'Where Lance McHan works in the Central Valley',
      lede: 'San Joaquin, Stanislaus and Sacramento counties &mdash; Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove.'
    })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Cities</p>
        <h2>Pick your city</h2>
        <p class="lede">Each page covers what buying and selling with Lance looks like there, plus a direct line to a free home valuation.</p>
      </div>
      ${areasGrid()}

      <div style="margin:60px 0 26px">
        <p class="eyebrow">Featured communities</p>
        <h2>Neighborhoods and towns</h2>
        <p class="lede">Smaller communities Lance works in across the Valley.</p>
      </div>
      <div class="areas">
        ${NEIGHBOURHOODS.map(function (n) {
      return `<a class="area reveal" href="${n.path}">
          <span class="a-s">${n.blurb}</span>
          <span class="a-n">${n.name}</span>
          <span class="a-b">Featured community</span>
          <span class="a-go" aria-hidden="true">&rarr;</span>
        </a>`;
    }).join('\n        ')}
      </div>

      <div style="margin:60px 0 20px">
        <p class="eyebrow">Also serving</p>
        <h2>More of the Valley</h2>
      </div>
      <p class="lede">Lathrop, Ripon, Galt, Escalon, French Camp, Woodbridge, Lincoln Village, Brookside and the surrounding Sacramento and Modesto areas. If your town is not listed, call ${SITE.phone} &mdash; Lance probably covers it.</p>
      <div class="btn-row" style="margin-top:24px">
        <a class="btn btn-gold" href="/sell/">Get a free valuation</a>
        <a class="btn btn-outline" href="/contact/">Contact Lance</a>
      </div>
    </div>
  </section>

  ${ctaBand({ eyebrow: 'Book a consultation', title: 'Local knowledge, one phone call away', text: 'Call or text ' + SITE.phone + ' and tell Lance which city you are moving to or from.' })}
  `
  })
});

/* ============================================================
   CITY PAGES
   ============================================================ */

const CITY_COPY = {
  stockton: {
    title: 'Stockton Real Estate | Buy or Sell with REALTOR® Lance McHan',
    description: 'Buying or selling a home in Stockton, CA? Lance McHan is a REALTOR® and luxury listing specialist based at 611 Lincoln Center, Stockton. Free home valuation. Call (209) 279-2235.',
    lede: 'Lance McHan&rsquo;s office is at 611 Lincoln Center, right in the middle of the city he works in most. Stockton homes, acreage, land and commercial property.',
    intro: [
      'Stockton is home for Lance McHan. His office sits at 611 Lincoln Center, and most weeks he is somewhere between Lincoln Village, Brookside, Spanos Park, Weston Ranch and the downtown waterfront, looking at properties for sellers and buyers.',
      'Stockton is not one market. A waterfront home on the delta channels sells to a different buyer than a mid-century ranch near Lincoln Center or a new build on the north side, and a commercial building downtown is a different conversation again. That is why the first thing Lance does is look at your specific property rather than quoting a citywide number.'
    ],
    selling: 'Selling in Stockton starts with an honest valuation of your address, a conversation about what is worth doing before listing, and a marketing plan that matches the property &mdash; whether that is a family home, a luxury listing, acreage on the edge of town or a commercial building.',
    buying: 'Buying in Stockton means weighing neighbourhood, schools, commute and what your money gets you in each part of the city. Tell Lance your budget and must-haves and he will send options that are actually available rather than letting you scroll stale listings.',
    local: 'Neighborhoods Lance works in: Lincoln Village, Brookside, Spanos Park, Venetian Gardens, Weston Ranch, Pacific, Morada and the downtown waterfront.',
    img: null,
    headImg: null,
    related: [['/areas/lodi/', 'Lodi'], ['/areas/manteca/', 'Manteca'], ['/areas/tracy/', 'Tracy']]
  },
  lodi: {
    title: 'Lodi Real Estate | Buy or Sell a Lodi, CA Home with Lance McHan',
    description: 'Buying or selling in Lodi, CA? REALTOR® Lance McHan handles Lodi homes, vineyard acreage and land, plus free home valuations. Masters Club 2025 Life Member. Call (209) 279-2235.',
    lede: 'Homes in town, acreage and vineyard land outside it, and the Woodbridge community just north &mdash; Lance McHan works all of it.',
    intro: [
      'Lodi draws people who want a smaller, slower town with real downtown character and wine country on the doorstep. It also has a property mix that catches buyers out: older homes near downtown, newer subdivisions on the edges, and acreage and land parcels out toward Woodbridge, Acampo and Clements.',
      'Lance McHan is a Lodi Association of Realtors Masters Club 2025 Life Member and works throughout the Lodi area with homes, acreage, land and commercial property.'
    ],
    selling: 'Selling a Lodi home or an acreage parcel needs pricing that reflects what the land and improvements actually are, not a per-square-foot average borrowed from Stockton. Lance will value your address specifically and tell you what is worth doing before it lists.',
    buying: 'Buying in Lodi can mean a walkable home near downtown, a newer build with a garage big enough for the toys, or several acres with room for animals. Tell Lance which version you want and he will bring you current options.',
    local: 'Areas Lance works in around Lodi: downtown Lodi, Woodbridge, Acampo, Clements, Lockeford and the surrounding vineyard acreage.',
    img: null,
    headImg: null,
    related: [['/areas/stockton/', 'Stockton'], ['/areas/elk-grove/', 'Elk Grove'], ['/neighborhood/11325885/Ripon/', 'Ripon']]
  },
  manteca: {
    title: 'Manteca Real Estate | Buy or Sell a Manteca, CA Home | Lance McHan',
    description: 'Buying or selling a Manteca, CA home? REALTOR® Lance McHan covers Manteca, Lathrop and Ripon with free home valuations and 55+ community moves. Call (209) 279-2235.',
    lede: 'Newer subdivisions, established neighbourhoods and 55+ communities &mdash; Manteca moves fast and Lance keeps up.',
    intro: [
      'Manteca has grown steadily, and the housing stock shows it: established older streets near the centre, large newer subdivisions toward Lathrop and Ripon, and a good number of 55 and up communities that attract people downsizing from larger Bay Area or Stockton homes.',
      'Lance McHan works throughout Manteca and the neighbouring towns, with homes, acreage, land and commercial property.'
    ],
    selling: 'In a newer subdivision, your competition is often the house two streets over with the same floor plan. Presentation and pricing decide which one sells first. Lance will tell you exactly where your home sits against what else is available.',
    buying: 'Buying in Manteca usually comes down to how new you want the home and how far you want to be from the freeway. Lance knows the difference between the areas and will shortlist what fits, including 55+ community homes.',
    local: 'Nearby: Lathrop, Ripon, French Camp, Escalon and the Stockton and Modesto corridors.',
    img: null,
    headImg: null,
    related: [['/55-plus-communities/', '55+ community moves'], ['/areas/tracy/', 'Tracy'], ['/neighborhood/11325885/Ripon/', 'Ripon']]
  },
  tracy: {
    title: 'Tracy Real Estate | Buy or Sell a Tracy, CA Home with Lance McHan',
    description: 'Buying or selling in Tracy, CA? REALTOR® Lance McHan helps commuters and families with Tracy homes, land and free home valuations. Call (209) 279-2235.',
    lede: 'The commuter end of San Joaquin County &mdash; and a market where timing and presentation matter.',
    intro: [
      'Tracy sits where the Central Valley meets the Bay Area commute, with I-205 and I-580 shaping who buys there. That brings buyers from both directions: families moving east for more house, and locals moving up within the city.',
      'Lance McHan works across Tracy with homes, acreage, land and commercial property, and he is reachable 24/7 &mdash; useful when a buyer is trying to see your house after a long drive home.'
    ],
    selling: 'Tracy buyers often tour in the evening and at weekends, and they compare hard. Getting the home presented properly and priced to the right pocket of the market is what separates a quick sale from a long one. Start with a free valuation of your address.',
    buying: 'Whether you are commuting over the pass or staying local, Lance will set a search around the budget, the commute and the kind of home you want, then handle the offer when you find it.',
    local: 'Also serving nearby Lathrop, Mountain House area buyers, Manteca and Stockton.',
    img: null,
    headImg: null,
    related: [['/areas/manteca/', 'Manteca'], ['/areas/stockton/', 'Stockton'], ['/buy/', 'Buy a home']]
  },
  modesto: {
    title: 'Modesto Real Estate | Buy or Sell a Modesto, CA Home | Lance McHan',
    description: 'Buying or selling in Modesto, CA and Stanislaus County? REALTOR® Lance McHan offers free home valuations, probate and trust sales and 55+ moves. Call (209) 279-2235.',
    lede: 'Stanislaus County homes, acreage and land &mdash; with the same 24/7 service Lance gives San Joaquin County.',
    intro: [
      'Modesto anchors Stanislaus County and offers a different mix again: established neighbourhoods with mature trees, newer development on the edges, and agricultural land just outside the city limits.',
      'Lance McHan works throughout Modesto and the surrounding Stanislaus County communities, including probate and trust sales, divorce sales and 55+ community moves.'
    ],
    selling: 'Whether it is a family home, an estate property or acreage, selling in Modesto starts the same way: a valuation of your specific address and a frank conversation about what the property needs before it goes to market.',
    buying: 'Buying in Modesto gives you options across a wide price range. Tell Lance what matters &mdash; schools, lot size, single level, newer build &mdash; and he will bring current choices rather than listings that sold last month.',
    local: 'Also serving Ripon, Escalon, Salida, Riverbank and the wider Stanislaus County area.',
    img: null,
    headImg: null,
    related: [['/neighborhood/11325885/Ripon/', 'Ripon'], ['/neighborhood/11325888/Escalon/', 'Escalon'], ['/probate-trust/', 'Probate & trust sales']]
  },
  'elk-grove': {
    title: 'Elk Grove Real Estate | Buy or Sell an Elk Grove, CA Home | Lance McHan',
    description: 'Buying or selling in Elk Grove, CA and Sacramento County? REALTOR® Lance McHan offers free home valuations and 24/7 service. Call (209) 279-2235.',
    lede: 'Sacramento County&rsquo;s southern suburbs &mdash; family neighbourhoods, newer builds and easy access up Highway 99.',
    intro: [
      'Elk Grove is the Sacramento County end of Lance&rsquo;s service area, a short run up Highway 99 from Lodi. It attracts families who want newer homes, planned neighbourhoods and good access to Sacramento without living in it.',
      'Lance McHan works with Elk Grove buyers and sellers, including people moving north from San Joaquin County and people heading south to be nearer family.'
    ],
    selling: 'Elk Grove buyers compare homes street by street. A valuation based on your actual address, an honest list of what to fix and what to leave, and proper presentation are what get you the better offer.',
    buying: 'If you are moving to Elk Grove from Stockton, Lodi or Galt, Lance can handle both ends &mdash; selling where you are and buying where you are going &mdash; so the timing lines up.',
    local: 'Also serving Galt, Herald, Wilton and the southern Sacramento County communities.',
    img: null,
    headImg: null,
    related: [['/areas/lodi/', 'Lodi'], ['/neighborhood/11325890/Elk-Grove/', 'Elk Grove community'], ['/sell/', 'Free home valuation']]
  }
};

CITIES.forEach(function (city) {
  const c = CITY_COPY[city.slug];
  const faq = [
    { q: 'Do you charge for a ' + city.name + ' home valuation?', a: '<p>No. Lance prepares a free, no-obligation valuation for your ' + city.name + ' property. <a href="/sell/">Request one here</a>.</p>' },
    { q: 'What types of property do you handle in ' + city.name + '?', a: '<p>Homes, acreage, land and commercial property, plus <a href="/probate-trust/">probate and trust sales</a>, <a href="/divorce-real-estate/">divorce sales</a> and <a href="/55-plus-communities/">55+ community moves</a>.</p>' },
    { q: 'How do I reach Lance about a ' + city.name + ' property?', a: '<p>Call or text ' + SITE.phone + ', email <a href="mailto:' + SITE.email + '">' + SITE.email + '</a>, or <a href="/contact/">book a consultation</a>. Here 24/7, start to finish.</p>' }
  ];

  pages.push({
    path: '/areas/' + city.slug + '/',
    html: page({
      path: '/areas/' + city.slug + '/',
      title: c.title,
      description: c.description,
      crumbs: [{ name: 'Service areas', url: '/areas/' }, { name: city.name, url: '/areas/' + city.slug + '/' }],
      faq: faq,
      ogImage: IMG.hero.src,
      body: `
  ${head({
        crumbs: [{ name: 'Home', url: '/' }, { name: 'Service areas', url: '/areas/' }, { name: city.name, url: '/areas/' + city.slug + '/' }],
        eyebrow: city.county,
        h1: city.name + ' real estate with Lance McHan, REALTOR®',
        lede: c.lede,
      })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <p class="eyebrow">${city.name}, California</p>
          <h2>Buying and selling in ${city.name}</h2>
          ${c.intro.map(function (p) { return '<p>' + p + '</p>'; }).join('\n          ')}
          ${c.img ? `<figure style="margin:34px 0">${img(c.img, { alt: c.img.alt })}<figcaption style="font-size:.85rem;color:var(--muted);margin-top:10px">${esc(c.img.alt)}</figcaption></figure>` : ''}
          <h3>Selling your ${city.name} home</h3>
          <p>${c.selling}</p>
          <h3>Buying in ${city.name}</h3>
          <p>${c.buying}</p>
          <div class="note">
            <strong>${c.local}</strong>
            <p>Call or text Lance at <a href="${SITE.phoneHref}">${SITE.phone}</a> &mdash; here 24/7, start to finish.</p>
          </div>
          <p>Related: ${c.related.map(function (r) { return `<a href="${r[0]}">${r[1]}</a>`; }).join(' &middot; ')}</p>
          <div class="btn-row" style="margin-top:26px">
            <a class="btn btn-gold" href="/sell/">Free ${city.name} home valuation</a>
            <a class="btn btn-outline" href="/contact/">Contact Lance</a>
          </div>
        </div>
        <div class="aside-sticky">
          ${form({
            id: city.slug + '-form',
            formName: city.name + ' enquiry',
            title: 'Ask about ' + city.name,
            note: 'Buying, selling or just weighing it up &mdash; Lance replies personally.',
            submit: 'Send my request',
            successText: 'Thanks &mdash; Lance McHan will get back to you about ' + city.name + '. Need to talk now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Service needed', label: 'What do you need?', type: 'select', required: true, options: ['Sell a home in ' + city.name, 'Buy a home in ' + city.name, 'Free home valuation', 'Probate or trust sale', 'Divorce real estate', '55+ community move', 'Land, acreage or commercial'] },
              { name: 'Property address', label: 'Property address (if you have one)', type: 'text', autocomplete: 'street-address', placeholder: 'Street, ' + city.name + ', CA', full: true },
              F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">${city.name} questions</p>
        <h2>Common questions</h2>
      </div>
      ${faqBlock(faq, city.slug + '-faq')}
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:30px">
        <p class="eyebrow">Nearby</p>
        <h2>Other areas Lance covers</h2>
      </div>
      ${areasGrid(city.slug)}
    </div>
  </section>

  ${ctaBand({
        eyebrow: 'Book a consultation',
        title: 'Thinking about a move in ' + city.name + '?',
        text: 'Call or text ' + SITE.phone + ' or book a consultation with Lance McHan.'
      })}
  `
    })
  });
});

/* ============================================================
   NEIGHBORHOOD PAGES (original site paths)
   ============================================================ */

const HOOD_COPY = {
  'Elk-Grove': {
    eyebrow: 'Sacramento County',
    lede: 'A featured Central Valley community where Lance McHan helps buyers and sellers.',
    paras: [
      'Elk Grove sits just south of Sacramento on the Highway 99 corridor, an easy run north from Lodi and Galt. It is one of the featured communities Lance McHan works in, popular with families who want newer, planned neighbourhoods with room to breathe.',
      'Lance handles both ends of an Elk Grove move: selling the home you are in, wherever in the Valley that is, and finding the next one here.'
    ],
    area: '/areas/elk-grove/', areaLabel: 'Elk Grove area guide'
  },
  'Escalon': {
    eyebrow: 'San Joaquin County',
    lede: 'A small agricultural town between Manteca, Ripon and Modesto.',
    paras: [
      'Escalon is a small town on the San Joaquin and Stanislaus county line, surrounded by orchards and farmland and within easy reach of Manteca, Ripon and Modesto. It appeals to buyers who want space, quiet and a genuine small-town centre.',
      'Lance McHan works in Escalon with homes, acreage and land &mdash; the kinds of property where a valuation has to account for the ground as well as the house.'
    ],
    area: '/areas/modesto/', areaLabel: 'Modesto area guide'
  },
  'French-Camp': {
    eyebrow: 'San Joaquin County',
    lede: 'Just south of Stockton, with a rural feel and quick freeway access.',
    paras: [
      'French Camp sits immediately south of Stockton, with a rural character, larger parcels in places and fast access to Interstate 5 and Highway 99. It is one of the featured communities in Lance McHan&rsquo;s service area.',
      'If you own property in French Camp, Lance will value it on what it actually is &mdash; house, outbuildings, land &mdash; rather than a citywide average.'
    ],
    area: '/areas/stockton/', areaLabel: 'Stockton area guide'
  },
  'Ripon': {
    eyebrow: 'San Joaquin County',
    lede: 'Between Manteca and Modesto, with almond orchards and a tight-knit centre.',
    paras: [
      'Ripon sits between Manteca and Modesto on Highway 99, known for its orchards and a small, well-kept town centre. Buyers come for the schools, the scale and the feeling of knowing your neighbours.',
      'Lance McHan works with Ripon buyers and sellers across homes, acreage and land, and is available 24/7 while a sale is in motion.'
    ],
    area: '/areas/manteca/', areaLabel: 'Manteca area guide'
  }
};

NEIGHBOURHOODS.forEach(function (hood) {
  const key = hood.path.split('/')[3];
  const c = HOOD_COPY[key];
  pages.push({
    path: hood.path,
    html: page({
      path: hood.path,
      title: hood.name + ', CA Homes & Community Guide | Lance McHan, REALTOR®',
      description: 'Buying or selling in ' + hood.name + ', California? REALTOR® Lance McHan of Cornerstone Real Estate Group serves ' + hood.name + ' and the surrounding Central Valley. Free home valuation. Call (209) 279-2235.',
      crumbs: [{ name: 'Service areas', url: '/areas/' }, { name: hood.name, url: hood.path }],
      ogImage: IMG.hero.src,
      body: `
  ${head({
        crumbs: [{ name: 'Home', url: '/' }, { name: 'Service areas', url: '/areas/' }, { name: hood.name, url: hood.path }],
        eyebrow: c.eyebrow,
        h1: hood.name + ' homes and community guide',
        lede: c.lede
      })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <p class="eyebrow">Featured community</p>
          <h2>${hood.name}, California</h2>
          ${c.paras.map(function (p) { return '<p>' + p + '</p>'; }).join('\n          ')}
          <h3>Selling in ${hood.name}</h3>
          <p>Start with a free, no-obligation valuation of your address. Lance will tell you what the property is realistically worth today and what, if anything, is worth doing before it goes to market.</p>
          <h3>Buying in ${hood.name}</h3>
          <p>Tell Lance what you are looking for and he will send current options. This site does not republish third-party listing data, because prices and availability change daily.</p>
          <div class="btn-row" style="margin-top:26px">
            <a class="btn btn-gold" href="/sell/">Free home valuation</a>
            <a class="btn btn-outline" href="${c.area}">${c.areaLabel}</a>
          </div>
          <p style="margin-top:22px">More areas: <a href="/areas/">all service areas</a> &middot; <a href="/contact/">contact Lance</a></p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: key.toLowerCase() + '-form',
            formName: hood.name + ' enquiry',
            title: 'Ask about ' + hood.name,
            note: 'Lance replies personally. Here 24/7, start to finish.',
            submit: 'Send my request',
            successText: 'Thanks &mdash; Lance McHan will get back to you about ' + hood.name + '. Need to talk now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Service needed', label: 'What do you need?', type: 'select', required: true, options: ['Selling a home', 'Buying a home', 'Free home valuation', 'Land or acreage', 'Something else'] },
              F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  ${valuationCta()}
  `
    })
  });
});

/* ============================================================
   LISTING-RELATED PAGES (no third-party MLS data)
   ============================================================ */

const PROPERTIES = [
  { id: '1192280707', slug: '2450-S-B-ST-Stockton-CA', address: '2450 S B ST', city: 'Stockton', zip: '95206', type: 'Multi-family', area: '/areas/stockton/' },
  { id: '1192265568', slug: '5560-E-Kettleman-LN-Lodi-CA', address: '5560 E Kettleman LN', city: 'Lodi', zip: '95240', type: 'Land and acreage', area: '/areas/lodi/' },
  { id: '1192226532', slug: '1909-Cornerstone-CT-Stockton-CA', address: '1909 Cornerstone CT', city: 'Stockton', zip: '95209', type: 'Single family home', area: '/areas/stockton/' },
  { id: '1192226281', slug: '2597-Drummond-CT-Lathrop-CA', address: '2597 Drummond CT', city: 'Lathrop', zip: '95330', type: 'Single family home', area: '/areas/manteca/' },
  { id: '1192225184', slug: '7992-Schrader-WAY-Elk-Grove-CA', address: '7992 Schrader WAY', city: 'Elk Grove', zip: '95757', type: 'Single family home', area: '/areas/elk-grove/' },
  { id: '1192223231', slug: '5725-N-Wall-RD-Linden-CA', address: '5725 N Wall RD', city: 'Linden', zip: '95236', type: 'Land and acreage', area: '/areas/stockton/' },
  { id: '1192205962', slug: '24550-N-Highway-88-HWY-Clements-CA', address: '24550 N Highway 88 HWY', city: 'Clements', zip: '95227', type: 'Single family home', area: '/areas/lodi/' },
  { id: '1192176740', slug: '11783-Blake-RD-Wilton-CA', address: '11783 Blake RD', city: 'Wilton', zip: '95693', type: 'Single family home', area: '/areas/elk-grove/' },
  { id: '1192171906', slug: '13860-N-Curry-AVE-Lodi-CA', address: '13860 N Curry AVE', city: 'Lodi', zip: '95240', type: 'Single family home', area: '/areas/lodi/' }
];

PROPERTIES.forEach(function (p) {
  const full = p.address + ', ' + p.city + ', CA ' + p.zip;
  const path = '/listing-detail/' + p.id + '/' + p.slug + '/';
  pages.push({
    path: path,
    html: page({
      path: path,
      title: full + ' | Ask Lance McHan, REALTOR®',
      description: 'Asking about ' + full + '? Contact REALTOR® Lance McHan of Cornerstone Real Estate Group for current status and to see similar ' + p.city + ' properties. Call (209) 279-2235.',
      crumbs: [{ name: 'Featured homes', url: '/featured-listing/' }, { name: full, url: path }],
      body: `
  ${head({
        crumbs: [{ name: 'Home', url: '/' }, { name: 'Featured homes', url: '/featured-listing/' }, { name: p.address, url: path }],
        eyebrow: p.type + ' &middot; ' + p.city + ', CA',
        h1: 'Asking about ' + full + '?',
        lede: 'Lance McHan can tell you where this ' + p.city + ' property stands today and show you what else is available nearby. Call or text ' + SITE.phone + '.'
      })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <h2>Why there is no price or listing detail on this page</h2>
          <p>Listing prices, availability and photos change daily, and republished third-party listing data goes stale fast. Rather than show you something that may already be wrong, Lance will give you the current position on ${esc(p.address)} directly &mdash; including whether it is still available, what the terms look like and what comparable ${esc(p.city)} properties are doing.</p>
          <h3>What Lance can tell you about this address</h3>
          <ul>
            <li>Current status and whether it is worth pursuing</li>
            <li>What similar ${esc(p.type.toLowerCase())} properties in ${esc(p.city)} are selling for</li>
            <li>What to look for on an inspection for this kind of property</li>
            <li>How to structure an offer that actually gets accepted</li>
          </ul>
          <h3>Own this property or one like it?</h3>
          <p>If you are the owner, or you have a ${esc(p.city)} property you are thinking about selling, start with a <a href="/sell/">free home valuation</a>.</p>
          <p>More: <a href="${p.area}">${esc(p.city)} area guide</a> &middot; <a href="/featured-listing/">featured homes</a> &middot; <a href="/listing/">start a home search</a> &middot; <a href="/buy/">buying with Lance</a></p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'property-form',
            formName: 'Property enquiry',
            title: 'Ask about this property',
            note: 'Lance replies personally, 24/7.',
            submit: 'Ask Lance',
            successText: 'Thanks &mdash; Lance McHan will get back to you about ' + full + '. Need an answer now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Property address', label: 'Property', type: 'text', required: true, value: full, full: true },
              { name: 'Service needed', label: 'What do you need?', type: 'select', required: true, options: ['Is this property still available?', 'Show me similar properties', 'I want to make an offer', 'I own this property', 'Something else'] },
              F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  ${ctaBand({ eyebrow: 'Book a consultation', title: 'Get the current picture on ' + esc(p.city), text: 'Call or text ' + SITE.phone + ' and Lance will tell you what is really available.' })}
  `
    })
  });
});

/* -------- Featured listings -------- */

pages.push({
  path: '/featured-listing/',
  html: page({
    path: '/featured-listing/',
    title: 'Featured Central Valley Homes | Lance McHan, REALTOR® Stockton',
    description: 'Looking for a Central Valley luxury home, acreage or land? Ask REALTOR® Lance McHan for a current, hand-picked shortlist for Stockton, Lodi, Manteca, Tracy, Modesto and Elk Grove. Call (209) 279-2235.',
    crumbs: [{ name: 'Featured homes', url: '/featured-listing/' }],
    body: `
  ${head({
      crumbs: [{ name: 'Home', url: '/' }, { name: 'Featured homes', url: '/featured-listing/' }],
      eyebrow: 'Featured homes',
      h1: 'Central Valley luxury homes for sale with Lance McHan',
      lede: 'Take a look at what is for sale in the Central Valley and make an offer &mdash; with a REALTOR® who sends you current options instead of stale listing pages.'
    })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <h2>A hand-picked shortlist beats an endless feed</h2>
          <p>This site does not republish third-party MLS listings, because prices, availability and photos change daily and out-of-date listing pages waste your time. Instead, Lance McHan puts together a current shortlist for what you actually want &mdash; luxury homes, acreage, land, commercial property or a 55+ community home &mdash; anywhere in San Joaquin, Stanislaus or Sacramento counties.</p>
          <p>Tell Lance the cities, the budget and the must-haves. You will get real options, with his read on each one.</p>
          <figure style="margin:30px 0">${img(IMG.luxuryHillside, { alt: IMG.luxuryHillside.alt })}</figure>
          <h3>Property pages</h3>
          <p>Buyers often reach out about these Central Valley addresses. Each page is a direct line to Lance for the current position on that property.</p>
          <ul class="link-list">
            ${PROPERTIES.map(function (p) {
      return `<li><a href="/listing-detail/${p.id}/${p.slug}/">${esc(p.address)}, ${esc(p.city)}, CA<span class="meta">${esc(p.type)}</span></a></li>`;
    }).join('\n            ')}
          </ul>
          <p style="margin-top:22px">Also useful: <a href="/listing/">start a home search</a> &middot; <a href="/open-house-listings/">open houses</a> &middot; <a href="/mortgage-calculator/">payment calculator</a></p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'featured-form',
            formName: 'Featured homes request',
            title: 'Get a current shortlist',
            note: 'Tell Lance what you want. He will send what is actually available.',
            submit: 'Send me options',
            successText: 'Thanks &mdash; Lance McHan will put your shortlist together and follow up. Prefer to talk now? Call ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Cities or areas', label: 'Cities or areas', type: 'text', placeholder: 'e.g. Stockton, Lodi, Elk Grove' },
              { name: 'Price range', label: 'Price range', type: 'text', placeholder: 'e.g. $600,000 – $1,200,000' },
              F.propertyType, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  ${valuationCta()}
  `
  })
});

/* -------- Home search -------- */

pages.push({
  path: '/listing/',
  html: page({
    path: '/listing/',
    title: 'Search Central Valley Homes for Sale | Lance McHan, REALTOR®',
    description: 'Start a Central Valley home search with REALTOR® Lance McHan. Tell him your cities, budget and must-haves for Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove. Call (209) 279-2235.',
    crumbs: [{ name: 'Home search', url: '/listing/' }],
    body: `
  ${head({
      crumbs: [{ name: 'Home', url: '/' }, { name: 'Home search', url: '/listing/' }],
      eyebrow: 'Home search',
      h1: 'Start a Central Valley home search with Lance McHan',
      lede: 'Skip the stale listing feeds. Tell Lance what you want and get current, relevant options for Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove.'
    })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <h2>How the search works</h2>
          <ol>
            <li><strong>You tell Lance the brief.</strong> Cities, budget, bedrooms, lot size, single level, 55+ community, acreage &mdash; whatever matters.</li>
            <li><strong>Lance sends current options.</strong> Properties that are actually available, with his honest read on each one.</li>
            <li><strong>You tour what is worth touring.</strong> No pressure, no filler appointments.</li>
            <li><strong>Lance writes the offer.</strong> Price, terms and timing structured to be taken seriously.</li>
          </ol>
          <h3>What Lance can search for</h3>
          <ul>
            <li>Single family homes, condos and townhomes</li>
            <li>Luxury homes and higher-value properties</li>
            <li>Acreage, ranch property and raw land</li>
            <li>Commercial buildings</li>
            <li>Homes in 55 and up communities &mdash; see <a href="/55-plus-communities/">55+ moves</a></li>
          </ul>
          <p>Before you start, run some numbers on the <a href="/mortgage-calculator/">mortgage payment calculator</a> and read the <a href="/home-mortgage/">financing basics</a>.</p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'search-form',
            formName: 'Home search request',
            title: 'Tell Lance what you are looking for',
            note: 'He replies personally. Here 24/7, start to finish.',
            submit: 'Start my search',
            successText: 'Thanks &mdash; Lance McHan will start your search and follow up personally. Prefer to talk now? Call ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Cities or areas', label: 'Cities or areas', type: 'text', required: true, placeholder: 'e.g. Stockton, Manteca, Tracy' },
              { name: 'Price range', label: 'Price range', type: 'text', placeholder: 'e.g. up to $700,000' },
              { name: 'Bedrooms', label: 'Bedrooms needed', type: 'select', options: ['1+', '2+', '3+', '4+', '5+'] },
              F.propertyType, F.timeline, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  ${ctaBand({ eyebrow: 'Book a consultation', title: 'Let&rsquo;s find the right one', text: 'Call or text ' + SITE.phone + ' and tell Lance what you are looking for.' })}
  `
  })
});

/* -------- Sold -------- */

pages.push({
  path: '/sold-listing/',
  html: page({
    path: '/sold-listing/',
    title: 'Recently Sold by Lance McHan | Cornerstone Real Estate Group Stockton',
    description: 'A look at homes recently sold by Lance McHan and Cornerstone Real Estate Group in Stockton, California. Thinking of selling? Get a free home valuation. Call (209) 279-2235.',
    crumbs: [{ name: 'Sell & free valuation', url: '/sell/' }, { name: 'Recently sold', url: '/sold-listing/' }],
    ogImage: IMG.sold1.src,
    body: `
  ${head({
      crumbs: [{ name: 'Home', url: '/' }, { name: 'Sell & free valuation', url: '/sell/' }, { name: 'Recently sold', url: '/sold-listing/' }],
      eyebrow: 'Recently sold',
      h1: 'Recently sold properties by Lance McHan',
      lede: 'A few of the homes listed and sold by Lance McHan with Cornerstone Real Estate Group in Stockton, California.'
    })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Sold with Cornerstone</p>
        <h2>Homes listed and sold by Lance</h2>
        <p class="lede">Each of these was listed by Cornerstone Real Estate Group in Stockton.</p>
      </div>
      <div class="sold-grid">
        <article class="sold reveal">
          ${img(IMG.sold1, { alt: IMG.sold1.alt })}
          <div class="s-body">
            <span class="s-tag">Sold &middot; Stockton</span>
            <h3>5349 E Hobart AVE, Stockton, CA 95215</h3>
            <p>Single family home &middot; Listed by Cornerstone Real Estate Group</p>
          </div>
        </article>
        <article class="sold reveal">
          ${img(IMG.sold2, { alt: IMG.sold2.alt })}
          <div class="s-body">
            <span class="s-tag">Sold &middot; Stockton</span>
            <h3>1211 N Airport WAY, Stockton, CA 95205</h3>
            <p>Single family home &middot; Listed by Cornerstone Real Estate Group</p>
          </div>
        </article>
        <article class="sold reveal">
          ${img(IMG.sold3, { alt: IMG.sold3.alt })}
          <div class="s-body">
            <span class="s-tag">Sold &middot; Stockton</span>
            <h3>2153 S Union ST, Stockton, CA 95206</h3>
            <p>Single family home &middot; Listed by Cornerstone Real Estate Group</p>
          </div>
        </article>
      </div>
      <p class="calc-disclaimer" style="margin-top:24px">Sale prices are not published here. For what a property like yours could sell for today, ask Lance for a <a href="/sell/">free valuation of your address</a>.</p>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Sellers say</p>
        <h2>What selling with Lance is like</h2>
      </div>
      ${reviewCarousel(ALL_REVIEWS)}
    </div>
  </section>

  ${valuationCta()}
  `
  })
});

/* -------- Open houses -------- */

pages.push({
  path: '/open-house-listings/',
  html: page({
    path: '/open-house-listings/',
    title: 'Open Houses in Stockton, Lodi & the Central Valley | Lance McHan',
    description: 'Want to walk through Central Valley homes this weekend? Ask REALTOR® Lance McHan for the current open house schedule in Stockton, Lodi, Manteca, Tracy, Modesto and Elk Grove. Call (209) 279-2235.',
    crumbs: [{ name: 'Open houses', url: '/open-house-listings/' }],
    body: `
  ${head({
      crumbs: [{ name: 'Home', url: '/' }, { name: 'Open houses', url: '/open-house-listings/' }],
      eyebrow: 'Open houses',
      h1: 'Open houses across the Central Valley',
      lede: 'Open house schedules change every week. Tell Lance which cities you want to walk and he will send you what is open, when.'
    })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <h2>Walk through homes without the guesswork</h2>
          <p>Open houses are the fastest way to calibrate what your money buys in Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove. The problem is that published schedules go out of date within days.</p>
          <p>Send Lance the cities and the weekend you are free, and he will send the current list. If something looks promising, he can get you in privately rather than waiting for the crowd.</p>
          <h3>Before you go</h3>
          <ul>
            <li>Know your comfortable payment &mdash; use the <a href="/mortgage-calculator/">calculator</a></li>
            <li>Have a lender letter ready &mdash; see <a href="/home-mortgage/">financing basics</a></li>
            <li>Tell the host you are working with Lance McHan</li>
          </ul>
          <p>Want ongoing alerts instead of a one-off list? Sign up for <a href="/open-house-listings-3/">open house updates</a>.</p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'openhouse-form',
            formName: 'Open house schedule request',
            title: 'Get this week&rsquo;s open houses',
            note: 'Lance sends the current list &mdash; no stale pages.',
            submit: 'Send me the list',
            successText: 'Thanks &mdash; Lance McHan will send the current open house list. Prefer to talk now? Call ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Cities or areas', label: 'Cities you want to walk', type: 'text', required: true, placeholder: 'e.g. Stockton, Lodi' },
              { name: 'Price range', label: 'Price range', type: 'text', placeholder: 'e.g. $450,000 – $750,000' },
              F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  ${ctaBand({ eyebrow: 'Book a consultation', title: 'Seen one you like?', text: 'Call or text ' + SITE.phone + ' and Lance will tell you what it is really worth before you offer.' })}
  `
  })
});

pages.push({
  path: '/open-house-listings-3/',
  html: page({
    path: '/open-house-listings-3/',
    title: 'Open House Updates for Central Valley Buyers | Lance McHan REALTOR®',
    description: 'Get open house and new property updates for Stockton, Lodi, Manteca, Tracy, Modesto and Elk Grove from REALTOR® Lance McHan. No spam, unsubscribe any time. Call (209) 279-2235.',
    crumbs: [{ name: 'Open houses', url: '/open-house-listings/' }, { name: 'Open house updates', url: '/open-house-listings-3/' }],
    body: `
  ${head({
      crumbs: [{ name: 'Home', url: '/' }, { name: 'Open houses', url: '/open-house-listings/' }, { name: 'Open house updates', url: '/open-house-listings-3/' }],
      eyebrow: 'Updates',
      h1: 'Open house updates for Central Valley buyers',
      lede: 'Tell Lance what you are watching for and he will let you know when something worth seeing opens up &mdash; in the cities you care about, at the price you are working with.'
    })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <h2>Updates from a person, not a robot</h2>
          <p>You will not get a daily blast of everything on the market. Lance sends what matches your brief in Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp or Elk Grove, with a note on why it is worth your Saturday.</p>
          <p>Stop any time &mdash; reply, call or text ${SITE.phone}.</p>
          <h3>Also worth a look</h3>
          <ul>
            <li><a href="/open-house-listings/">This week&rsquo;s open houses</a></li>
            <li><a href="/listing/">Start a full home search</a></li>
            <li><a href="/featured-listing/">Featured Central Valley homes</a></li>
            <li><a href="/buy/">How Lance helps buyers</a></li>
          </ul>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'updates-form',
            formName: 'Open house updates',
            title: 'Sign up for updates',
            note: 'Your details are used to send what you asked for. Nothing else.',
            submit: 'Keep me posted',
            successText: 'Thanks &mdash; you are on Lance McHan&rsquo;s update list. Questions right now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.email, F.phone,
              { name: 'Cities or areas', label: 'Cities or areas to watch', type: 'text', required: true, placeholder: 'e.g. Manteca, Ripon' },
              { name: 'Price range', label: 'Price range', type: 'text', placeholder: 'e.g. up to $800,000' },
              F.propertyType]
          })}
        </div>
      </div>
    </div>
  </section>

  ${valuationCta()}
  `
  })
});

module.exports = pages;
