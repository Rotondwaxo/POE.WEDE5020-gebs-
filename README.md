## Changelog

### Part 3 — Enhancing Functionality and SEO (August 2026)

#### Feedback from Part 2 Implemented:
- **Colour palette refined** for stronger hygiene/freshness association
  - **Action:** Updated CSS variables to use crisp whites, soft blues (`#4FA8E0`), and fresh greens (`#5FCFA0`)
  - **Files:** `css/styles.css`
- **Background gradient added** to make site feel fresh
  - **Action:** Body now uses a subtle blue-to-mint gradient background
  - **Files:** `css/styles.css`

#### New Features Added in Part 3:
- **Service Search Filter** — Live keyword search on services page
- **FAQ Accordion** — Interactive expandable Q&A section
- **Gallery with Lightbox** — Clickable image gallery with keyboard navigation
- **Quote Estimate Response** — Enquiry form returns an instant price estimate
- **Contact Form Email** — Uses `mailto:` to open the user's email client
- **SEO Optimisation** — Unique title tags, meta descriptions, and keywords for all 5 pages
- **robots.txt** — Search engine crawler instructions
- **sitemap.xml** — Full sitemap for search engines
- **Website deployed** — Live on https://github.com/Rotondwaxo/POE.WEDE5020-gebs-/tree/main/Gebscleaningservices

#### Files Added/Modified:
- `index.html` — Added gallery section + lightbox, updated SEO meta
- `about.html` — Updated SEO meta
- `services.html` — Added search bar, FAQ accordion, updated SEO meta
- `enquiry.html` — Added quote response, updated SEO meta
- `contact.html` — Updated SEO meta
- `css/styles.css` — Added styles for search, accordion, gallery, lightbox, quote response
- `js/main.js` — Added search filter, accordion, and lightbox scripts
- `js/form-validation.js` — Enhanced with quote estimation and mailto handling
- `robots.txt` — Created (NEW)
- `sitemap.xml` — Created (NEW)
- `README.md` — Updated with Part 3 changelog

## SEO Implementation

### Title Tags
Each page has a unique, keyword-rich title under 60 characters.

### Meta Descriptions
All pages include unique 150–160 character descriptions that summarise the page content.

### Meta Keywords
Each page has 5–8 relevant keywords.

### Image Optimisation
All images have descriptive file names (e.g. `residential-cleaning.jpg`) and descriptive alt text that improves accessibility and SEO.

### Internal Linking
Every page links to other relevant pages through navigation, footer links, and in-content CTAs.

### Mobile-Friendly
The website uses responsive design with three breakpoints, ensuring it works on all devices.

### Additional SEO Files
- `robots.txt` — Instructs search engine crawlers
- `sitemap.xml` — Helps search engines understand the site structure

## Deployment

Website is live at:(https://github.com/Rotondwaxo/POE.WEDE5020-gebs-/tree/main/Gebscleaningservices)

Deployed via Netlify using continuous deployment from the GitHub repository.

## References

- Google. (2026). *Search Engine Optimization (SEO) Starter Guide*. Google Search Central. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Mozilla Developer Network. (2026). *HTML: HyperText Markup Language*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML
- Mozilla Developer Network. (2026). *Client-side form validation*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- Mozilla Developer Network. (2026). *ARIA: aria-expanded attribute*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded
- W3C. (2026). *Web Content Accessibility Guidelines (WCAG) 2.2*. World Wide Web Consortium. https://www.w3.org/TR/WCAG22/
- Netlify. (2026). *Deploy your website*.https://github.com/Rotondwaxo/POE.WEDE5020-gebs-/tree/main/Gebscleaningservices
- Google. (2026). *Google Maps Embed API*. Google Maps Platform. https://developers.google.com/maps/documentation/embed
- Unsplash. (2026). *Free high-resolution photos*. https://unsplash.com/



# POE.WEDE5020-gebs-
## SEO Discussion and Implementation (Part 3)

**1. Define SEO and explain its purpose in web development.**
Search Engine Optimization (SEO) is the process of optimizing a website to increase its visibility and ranking on search engines like Google. Its primary purpose in web development is to drive organic (unpaid) traffic to the site by ensuring search engines can easily crawl, understand, and index the content, making it easier for potential customers to find the business online.

**2. Explain how SEO practices can improve user experience (UX) and website performance.**
Good SEO practices inherently improve UX because search engines prioritize fast, mobile-friendly, and well-structured sites. Optimizing images, using clean URL structures, and writing clear headings make navigation easier for users. Fast load times reduce bounce rates, and semantic HTML ensures screen readers and browsers render content logically, creating a smoother, more accessible experience.

**3. Discuss the benefits of implementing SEO on a website.**
Implementing SEO increases organic traffic, which is cost-effective compared to paid advertising. It builds brand credibility and trust, as users tend to trust websites that rank on the first page of Google. For a local service like Gebs Cleaning, Local SEO ensures the business is found by users in Pretoria specifically, resulting in higher-quality leads and more conversions.

**4. Explain and demonstrate specific SEO techniques using HTML, CSS and JavaScript where applicable.**
- **HTML:** We used semantic tags (`<header>`, `<main>`, `<footer>`) to structure content clearly. Descriptive `alt` text was added to all images (e.g., "Sparkling clean kitchen..."), and unique `<title>` tags and `<h1>` headings were applied to every page.
- **CSS:** We ensured the website is fully mobile-responsive, as Google uses mobile-first indexing. Text and background colors were chosen for high contrast to improve readability.
- **JavaScript:** We used JS to implement a "Smart Search" feature and an interactive FAQ accordion, which keeps the user on the page longer and improves site engagement metrics (a factor in SEO ranking).

**5. Explain the purpose of HTML meta elements and demonstrate relevant examples.**
Meta elements provide search engines with information about a webpage's content. The `<meta name="description">` summarizes the page for search results, improving click-through rates. The `<meta name="viewport">` ensures mobile responsiveness. 
- **Example implemented in our project:**
  `<meta name="description" content="Gebs Cleaning Services offers trusted residential and commercial cleaning in Pretoria...">`
  `<meta name="keywords" content="cleaning services Pretoria, residential cleaning, commercial cleaning...">`
