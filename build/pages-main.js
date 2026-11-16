'use strict';

const L = require('./lib');
const {
  SITE, IMG, GOOGLE_REVIEWS, SITE_REVIEWS, ALL_REVIEWS, F,
  img, page, form, faqBlock, reviewCarousel, trustStrip, chooser,
  areasGrid, ctaBand, valuationCta, ratingBadge, callBtn, bookBtn,
  breadcrumbHtml, profileCard, CITIES, NEIGHBOURHOODS, SOCIALS, esc
} = L;

/* Interior page header */
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

const calcBlock = `<div class="calc" data-calc>
        <div class="calc-inputs">
          <h2 class="h-sm">Estimate a monthly payment</h2>
          <p class="form-note">Enter your own numbers. Nothing here is a rate quote, an offer of credit, or a prediction &mdash; it is simple math on the figures you type in.</p>
          <div class="field-grid">
            <div class="field">
              <label for="calc-price">Purchase price ($)</label>
              <input id="calc-price" type="number" inputmode="numeric" min="0" step="1000" value="550000">
            </div>
            <div class="field">
              <label for="calc-down">Down payment (%)</label>
              <div class="range-row">
                <input id="calc-down" type="range" min="0" max="50" step="1" value="20">
                <output id="calc-down-out" for="calc-down">20%</output>
              </div>
            </div>
            <div class="field">
              <label for="calc-rate">Interest rate (%)</label>
              <input id="calc-rate" type="number" inputmode="decimal" min="0" max="25" step="0.125" value="6.5">
            </div>
            <div class="field">
              <label for="calc-term">Loan term (years)</label>
              <select id="calc-term">
                <option value="30" selected>30 years</option>
                <option value="20">20 years</option>
                <option value="15">15 years</option>
                <option value="10">10 years</option>
              </select>
            </div>
          </div>
          <p class="calc-disclaimer">Principal and interest only. Property taxes, homeowners insurance, HOA dues, Mello-Roos and mortgage insurance are not included and will change your real monthly cost. Talk to a licensed lender for an actual rate and payment.</p>
        </div>
        <div class="calc-out">
          <span class="out-label">Estimated principal &amp; interest</span>
          <span class="out-value" id="calc-payment">$0</span>
          <span class="out-sub">per month, based on the figures you entered</span>
          <ul class="calc-break">
            <li><span>Down payment</span> <b id="calc-down-amt">$0</b></li>
            <li><span>Loan amount</span> <b id="calc-loan">$0</b></li>
            <li><span>Total interest over the term</span> <b id="calc-interest">$0</b></li>
            <li><span>Total of payments</span> <b id="calc-total">$0</b></li>
          </ul>
          <a class="btn btn-gold" href="/contact/">Book a Consultation</a>
        </div>
      </div>`;

/* ============================================================
   HOME
   ============================================================ */

const homeFaq = [
  {
    q: 'What areas does Lance McHan serve?',
    a: '<p>Lance works across the Central Valley: Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove &mdash; covering San Joaquin, Stanislaus and Sacramento counties. See the <a href="/areas/">service area pages</a> for your city.</p>'
  },
  {
    q: 'What kinds of property does Lance handle?',
    a: '<p>Homes, acreage, land and commercial property. Lance is a luxury listing specialist and also guides families through <a href="/probate-trust/">probate and trust sales</a>, <a href="/divorce-real-estate/">divorce real estate</a> and <a href="/55-plus-communities/">55+ community moves</a>.</p>'
  },
  {
    q: 'How do I get a free home valuation?',
    a: '<p>Use the <a href="/sell/">free home valuation form</a> with your address, property type and timeline, or call or text ' + SITE.phone + '. There is no obligation and no cost.</p>'
  },
  {
    q: 'Is Lance McHan licensed?',
    a: '<p>Yes. Lance McHan holds California real estate License ID ' + SITE.license + ' and works with Cornerstone Real Estate Group, DRE ' + SITE.brokerLicense + ', at ' + SITE.addressLine + '.</p>'
  },
  {
    q: 'What is a Certified Divorce Real Estate Expert?',
    a: '<p>It is a specialist designation for agents who handle divorce-related home sales. Lance is a Certified Divorce Real Estate Expert, so he is prepared for the documentation, communication and neutrality these sales require. Learn more on the <a href="/divorce-real-estate/">divorce real estate page</a>.</p>'
  },
  {
    q: 'When can I reach Lance?',
    a: '<p>Here 24/7, start to finish. Call or text ' + SITE.phone + ', email <a href="mailto:' + SITE.email + '">' + SITE.email + '</a>, or <a href="/contact/">book a consultation</a> online.</p>'
  }
];

const home = page({
  path: '/',
  title: 'Lance McHan, REALTOR® | Buy or Sell a Central Valley Home | Stockton, CA',
  description: 'Buy or sell a Central Valley home with Lance McHan, REALTOR® and luxury listing specialist at Cornerstone Real Estate Group in Stockton. 5.0 stars from 1,238 Google reviews. Free home valuation. Call (209) 279-2235.',
  crumbs: [],
  faq: homeFaq,
  body: `
  <section class="hero">
    <div class="hero-media">${img(IMG.hero, { eager: true, alt: IMG.hero.alt })}</div>
    <div class="hero-inner">
      <p class="hero-kicker">Stockton &middot; Lodi &middot; Manteca &middot; Tracy &middot; Modesto &middot; Elk Grove</p>
      <h1>Buy or sell a Central Valley home with <em>Lance McHan</em></h1>
      <p class="hero-sub">REALTOR® and luxury listing specialist with Cornerstone Real Estate Group in Stockton, California &mdash; homes, acreage, land and commercial across San Joaquin, Stanislaus and Sacramento counties. Here 24/7, start to finish.</p>
      <div class="hero-actions">
        ${bookBtn('btn-gold')}
        ${callBtn('btn-ghost-light')}
      </div>
      <div class="hero-proof">${ratingBadge()}</div>
      <div class="hero-badges">
        ${img(IMG.cdre, { alt: 'Certified Divorce Real Estate Expert logo' })}
        ${img(IMG.masters, { alt: 'Lodi Association of Realtors Masters Club 2025 Life Member badge' })}
        ${img(IMG.markCornerstone, { alt: 'Cornerstone Real Estate Group logo' })}
      </div>
      <p class="hero-tagline">${SITE.tagline}</p>
    </div>
  </section>

  ${trustStrip()}

  <section class="section">
    <div class="wrap">
      <div class="center" style="margin-bottom:46px">
        <p class="eyebrow eyebrow--center">Start here</p>
        <h2>What&rsquo;s your next move?</h2>
        <p class="lede">Pick the situation that sounds like yours and Lance will take it from there.</p>
      </div>
      ${chooser()}
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap">
      <div class="feature reveal">
        <div class="feature-body">
          <p class="eyebrow">Selling</p>
          <h2>Sell for the strongest terms you can get &mdash; without guesswork</h2>
          <p>Lance is a luxury listing specialist, and the same preparation goes into every property he represents: a realistic price conversation, a plan to get the home market-ready, professional presentation, and a negotiator who is reachable when the offers land.</p>
          <ul class="feature-list">
            <li>Free, no-obligation home valuation for your address</li>
            <li>Homes, acreage, land and commercial property</li>
            <li>One point of contact from listing through closing</li>
          </ul>
          <div class="btn-row">
            <a class="btn btn-gold" href="/sell/">Get my free valuation</a>
            <a class="btn btn-outline" href="/sold-listing/">See recently sold</a>
          </div>
        </div>
        <div class="feature-media">${img(IMG.luxuryDusk, { alt: IMG.luxuryDusk.alt })}</div>
      </div>

      <div class="feature feature--flip reveal">
        <div class="feature-body">
          <p class="eyebrow">Buying</p>
          <h2>Buy with someone who answers the phone</h2>
          <p>Whether it is your first Stockton home, a move up in Lodi or acreage outside Manteca, Lance helps you set a search that fits your budget and your life, then writes offers that make sense for the property in front of you.</p>
          <ul class="feature-list">
            <li>Run the numbers first with the <a href="/mortgage-calculator/">payment calculator</a></li>
            <li>Understand financing before you tour &mdash; see <a href="/home-mortgage/">financing basics</a></li>
            <li>Tell Lance what you want and get a curated <a href="/listing/">home search</a></li>
          </ul>
          <div class="btn-row">
            <a class="btn btn-gold" href="/buy/">Start my home search</a>
            <a class="btn btn-outline" href="/open-house-listings/">Open houses</a>
          </div>
        </div>
        <div class="feature-media">${img(IMG.luxuryGlass, { alt: IMG.luxuryGlass.alt })}</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Specialties</p>
        <h2>Situations most agents don&rsquo;t handle every day</h2>
        <p class="lede">Lance works with families in the middle of complicated transitions. The real estate part should be the easy part.</p>
      </div>
      <div class="svc-list">
        <div class="svc-row reveal">
          <span class="n">01</span>
          <h3>Probate &amp; trust sales</h3>
          <p>Executors, administrators and successor trustees get one person who understands the paperwork, the timing and the family dynamics.</p>
          <a class="go" href="/probate-trust/">Probate &amp; trust &rarr;</a>
        </div>
        <div class="svc-row reveal">
          <span class="n">02</span>
          <h3>Divorce real estate</h3>
          <p>A Certified Divorce Real Estate Expert who specializes in this &ndash; because understanding matters.</p>
          <a class="go" href="/divorce-real-estate/">Divorce real estate &rarr;</a>
        </div>
        <div class="svc-row reveal">
          <span class="n">03</span>
          <h3>55+ community moves</h3>
          <p>Sell the family home and find your next place in a 55 and up community in the Central Valley and surrounding areas.</p>
          <a class="go" href="/55-plus-communities/">55+ moves &rarr;</a>
        </div>
        <div class="svc-row reveal">
          <span class="n">04</span>
          <h3>Luxury listings, acreage, land &amp; commercial</h3>
          <p>Higher-value homes, ranch and acreage property, raw land and commercial buildings across the Valley.</p>
          <a class="go" href="/contact/">Talk to Lance &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      <div style="margin-bottom:40px">
        <p class="eyebrow">Client reviews</p>
        <h2>5.0 stars from ${SITE.reviewCountPretty} Google reviews</h2>
        <p class="lede">Real words from people Lance has worked with.</p>
      </div>
      ${reviewCarousel(ALL_REVIEWS)}
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Where Lance works</p>
        <h2>Central Valley communities</h2>
        <p class="lede">San Joaquin, Stanislaus and Sacramento counties &mdash; from Lincoln Village and Brookside in Stockton to Woodbridge near Lodi, Ripon, Escalon, French Camp, Galt, Lathrop and Elk Grove.</p>
      </div>
      ${areasGrid()}
      <p style="margin-top:26px"><a href="/areas/">See every service area and neighborhood &rarr;</a></p>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap">
      <div class="profile">
        <div>
          <div class="profile-media">${img(IMG.lance, { alt: IMG.lance.alt })}</div>
        </div>
        <div>
          <p class="eyebrow">Your agent</p>
          <h2>Lance McHan, your luxury REALTOR® in the Central Valley</h2>
          <p>Lance McHan is a REALTOR® with Cornerstone Real Estate Group in Stockton, California. He and his team are here 24/7 to assist with home buying and selling needs from start to finish, and they guide families through probate and trust property sales.</p>
          <p>Lance is a Certified Divorce Real Estate Expert and a Lodi Association of Realtors Masters Club 2025 Life Member.</p>
          <p class="serif" style="font-size:1.5rem;font-style:italic;color:var(--ink)">${SITE.tagline}</p>
          <div class="btn-row" style="margin-top:22px">
            <a class="btn btn-ink" href="/about-lance-mchan/">More about Lance</a>
            ${callBtn('btn-outline')}
          </div>
        </div>
      </div>
    </div>
  </section>

  ${valuationCta()}

  <section class="section">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>Frequently asked questions</h2>
      </div>
      ${faqBlock(homeFaq, 'home-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Yes, you can with Lance McHan',
    text: 'Tell Lance what you are trying to do &mdash; sell, buy, settle an estate or downsize &mdash; and he will walk you through the options. Call or text ' + SITE.phone + '.',
    image: IMG.luxuryHillside
  })}
  `
});

/* ============================================================
   SELL
   ============================================================ */

const sellFaq = [
  { q: 'How much does a home valuation cost?', a: '<p>Nothing. Lance prepares your valuation at no cost and with no obligation to list.</p>' },
  { q: 'What do you need from me to start?', a: '<p>Your name, phone, email, the property address, the property type and a rough timeline. That is enough for Lance to start the conversation.</p>' },
  { q: 'Do you sell more than single family homes?', a: '<p>Yes &mdash; homes, acreage, land and commercial property. Lance is a luxury listing specialist and also handles <a href="/probate-trust/">probate and trust sales</a>, <a href="/divorce-real-estate/">divorce sales</a> and <a href="/55-plus-communities/">55+ community moves</a>.</p>' },
  { q: 'Which cities do you list homes in?', a: '<p>Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove, across San Joaquin, Stanislaus and Sacramento counties.</p>' },
  { q: 'How quickly can we talk?', a: '<p>Lance is here 24/7, start to finish. Call or text ' + SITE.phone + ' or send the form and he will reach out.</p>' }
];

const sell = page({
  path: '/sell/',
  title: 'Sell My Home | Free Home Valuation in Stockton & Lodi | Lance McHan',
  description: 'Sell your Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove home with REALTOR® Lance McHan. Free, no-obligation home valuation and a four-step selling process. Call (209) 279-2235.',
  crumbs: [{ name: 'Sell & free valuation', url: '/sell/' }],
  faq: sellFaq,
  ogImage: IMG.hero.src,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Sell & free valuation', url: '/sell/' }],
    eyebrow: 'Sell your home',
    h1: 'Sell your Central Valley home with Lance McHan',
    lede: 'A free home valuation, a clear plan and one REALTOR® who stays with you from the first conversation to the closing table &mdash; in Stockton, Lodi, Manteca, Tracy, Modesto and Elk Grove.'
  })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:40px">
        <p class="eyebrow">The process</p>
        <h2>Four steps from first call to sold</h2>
        <p class="lede">No mystery, no pressure. Here is exactly how selling with Lance works.</p>
      </div>
      <div class="steps">
        <div class="step reveal">
          <h3>Valuation &amp; strategy</h3>
          <p>Lance reviews your property and your goals, then talks you through pricing and what the market is doing for homes like yours.</p>
        </div>
        <div class="step reveal">
          <h3>Prepare &amp; present</h3>
          <p>Decide what is worth doing before you list, then present the home properly &mdash; photography, copy and a marketing plan built for the property.</p>
        </div>
        <div class="step reveal">
          <h3>Market &amp; show</h3>
          <p>Your listing goes out to buyers and agents, showings get coordinated around your schedule, and you hear what buyers are saying.</p>
        </div>
        <div class="step reveal">
          <h3>Negotiate &amp; close</h3>
          <p>Offers get reviewed side by side, terms get negotiated, and Lance manages inspections, disclosures and escrow through to the keys.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap">
      <div class="with-aside">
        <div>
          <p class="eyebrow">Free home valuation</p>
          <h2>What is your home worth right now?</h2>
          <p class="lede">Every property is different &mdash; a Lincoln Village ranch home, acreage outside Lodi, a 55+ community home in Manteca, a commercial building in Stockton. Send the details and Lance will prepare a valuation for your address.</p>
          <div class="note">
            <strong>Here 24/7, start to finish.</strong>
            <p>Need to talk before you fill anything in? Call or text <a href="${SITE.phoneHref}">${SITE.phone}</a> or email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
          </div>
          <p>Thinking about an estate property or a divorce sale? Start on the <a href="/probate-trust/">probate and trust page</a> or the <a href="/divorce-real-estate/">divorce real estate page</a> instead &mdash; those sales have extra steps and Lance handles both.</p>
          ${ratingBadge('light')}
        </div>
        <div>
          ${form({
            id: 'valuation',
            formName: 'Home valuation',
            title: 'Request your free valuation',
            note: 'No cost, no obligation. Lance replies personally.',
            submit: 'Get my free valuation',
            successText: 'Your valuation request is in. Lance McHan will follow up personally. Need an answer right now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email, F.address, F.propertyType, F.timeline, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Sellers say</p>
        <h2>What it is like to sell with Lance</h2>
      </div>
      ${reviewCarousel([GOOGLE_REVIEWS[0], SITE_REVIEWS[0], SITE_REVIEWS[1]])}
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Seller questions</p>
        <h2>Selling, answered</h2>
      </div>
      ${faqBlock(sellFaq, 'sell-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Ready when you are',
    title: 'Let&rsquo;s price your home properly',
    text: 'Book a consultation with Lance McHan or call ' + SITE.phone + '. Serving Stockton, Lodi, Manteca, Tracy, Modesto and Elk Grove.'
  })}
  `
});

/* ============================================================
   BUY
   ============================================================ */

const buyFaq = [
  { q: 'Do I need to be pre-approved before we look at homes?', a: '<p>It helps. Knowing your budget and having a lender letter makes your offer stronger. Start with the <a href="/mortgage-calculator/">payment calculator</a> and the <a href="/home-mortgage/">financing basics page</a>, then talk to Lance.</p>' },
  { q: 'Does this website show homes for sale?', a: '<p>No. Listing data and prices change daily and go stale fast, so this site does not republish them. Tell Lance what you are looking for and he will send current options that match &mdash; <a href="/listing/">start a home search</a>.</p>' },
  { q: 'Can you help me buy acreage, land or commercial property?', a: '<p>Yes. Lance works with homes, acreage, land and commercial property throughout San Joaquin, Stanislaus and Sacramento counties.</p>' },
  { q: 'What does it cost to work with Lance as a buyer?', a: '<p>Compensation depends on the transaction and is agreed in writing before you tour homes. Ask Lance and he will explain exactly how it works in your situation.</p>' },
  { q: 'Which cities can you help me buy in?', a: '<p>Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove. See the <a href="/areas/">service area pages</a>.</p>' }
];

const buy = page({
  path: '/buy/',
  title: 'Buy a Home in Stockton, Lodi & the Central Valley | Lance McHan REALTOR®',
  description: 'Buy a home in Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove with REALTOR® Lance McHan. Mortgage payment calculator, buyer consultation and a REALTOR® available 24/7. Call (209) 279-2235.',
  crumbs: [{ name: 'Buy a home', url: '/buy/' }],
  faq: buyFaq,
  ogImage: IMG.hero.src,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Buy a home', url: '/buy/' }],
    eyebrow: 'Buy a home',
    h1: 'Buy a Central Valley home with Lance McHan',
    lede: 'From first-time buyers in Stockton to move-up families in Lodi and acreage buyers outside Manteca &mdash; a REALTOR® who answers, explains and negotiates on your side.'
  })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">How Lance helps buyers</p>
        <h2>You get a plan before you get a tour</h2>
        <p class="lede">Buying in the Central Valley goes better when the budget, the search and the offer strategy are settled up front.</p>
      </div>
      <div class="cards cards--3">
        <div class="card reveal">
          <span class="card-k">Step one</span>
          <h3>Know your number</h3>
          <p>Work out what a monthly payment actually looks like at different prices, down payments and terms before you fall for a house. Use the calculator below.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Step two</span>
          <h3>Get your financing lined up</h3>
          <p>Lance walks you through what lenders will ask for and what pre-approval means so your offer is taken seriously. See <a href="/home-mortgage/">financing basics</a>.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Step three</span>
          <h3>Search on your terms</h3>
          <p>Tell Lance the cities, must-haves and budget. He sends current options &mdash; homes, acreage, land, commercial or a 55+ community home.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Step four</span>
          <h3>Tour without pressure</h3>
          <p>See what fits, ask questions, and hear the honest version of what a property needs. Check <a href="/open-house-listings/">open houses</a> too.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Step five</span>
          <h3>Write an offer that works</h3>
          <p>Price is one piece. Terms, timing and contingencies decide a lot of Central Valley deals, and that is where having Lance matters.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Step six</span>
          <h3>Close with one point of contact</h3>
          <p>Inspections, appraisal, disclosures and escrow &mdash; handled, with Lance reachable 24/7 start to finish.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Mortgage payment calculator</p>
        <h2>Run the numbers yourself</h2>
        <p class="lede">Change the price, down payment, rate and term to see how a payment moves. These are your figures, not a rate quote.</p>
      </div>
      ${calcBlock}
      <p style="margin-top:22px"><a href="/mortgage-calculator/">Open the full calculator page &rarr;</a></p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div>
          <p class="eyebrow">Buyer consultation</p>
          <h2>Tell Lance what you are looking for</h2>
          <p class="lede">Fifteen minutes on the phone will save you weeks of scrolling. Send your details and Lance will put together a plan for your budget, your timeline and the cities you want.</p>
          <ul class="feature-list">
            <li>First home, move-up, downsize or investment</li>
            <li>Homes, acreage, land, commercial and 55+ communities</li>
            <li>Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove</li>
          </ul>
          ${ratingBadge('light')}
        </div>
        <div>
          ${form({
            id: 'buyer',
            formName: 'Buyer consultation',
            title: 'Book a buyer consultation',
            note: 'Lance replies personally. Here 24/7, start to finish.',
            submit: 'Book my consultation',
            successText: 'Your consultation request is in. Lance McHan will follow up personally. Need an answer right now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Cities or areas', label: 'Cities or areas you are considering', type: 'text', placeholder: 'e.g. Stockton, Lodi, Elk Grove' },
              { name: 'Price range', label: 'Price range', type: 'text', placeholder: 'e.g. $400,000 – $650,000' },
              F.propertyType, F.timeline, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Buyer questions</p>
        <h2>Buying, answered</h2>
      </div>
      ${faqBlock(buyFaq, 'buy-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Start your Central Valley home search',
    text: 'Call or text ' + SITE.phone + ', or book a consultation and Lance will take it from there.'
  })}
  `
});

/* ============================================================
   PROBATE & TRUST
   ============================================================ */

const probateFaq = [
  { q: 'I am a successor trustee. Can you help me sell the property?', a: '<p>Yes. Lance and his team guide families through probate and trust property sales, and work alongside your attorney, accountant and the other heirs or beneficiaries.</p>' },
  { q: 'The house is full of belongings and needs work. Is that a problem?', a: '<p>No. Estate properties usually are. Lance will talk you through what is worth clearing or repairing and what is better sold as-is, so you are not spending estate money for no return.</p>' },
  { q: 'Do you work with attorneys?', a: '<p>Yes. Your attorney handles the legal filings; Lance handles the property, the marketing and the sale, and keeps everyone updated.</p>' },
  { q: 'Where do you handle probate and trust sales?', a: '<p>Throughout San Joaquin, Stanislaus and Sacramento counties &mdash; Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove.</p>' },
  { q: 'How do we start?', a: '<p>Call or text ' + SITE.phone + ', or send the consultation form on this page. Lance will explain the steps for your situation before you commit to anything.</p>' }
];

const probate = page({
  path: '/probate-trust/',
  title: 'Probate & Trust Home Sales in Stockton, CA | Lance McHan REALTOR®',
  description: 'Selling a probate or trust property in Stockton, Lodi, Manteca or Modesto? REALTOR® Lance McHan guides executors, administrators and successor trustees through the sale. Call (209) 279-2235.',
  crumbs: [{ name: 'Probate & trust sales', url: '/probate-trust/' }],
  faq: probateFaq,
  ogImage: IMG.hero.src,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Probate & trust sales', url: '/probate-trust/' }],
    eyebrow: 'Probate & trust',
    h1: 'Probate and trust home sales in the Central Valley',
    lede: 'Lance McHan and his team guide families through probate and trust property sales in Stockton, Lodi, Manteca, Tracy, Modesto and Elk Grove &mdash; so the real estate is the part you do not have to worry about.'
  })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <p class="eyebrow">Who this is for</p>
          <h2>Executors, administrators, successor trustees and families</h2>
          <p>Selling a home after a death is not a normal transaction. There are court dates or trust documents, other beneficiaries with opinions, a property that has not been updated in years, and a lot of decisions landing on one person. Lance has done this with Central Valley families, and he keeps the process moving without adding pressure to it.</p>
          <h3>What Lance handles</h3>
          <ul>
            <li>A realistic valuation of the property as it stands today</li>
            <li>Advice on what to clear, repair or leave alone before listing</li>
            <li>Coordination with your attorney, accountant and the other parties</li>
            <li>Marketing and showings handled so the family does not have to</li>
            <li>Negotiation and escrow management through to closing</li>
          </ul>
          <div class="note">
            <strong>One contact, 24/7.</strong>
            <p>Call or text Lance at <a href="${SITE.phoneHref}">${SITE.phone}</a> whenever a question comes up. Here 24/7, start to finish.</p>
          </div>
          <div class="review" style="margin:0 0 26px">
            <div class="stars" aria-label="5 out of 5 stars">${L.STARS}</div>
            <blockquote>&ldquo;${esc(GOOGLE_REVIEWS[1].quote)}&rdquo;</blockquote>
            <footer>${img(IMG.google, { class: 'glogo', alt: 'Google' })}<span><span class="r-name">${GOOGLE_REVIEWS[1].name}</span><br><span class="r-src">${GOOGLE_REVIEWS[1].source}</span></span></footer>
          </div>
          <p>Related: <a href="/sell/">free home valuation</a> &middot; <a href="/divorce-real-estate/">divorce real estate</a> &middot; <a href="/55-plus-communities/">55+ community moves</a></p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'probate',
            formName: 'Probate or trust sale',
            title: 'Talk to Lance about an estate property',
            note: 'Confidential. No obligation.',
            submit: 'Request a consultation',
            successText: 'Thanks &mdash; Lance McHan will contact you about the estate property. Need to talk sooner? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email, F.address,
              { name: 'Your role', label: 'Your role', type: 'select', required: true, options: ['Executor', 'Administrator', 'Successor trustee', 'Heir or beneficiary', 'Attorney', 'Other'] },
              F.timeline, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>Probate &amp; trust sales, answered</h2>
      </div>
      ${faqBlock(probateFaq, 'probate-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Get the estate property handled',
    text: 'Call or text ' + SITE.phone + ' and Lance will explain the steps for your situation.'
  })}
  `
});

/* ============================================================
   DIVORCE
   ============================================================ */

const divorceFaq = [
  { q: 'What is a Certified Divorce Real Estate Expert?', a: '<p>It is a specialist designation for REALTORS® who handle divorce-related property sales. Lance McHan is a Certified Divorce Real Estate Expert, which means the communication, documentation and neutrality these sales demand are part of how he works, not an afterthought.</p>' },
  { q: 'Can you work with both spouses?', a: '<p>Lance is used to transactions where two parties have to agree, and to keeping both sides equally informed. Your attorneys will advise on representation; Lance focuses on handling the property professionally and transparently.</p>' },
  { q: 'What if the court is involved?', a: '<p>Court-involved sales come with extra documentation and timing requirements. That is exactly the kind of sale the CDRE designation prepares an agent for.</p>' },
  { q: 'Do we have to sell the house?', a: '<p>That is a decision for you and your attorney. Lance can tell you what the property is realistically worth today so the decision is based on numbers rather than guesses.</p>' },
  { q: 'Where do you handle divorce sales?', a: '<p>Across the Central Valley &mdash; Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove.</p>' }
];

const divorce = page({
  path: '/divorce-real-estate/',
  title: 'Divorce Real Estate in Stockton & the Central Valley | CDRE Lance McHan',
  description: 'Selling a home during a divorce in Stockton, Lodi, Manteca or Tracy? Lance McHan is a Certified Divorce Real Estate Expert handling neutral, court-aware home sales. Call (209) 279-2235.',
  crumbs: [{ name: 'Divorce real estate', url: '/divorce-real-estate/' }],
  faq: divorceFaq,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Divorce real estate', url: '/divorce-real-estate/' }],
    eyebrow: 'Divorce real estate',
    h1: 'Your Certified Divorce Real Estate Expert in the Central Valley',
    lede: 'Get the best outcome with a Certified Divorce Real Estate Expert who specializes in this &ndash; because understanding matters.'
  })}

  <section class="section">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <p class="eyebrow">Why a CDRE</p>
          <h2>A divorce home sale is not a normal home sale</h2>
          <p>There are two sets of opinions, often two sets of attorneys, sometimes a judge, and a house in the middle of it. The agent who handles it needs to be neutral, organised and able to document everything &mdash; not just good at marketing.</p>
          <p>Lance McHan is a Certified Divorce Real Estate Expert with Cornerstone Real Estate Group in Stockton. He works with families across San Joaquin, Stanislaus and Sacramento counties on home sales where the divorce process is part of the picture.</p>
          <h3>What that looks like in practice</h3>
          <ul>
            <li>Clear, equal communication with both parties and their attorneys</li>
            <li>A documented, defensible view of what the property is worth today</li>
            <li>Advice on preparing and showing a home that two people may still be living in</li>
            <li>Marketing and negotiation handled without taking sides</li>
            <li>Escrow and closing coordinated around the legal timeline</li>
          </ul>
          <div class="badges" style="margin:30px 0">
            <a href="${SITE.cdreProfile}" target="_blank" rel="noopener">${img(IMG.cdre, { alt: 'Certified Divorce Real Estate Expert logo' })}</a>
            <p class="badge-note mb-0">Lance McHan is a Certified Divorce Real Estate Expert. View his CDRE profile.</p>
          </div>
          <p>Related: <a href="/sell/">free home valuation</a> &middot; <a href="/probate-trust/">probate &amp; trust sales</a> &middot; <a href="/contact/">book a consultation</a></p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'divorce',
            formName: 'Divorce real estate',
            title: 'Request a confidential consultation',
            note: 'Lance replies personally. Nothing is shared with anyone else.',
            submit: 'Request a consultation',
            successText: 'Thanks &mdash; Lance McHan will reach out confidentially. Need to talk sooner? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email, F.address,
              { name: 'Stage of the process', label: 'Where are you in the process?', type: 'select', options: ['Considering options', 'Attorneys involved', 'Court-ordered sale', 'Agreement reached, ready to sell', 'Prefer not to say'] },
              F.timeline, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>Divorce real estate, answered</h2>
      </div>
      ${faqBlock(divorceFaq, 'divorce-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Talk it through with Lance',
    text: 'Call or text ' + SITE.phone + '. Confidential, no obligation, and available 24/7.'
  })}
  `
});

/* ============================================================
   55+
   ============================================================ */

const seniorFaq = [
  { q: 'Can you help me sell my current home and buy in a 55+ community?', a: '<p>Yes. Lance and his team can help you sell and find your next dream home in a 55 and up community in the Central Valley and the surrounding areas.</p>' },
  { q: 'Which areas have 55+ communities you work in?', a: '<p>Lance works across Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove, plus the wider Sacramento and Modesto areas.</p>' },
  { q: 'Do I have to sell before I buy?', a: '<p>Not necessarily &mdash; it depends on your finances and the timing you want. Lance will lay out the options so you can choose with the numbers in front of you.</p>' },
  { q: 'Can family members be involved in the conversation?', a: '<p>Absolutely. Bring whoever you want to the consultation. Lance is happy to explain everything more than once, to more than one person.</p>' }
];

const seniors = page({
  path: '/55-plus-communities/',
  title: '55+ Community Moves in the Central Valley | Lance McHan REALTOR®',
  description: 'Moving to a 55+ community in Stockton, Lodi, Manteca, Modesto or Elk Grove? REALTOR® Lance McHan helps you sell the family home and find your next one. Call (209) 279-2235.',
  crumbs: [{ name: '55+ community moves', url: '/55-plus-communities/' }],
  faq: seniorFaq,
  ogImage: IMG.seniors.src,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: '55+ community moves', url: '/55-plus-communities/' }],
    eyebrow: '55+ moves',
    h1: 'Moving to a 55+ community in the Central Valley?',
    lede: 'Our team can help you sell and find your next dream home in a 55 and up community in Central Valley and the surrounding areas. Let&rsquo;s get started!'
  })}

  <section class="section">
    <div class="wrap">
      <div class="feature">
        <div class="feature-body">
          <p class="eyebrow">Two moves, one agent</p>
          <h2>Sell the family home and land somewhere you love</h2>
          <p>A 55+ move is two transactions at once, and they have to line up. Lance handles both sides &mdash; getting your current home ready and sold, and finding the right 55 and up community home &mdash; so there is one person tracking the dates instead of three.</p>
          <ul class="feature-list">
            <li>Honest advice on what is worth doing to the house before it lists</li>
            <li>A free valuation of your current home, with no obligation</li>
            <li>A shortlist of 55+ community homes that fit your budget and the lifestyle you want</li>
            <li>Timing coordinated so you are not moving twice</li>
            <li>Lance reachable 24/7, start to finish</li>
          </ul>
          <div class="btn-row">
            <a class="btn btn-gold" href="#senior-form">Get the 55+ list</a>
            <a class="btn btn-outline" href="/sell/">Value my current home</a>
          </div>
        </div>
        <div class="feature-media">${img(IMG.seniors, { alt: 'Retired couple holding hands in lawn chairs outdoors, enjoying a sunny Central Valley day' })}</div>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap">
      <div class="with-aside">
        <div>
          <p class="eyebrow">Let&rsquo;s get started</p>
          <h2>Tell Lance what your next chapter looks like</h2>
          <p class="lede">Single level? Low maintenance yard? Close to family in Elk Grove or Modesto? Send the details and Lance will put together 55+ community options and a plan for the home you are leaving.</p>
          ${ratingBadge('light')}
        </div>
        <div>
          ${form({
            id: 'senior-form',
            formName: '55+ community move',
            title: 'Get 55+ community options',
            note: 'No cost, no obligation. Family welcome on the call.',
            submit: 'Send my request',
            successText: 'Thanks &mdash; Lance McHan will put together your 55+ options and follow up personally. Prefer to talk now? Call ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email,
              { name: 'Current home address', label: 'Current home address', type: 'text', autocomplete: 'street-address', placeholder: 'Street, city, CA', full: true },
              { name: 'Preferred areas', label: 'Where would you like to move?', type: 'text', placeholder: 'e.g. Manteca, Lodi, Elk Grove' },
              F.timeline,
              { name: 'Selling first', label: 'Do you need to sell your current home?', type: 'select', options: ['Yes, I need to sell first', 'Yes, but not right away', 'No, I am only buying', 'Not sure yet'] },
              F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>55+ moves, answered</h2>
      </div>
      ${faqBlock(seniorFaq, 'senior-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Ready to look at 55+ options?',
    text: 'Call or text ' + SITE.phone + ' or book a consultation with Lance McHan.'
  })}
  `
});

/* ============================================================
   ABOUT
   ============================================================ */

const about = page({
  path: '/about-lance-mchan/',
  title: 'About Lance McHan, REALTOR® | Cornerstone Real Estate Group Stockton',
  description: 'Meet Lance McHan, REALTOR® and luxury listing specialist with Cornerstone Real Estate Group in Stockton, CA. Certified Divorce Real Estate Expert, Masters Club 2025 Life Member. License ID 01987449.',
  crumbs: [{ name: 'About Lance McHan', url: '/about-lance-mchan/' }],
  ogImage: IMG.lance.src,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'About Lance McHan', url: '/about-lance-mchan/' }],
    eyebrow: 'About',
    h1: 'Lance McHan, REALTOR® in Stockton, California',
    lede: 'Luxury listing specialist with Cornerstone Real Estate Group, Certified Divorce Real Estate Expert, and a Lodi Association of Realtors Masters Club 2025 Life Member.'
  })}

  <section class="section">
    <div class="wrap">
      <div class="profile">
        <div>
          <div class="profile-media">${img(IMG.lanceAlt, { alt: IMG.lanceAlt.alt })}</div>
          ${profileCard()}
        </div>
        <div class="prose">
          <h2>Yes, you can with Lance McHan</h2>
          <p>Lance McHan is a REALTOR® with Cornerstone Real Estate Group, based at 611 Lincoln Center in Stockton, California. He is a luxury listing specialist, and he and his team are here 24/7 to assist with home buying and selling needs from start to finish. They also guide families through probate and trust property sales.</p>
          <p>Lance works throughout the Central Valley &mdash; Stockton, Lodi, Manteca, Tracy, Lathrop, Modesto, Ripon, Galt, Escalon, French Camp and Elk Grove &mdash; across San Joaquin, Stanislaus and Sacramento counties, with homes, acreage, land and commercial property.</p>

          <h3>Credentials</h3>
          <ul>
            <li>REALTOR®, California License ID ${SITE.license}</li>
            <li>Cornerstone Real Estate Group, DRE ${SITE.brokerLicense}</li>
            <li><a href="${SITE.cdreProfile}" target="_blank" rel="noopener">Certified Divorce Real Estate Expert</a></li>
            <li>Lodi Association of Realtors Masters Club 2025 Life Member</li>
            <li>Luxury listing specialist</li>
            <li>5.0 stars from ${SITE.reviewCountPretty} Google reviews &mdash; <a href="${SITE.googleReviews}" target="_blank" rel="noopener">read our reviews on Google</a></li>
          </ul>

          <div class="badges" style="margin:28px 0">
            ${img(IMG.markCornerstone, { alt: 'Cornerstone Real Estate Group logo' })}
            <a href="${SITE.cdreProfile}" target="_blank" rel="noopener">${img(IMG.cdre, { alt: 'Certified Divorce Real Estate Expert logo' })}</a>
            ${img(IMG.masters, { alt: 'Lodi Association of Realtors Masters Club 2025 Life Member badge' })}
          </div>

          <h3>How Lance can help</h3>
          <ul>
            <li><a href="/sell/">Selling a home</a> and free home valuations</li>
            <li><a href="/buy/">Buying a home</a>, land, acreage or commercial property</li>
            <li><a href="/probate-trust/">Probate and trust sales</a></li>
            <li><a href="/divorce-real-estate/">Divorce real estate</a></li>
            <li><a href="/55-plus-communities/">55+ community moves</a></li>
          </ul>

          <h3>Follow Lance</h3>
          <ul class="socials">
            ${SOCIALS.map(function (s) { return `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`; }).join('\n            ')}
          </ul>

          <div class="btn-row" style="margin-top:30px">
            ${bookBtn('btn-gold')}
            ${callBtn('btn-outline')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--ink">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Client reviews</p>
        <h2>What clients say about working with Lance</h2>
      </div>
      ${reviewCarousel(ALL_REVIEWS)}
    </div>
  </section>

  ${valuationCta()}
  `
});

/* ============================================================
   REVIEWS
   ============================================================ */

function reviewGrid(list) {
  return `<div class="reviews-grid">
        ${list.map(function (r) {
    return `<div class="review reveal">
          <div class="stars" aria-label="5 out of 5 stars">${L.STARS}</div>
          <blockquote>&ldquo;${esc(r.quote)}&rdquo;</blockquote>
          <footer>${img(IMG.google, { class: 'glogo', alt: 'Google' })}<span><span class="r-name">${esc(r.name)}</span><br><span class="r-src">${esc(r.source)}</span></span></footer>
        </div>`;
  }).join('\n        ')}
      </div>`;
}

const reviews = page({
  path: '/reviews/',
  title: 'Lance McHan Reviews | 5.0 Stars from 1,238 Google Reviews | Stockton REALTOR®',
  description: 'Read real reviews for Stockton REALTOR® Lance McHan of Cornerstone Real Estate Group — 5.0 stars from 1,238 Google reviews from Central Valley buyers, sellers and trustees.',
  crumbs: [{ name: 'Reviews', url: '/reviews/' }],
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews/' }],
    eyebrow: 'Reviews',
    h1: 'Lance McHan reviews from Central Valley clients',
    lede: '5.0 stars from ' + SITE.reviewCountPretty + ' Google reviews. Here is what buyers, sellers and trustees say about working with Lance.'
  })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Google reviews</p>
        <h2>In their words</h2>
        <p class="lede">Reviews are quoted exactly as they were written.</p>
      </div>
      ${reviewGrid(ALL_REVIEWS)}
      <div class="btn-row" style="margin-top:34px">
        <a class="btn btn-ink" href="${SITE.googleReviews}" target="_blank" rel="noopener">Read our reviews on Google</a>
        <a class="btn btn-outline" href="/review">Leave us a review</a>
        <a class="btn btn-outline" href="/zillow-reviews/">Zillow reviews</a>
      </div>
    </div>
  </section>

  ${valuationCta()}

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Join them &mdash; let&rsquo;s talk about your move',
    text: 'Call or text ' + SITE.phone + ' or book a consultation with Lance McHan.'
  })}
  `
});

const zillowReviews = page({
  path: '/zillow-reviews/',
  title: 'Lance McHan Zillow Reviews & Agent Profile | Stockton REALTOR®',
  description: 'Find Lance McHan on Zillow and Google. Stockton REALTOR® with Cornerstone Real Estate Group — 5.0 stars from 1,238 Google reviews. Call (209) 279-2235.',
  crumbs: [{ name: 'Reviews', url: '/reviews/' }, { name: 'Zillow reviews', url: '/zillow-reviews/' }],
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews/' }, { name: 'Zillow reviews', url: '/zillow-reviews/' }],
    eyebrow: 'Zillow',
    h1: 'Lance McHan reviews on Zillow',
    lede: 'Lance keeps an agent profile on Zillow as well as a Google Business Profile. Both are linked below so you can read reviews at the source.'
  })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Review profiles</p>
        <h2>Where to find Lance&rsquo;s reviews</h2>
      </div>
      <div class="cards">
        <div class="card reveal">
          <span class="card-k">Zillow</span>
          <h3>Lance McHan on Zillow</h3>
          <p>See Lance&rsquo;s Zillow agent profile and the reviews clients have left there.</p>
          <p class="mb-0"><a class="btn btn-ink btn-sm" href="https://www.zillow.com/profile/McHanLance" target="_blank" rel="noopener">View Zillow profile</a></p>
        </div>
        <div class="card reveal">
          <span class="card-k">Google</span>
          <h3>5.0 stars from ${SITE.reviewCountPretty} reviews</h3>
          <p>The Google Business Profile for Lance McHan at ${SITE.addressLine}.</p>
          <p class="mb-0"><a class="btn btn-ink btn-sm" href="${SITE.googleReviews}" target="_blank" rel="noopener">Read our reviews on Google</a></p>
        </div>
      </div>

      <div style="margin:52px 0 30px">
        <p class="eyebrow">A few of them</p>
        <h2>Recent client reviews</h2>
      </div>
      ${reviewGrid(GOOGLE_REVIEWS)}
      <p style="margin-top:26px"><a href="/reviews/">See all reviews &rarr;</a> &middot; <a href="/review">Leave us a review</a></p>
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Book a consultation',
    title: 'Work with a 5.0-star Central Valley REALTOR®',
    text: 'Call or text ' + SITE.phone + ' or book a consultation with Lance McHan.'
  })}
  `
});

/* ============================================================
   CONTACT
   ============================================================ */

const contactFaq = [
  { q: 'What is the fastest way to reach Lance?', a: '<p>Call or text ' + SITE.phone + '. Lance is here 24/7, start to finish.</p>' },
  { q: 'Where is the office?', a: '<p>' + SITE.addressLine + ', United States. Parking is on site and appointments are recommended so Lance is there when you arrive.</p>' },
  { q: 'Can we meet somewhere other than the office?', a: '<p>Yes &mdash; at the property, near your home, or by phone and video. Tell Lance what is easiest in the form.</p>' },
  { q: 'Will I be added to a mailing list?', a: '<p>Only if you ask to be. Lance uses your details to answer your question. Your information is never sold.</p>' }
];

const contact = page({
  path: '/contact/',
  title: 'Contact Lance McHan, REALTOR® | Book a Consultation | Stockton, CA',
  description: 'Contact Stockton REALTOR® Lance McHan at Cornerstone Real Estate Group. Call (209) 279-2235, email lance@lancemchan.com or book a consultation at 611 Lincoln Center, Stockton, CA 95207.',
  crumbs: [{ name: 'Contact', url: '/contact/' }],
  faq: contactFaq,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact/' }],
    eyebrow: 'Contact',
    h1: 'Book a consultation with Lance McHan',
    lede: 'Call, text, email or send the form. Lance is here 24/7, start to finish &mdash; for sellers, buyers, trustees and families across the Central Valley.'
  })}

  <section class="section">
    <div class="wrap">
      <div class="contact-grid">
        <div>
          <p class="eyebrow">Direct</p>
          <h2>Reach Lance</h2>
          <ul class="info-list">
            <li>
              <span class="ico" aria-hidden="true">&#9742;</span>
              <span><span class="k">Call or text</span><a class="v" href="${SITE.phoneHref}">${SITE.phone}</a></span>
            </li>
            <li>
              <span class="ico" aria-hidden="true">&#9993;</span>
              <span><span class="k">Email</span><a class="v" href="mailto:${SITE.email}">${SITE.email}</a></span>
            </li>
            <li>
              <span class="ico" aria-hidden="true">&#9873;</span>
              <span><span class="k">Office</span><span class="v">${SITE.addressLine}<br>United States</span></span>
            </li>
            <li>
              <span class="ico" aria-hidden="true">&#9201;</span>
              <span><span class="k">Hours</span><span class="v">Here 24/7, start to finish</span></span>
            </li>
            <li>
              <span class="ico" aria-hidden="true">&#9733;</span>
              <span><span class="k">Reviews</span><span class="v">${SITE.rating} stars from ${SITE.reviewCountPretty}</span><a href="${SITE.googleReviews}" target="_blank" rel="noopener">Read our reviews on Google</a></span>
            </li>
            <li>
              <span class="ico" aria-hidden="true">&#9878;</span>
              <span><span class="k">License</span><span class="v">License ID ${SITE.license}</span>${SITE.brokerage}, DRE ${SITE.brokerLicense}</span>
            </li>
          </ul>
          <div class="btn-row" style="margin-top:24px">
            ${callBtn('btn-gold')}
            <a class="btn btn-outline" href="/sell/">Free home valuation</a>
          </div>
        </div>
        <div>
          ${form({
            id: 'contact-form',
            formName: 'Contact',
            title: 'Send Lance a message',
            note: 'Tell Lance what you need and he will reply personally.',
            submit: 'Book a Consultation',
            successText: 'Thanks &mdash; Lance McHan will get back to you personally. Need an answer right now? Call or text ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email, F.need,
              { name: 'Preferred contact method', label: 'Best way to reach you', type: 'select', options: ['Phone call', 'Text message', 'Email'] },
              F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section section--tight section--cream">
    <div class="wrap">
      <div style="margin-bottom:26px">
        <p class="eyebrow">Find the office</p>
        <h2>611 Lincoln Center, Stockton</h2>
      </div>
      <div class="map-embed">
        <iframe title="Map showing Lance McHan's office at 611 Lincoln Center, Stockton, CA 95207" src="https://www.google.com/maps?q=611%20Lincoln%20Center%2C%20Stockton%2C%20CA%2095207&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>Before you call</h2>
      </div>
      ${faqBlock(contactFaq, 'contact-faq')}
    </div>
  </section>

  ${ctaBand({
    eyebrow: 'Here 24/7',
    title: 'Yes, you can with Lance McHan',
    text: 'Call or text ' + SITE.phone + ' any time, or email ' + SITE.email + '.'
  })}
  `
});

/* ============================================================
   MORTGAGE CALCULATOR + FINANCING
   ============================================================ */

const calcFaq = [
  { q: 'Does this calculator use live interest rates?', a: '<p>No. You type in the rate yourself. Nothing on this page is a rate quote, an offer of credit or a prediction &mdash; it is arithmetic on the numbers you enter.</p>' },
  { q: 'What is included in the monthly figure?', a: '<p>Principal and interest only. Property taxes, homeowners insurance, HOA dues, Mello-Roos and mortgage insurance are not included and will raise your real monthly cost.</p>' },
  { q: 'How accurate will my real payment be?', a: '<p>Your actual payment comes from a licensed lender after they review your credit, income and the property. Use this to compare scenarios, not to budget to the dollar.</p>' },
  { q: 'Can Lance help me understand the numbers?', a: '<p>Yes. Call or text ' + SITE.phone + ' and Lance will walk through what the figures mean for the homes you are considering.</p>' }
];

const mortgageCalculator = page({
  path: '/mortgage-calculator/',
  title: 'Mortgage Payment Calculator for Central Valley Buyers | Lance McHan',
  description: 'Estimate a monthly principal and interest payment for a Stockton, Lodi, Manteca or Tracy home. Enter price, down payment, rate and term. No rate quotes. Call (209) 279-2235.',
  crumbs: [{ name: 'Buy a home', url: '/buy/' }, { name: 'Mortgage calculator', url: '/mortgage-calculator/' }],
  faq: calcFaq,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Buy a home', url: '/buy/' }, { name: 'Mortgage calculator', url: '/mortgage-calculator/' }],
    eyebrow: 'Calculator',
    h1: 'Mortgage payment calculator for Central Valley buyers',
    lede: 'Enter a price, a down payment, a rate and a term to see an estimated monthly principal and interest payment. Your numbers, your scenarios &mdash; no rate quotes.'
  })}

  <section class="section">
    <div class="wrap">
      ${calcBlock}
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap">
      <div class="with-aside">
        <div class="prose">
          <p class="eyebrow">Reading the result</p>
          <h2>What the calculator does and does not tell you</h2>
          <p>The monthly figure is principal and interest on the loan amount you created by subtracting the down payment from the price. It is the part of your payment that goes to the lender for the loan itself.</p>
          <p>Your real housing cost in Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove will also include property taxes, homeowners insurance, any HOA or Mello-Roos assessment, and mortgage insurance if your down payment is small. Ask a licensed lender for a full estimate before you make decisions.</p>
          <p>Next: read the <a href="/home-mortgage/">home financing basics</a>, then <a href="/buy/">book a buyer consultation</a> with Lance.</p>
        </div>
        <div class="aside-sticky">
          ${form({
            id: 'calc-help',
            formName: 'Payment question',
            title: 'Want help with the numbers?',
            note: 'Send your scenario and Lance will talk it through with you.',
            submit: 'Ask Lance',
            successText: 'Thanks &mdash; Lance McHan will get back to you about your numbers. Prefer to talk now? Call ' + SITE.phone + '.',
            fields: [F.name, F.phone, F.email, F.message]
          })}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>Calculator questions</h2>
      </div>
      ${faqBlock(calcFaq, 'calc-faq')}
    </div>
  </section>

  ${ctaBand({ eyebrow: 'Book a consultation', title: 'Turn a number into a plan', text: 'Call or text ' + SITE.phone + ' and Lance will help you work out what to do next.' })}
  `
});

const financeFaq = [
  { q: 'What does pre-approval mean?', a: '<p>A lender has reviewed your information and is willing to lend up to a stated amount, subject to conditions. Sellers take offers from pre-approved buyers more seriously than offers without a letter.</p>' },
  { q: 'What documents will a lender usually ask for?', a: '<p>Expect identification, recent pay stubs or proof of income, tax returns, bank statements and details of your debts. Every lender has its own list &mdash; ask yours early.</p>' },
  { q: 'Does Lance McHan arrange loans?', a: '<p>No. Lance is a REALTOR®, not a lender. He will point you toward the questions to ask and work alongside whichever licensed lender you choose.</p>' },
  { q: 'How much down payment do I need?', a: '<p>That depends on the loan programme you qualify for and the property. Use the <a href="/mortgage-calculator/">calculator</a> to see how different down payments change the monthly figure, then confirm with a lender.</p>' }
];

const homeMortgage = page({
  path: '/home-mortgage/',
  title: 'Home Financing Basics for Central Valley Buyers | Lance McHan REALTOR®',
  description: 'What Stockton, Lodi and Manteca buyers should know before applying for a mortgage: pre-approval, documents, down payments and costs beyond principal and interest. Call (209) 279-2235.',
  crumbs: [{ name: 'Buy a home', url: '/buy/' }, { name: 'Home financing', url: '/home-mortgage/' }],
  faq: financeFaq,
  body: `
  ${head({
    crumbs: [{ name: 'Home', url: '/' }, { name: 'Buy a home', url: '/buy/' }, { name: 'Home financing', url: '/home-mortgage/' }],
    eyebrow: 'Financing',
    h1: 'Home financing basics for Central Valley buyers',
    lede: 'What to sort out before you tour homes in Stockton, Lodi, Manteca, Tracy, Modesto or Elk Grove &mdash; explained plainly, with no rate claims and no sales pitch.'
  })}

  <section class="section">
    <div class="wrap">
      <div style="margin-bottom:34px">
        <p class="eyebrow">Getting ready</p>
        <h2>Six steps to being ready to buy</h2>
        <p class="lede">Do these in order and the rest of the purchase gets much easier.</p>
      </div>
      <div class="cards cards--3">
        <div class="card reveal">
          <span class="card-k">First</span>
          <h3>Work out a comfortable payment</h3>
          <p>Decide what you want to spend each month before a lender tells you what you could spend. The <a href="/mortgage-calculator/">payment calculator</a> lets you test scenarios.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Second</span>
          <h3>Talk to a licensed lender</h3>
          <p>Compare more than one. Ask about programmes you may qualify for, what the closing costs look like and how long their approval takes.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Third</span>
          <h3>Get your paperwork together</h3>
          <p>Identification, income, tax returns, bank statements and debts. Having them ready turns a two-week approval into a two-day one.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Fourth</span>
          <h3>Get a pre-approval letter</h3>
          <p>It tells sellers you are real. In a competitive situation, it is often the difference between an offer being considered and being skipped.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Fifth</span>
          <h3>Budget beyond the loan</h3>
          <p>Property taxes, insurance, HOA dues, Mello-Roos and mortgage insurance are real money every month. Factor them in from the start.</p>
        </div>
        <div class="card reveal">
          <span class="card-k">Then</span>
          <h3>Start looking with Lance</h3>
          <p>With the financing settled, the search gets simple. <a href="/buy/">Book a buyer consultation</a> and tell Lance what you want.</p>
        </div>
      </div>
      <div class="note" style="margin-top:34px">
        <strong>Lance is a REALTOR®, not a lender.</strong>
        <p>Nothing on this page is a loan offer, a rate quote or financial advice. Work with a licensed lender for terms, rates and approvals.</p>
      </div>
    </div>
  </section>

  <section class="section section--cream">
    <div class="wrap-narrow">
      <div class="center" style="margin-bottom:34px">
        <p class="eyebrow eyebrow--center">Questions</p>
        <h2>Financing, answered</h2>
      </div>
      ${faqBlock(financeFaq, 'finance-faq')}
    </div>
  </section>

  ${ctaBand({ eyebrow: 'Book a consultation', title: 'Financing sorted? Let&rsquo;s find the house', text: 'Call or text ' + SITE.phone + ' or book a consultation with Lance McHan.' })}
  `
});

module.exports = [
  { path: '/', html: home },
  { path: '/sell/', html: sell },
  { path: '/buy/', html: buy },
  { path: '/probate-trust/', html: probate },
  { path: '/divorce-real-estate/', html: divorce },
  { path: '/55-plus-communities/', html: seniors },
  { path: '/about-lance-mchan/', html: about },
  { path: '/reviews/', html: reviews },
  { path: '/zillow-reviews/', html: zillowReviews },
  { path: '/contact/', html: contact },
  { path: '/mortgage-calculator/', html: mortgageCalculator },
  { path: '/home-mortgage/', html: homeMortgage }
];
