# Lance McHan, REALTOR® — Cornerstone Real Estate Group

Static marketing site for Lance McHan, REALTOR® (License ID 01987449) of Cornerstone
Real Estate Group (DRE 01037761), 611 Lincoln Center, Stockton, CA 95207.
Phone (209) 279-2235 · lance@lancemchan.com

## Stack

Vanilla HTML, CSS and JavaScript. No framework and no build step is required to
serve the site — `index.html` is the entry point and every page is plain static HTML.

```
index.html              Home
css/site.css            Design system (deep navy + warm gold, serif/sans pairing)
js/site.js              Sticky header, drawer, scroll reveal, carousel, FAQ,
                        mortgage calculator, form submission + thank-you state
images/source/          Photography and logos carried over from the previous site
sitemap.xml robots.txt favicon.svg
build/                  Node generator used to author the pages (dev only)
```

## Regenerating the HTML

Page content lives in `build/`. To rebuild every page, the sitemap and robots.txt:

```sh
node build/generate.js
```

`build/lib.js` holds the shared data (contact details, reviews, navigation, images)
and the layout components; `build/pages-main.js` and `build/pages-extra.js` hold the
page content. The generator also reports any file in `images/source/` that is no
longer referenced.

## Pages

Home · Sell & free home valuation · Buy · Probate & trust sales · Divorce real estate
(CDRE) · 55+ community moves · Service areas (Stockton, Lodi, Manteca, Tracy, Modesto,
Elk Grove) · Featured community pages (Elk Grove, Escalon, French Camp, Ripon) ·
About · Reviews · Zillow reviews · Contact · Mortgage calculator · Home financing ·
Featured homes · Home search · Recently sold · Open houses · Open house updates ·
Property enquiry pages.

## Forms

Every form posts to the LeadrVision endpoint
`https://vision.leadrai.com/api/forms/9bda3a915c13b192327a0718ef2731c0` with a
`_form` name, a `_page` value and a hidden `_gotcha` honeypot. Forms work without
JavaScript (the visitor returns with `?submitted=1`, which triggers the same inline
confirmation); with JavaScript they submit via `fetch` to the same URL and show the
confirmation in place. Each form carries an SMS/email consent line.

## Content rules observed

- No third-party MLS listing data or prices (they go stale).
- Reviews, ratings, credentials and licence numbers are reproduced only as supplied
  by the business and its Google Business Profile — nothing is invented.
