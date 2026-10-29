# Udaya Jeevan Trust — website starter

A responsive multi-page website for Udaya Jeevan Trust, Chennai, built with HTML5, CSS3 and vanilla JavaScript. The uploaded trust logo is included in `assets/`.

## Pages
- `index.html` — homepage, programme cards, impact counters, leadership message and future vision
- `about.html` — story, vision, mission, approach, leadership and organisation details
- `programs.html` — women empowerment, child development, health, livelihoods, awareness and training
- `impact.html` — impact indicators, achievement framework and reporting timeline
- `stories.html` — illustrative story concepts and gallery
- `future-vision.html` — proposed 2026–2030 goals
- `get-involved.html` — volunteer, donate and partnership options
- `contact.html` — contact details, enquiry form and map

## Run locally on Windows
1. Extract the ZIP.
2. Open the `udaya-jeevan-trust` folder in VS Code.
3. Install the VS Code **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.
4. Or use Python if installed: open Terminal in this folder and run `python -m http.server 8080`, then visit `http://localhost:8080`.

No build step is required for the static frontend.

## Content and verification status
- Programme descriptions are programme areas / intended activities; availability may vary.
- The Future Vision 2026–2030 page presents six targets as future goals, not completed results.
- Unverified impact counters were removed. The impact and story pages now use evidence-first empty states.
- Leadership is listed as Mrs. M. I. Thaira Banu (S. Thenmozhi), Managing Trustee / Director, without an invented biography.
- Contact details are clickable. The contact form opens a prefilled email and does not send to a server or store visitor data.
- A neutral initials placeholder is used for the leadership card until an approved official portrait is supplied.

## Important launch checks
This is a polished website starter, not a deployed or independently audited production service. Before public launch:
- Verify the trust deed details, PAN, 12A/12AB, 80G, NGO Darpan ID, CSR registration and FCRA status from current documents.
- Replace illustrative impact numbers and all sample story/testimonial wording with verified, approved information.
- Obtain informed consent for every identifiable beneficiary photograph and testimonial.
- Add the confirmed bank details only after written verification by the trust. The current page intentionally does not invent bank details.
- Confirm the leadership photo, programme descriptions, operating geography and any claims about institutional partnerships.
- Replace generic social links with the trust's official profiles.
- Confirm image licenses/usage rights and consider self-hosting optimised WebP images for privacy and performance.
- Add a real backend for contact forms, donation receipts, content management, spam protection and secure data retention if required. The current forms open the visitor's email app and do not store or submit data to a server.
- Configure HTTPS, security headers, monitoring, backups and privacy/cookie notices appropriate to the actual services used.

## Colour palette
- Primary dark cerulean: `#19447B`
- Teal: `#42C1C7`
- Warm orange: `#F04923`
- Orange-yellow: `#FDB61C`
- Off-white: `#F6F9FC`

The brief's “Ocean Green #153BF9D” is not a valid six-digit hex colour. The stylesheet uses a soft mint background for that role and the specified dark blue as the primary brand colour.

## Notes
- Google Fonts, Unsplash photos and Google Maps embed load from external services and require an internet connection.
- The provided logo file is kept as `assets/udaya-jeevan-logo.jpeg`.
- No payment gateway is wired into this starter. Do not present a donation as completed without an approved payment or receipt process.


## Updated navigation structure
The header now uses the requested grouped navigation with dropdown sub-pages:
- About Us: Our Story, Vision & Mission, Objectives, Leadership, Trust Details
- Our Programmes: Women Empowerment, Child Development, Health & Welfare, Livelihoods, Awareness Campaigns, Training
- Impact & Stories: Achievements, Success Stories, Photo Gallery, Future Vision 2026–2030
- Reports & Transparency: Annual Reports, Trust Documents, Financial Reports, Verified Registrations
- Get Involved: Donate, Volunteer, Institutional Partnerships, CSR Enquiries
- Contact Us

The original homepage, colour palette, typography, imagery and existing pages are retained. Dropdowns are keyboard-accessible and collapse into expandable groups on mobile. The new sub-pages use the existing styles and clearly identify content/documents that still require trust verification; no registrations, reports or donation details have been fabricated.
