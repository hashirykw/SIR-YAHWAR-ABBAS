# Sir Yawar Abbas · Physics website (demo)

A multi-page site for Sir Yawar Abbas: Cambridge O Level Physics 5054, IGCSE Physics 0625 and AS & A Level Physics 9702, Karachi and online. Every page is one self-contained HTML file in one flat folder, with the logo, favicon and icons embedded inside it. The only shared file is `config.js`, which holds the settings.

Built by Nexlyr Solutions on the same system as the Sir Rohail Ahmed and Sir Sohail Ahmed sites: VERZISH-style preloader and page curtain, a 3D particle background that changes shape section by section (atom, interference field, magnet field lines, lens, orbits, prism, spring, E = mc², decay curve), stacking cards, and a dark night-blue / electric-cyan / silver palette.

**This is a demo.** The student portal and admin panel are static: they run on sample data saved only in the visitor's own browser, and nothing is sent to any server.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero with a live oscilloscope, his record as a table of readings, the three courses, the practical papers, the six-step procedure as stacking cards, a pinned "one question, five steps" worked example, a live energy-conservation demo, the syllabus map, study tools, where he teaches, command words |
| `courses.html` | 5054, 0625 (Core and Extended) and 9702 paper by paper: times, marks, weightings, AO splits, the three 9702 routes, practical papers, command words |
| `syllabus.html` | All 197 topics (63 for 5054, 58 for 0625, 76 for 9702) with key points, terms and equations, a progress tracker, the equation sheet by level, 14 laws, a 73-term glossary |
| `past-papers.html` | 5054, 0625 and 9702 question papers and mark schemes (2023–2026), score tracker with trend chart, exam timer with focus mode |
| `lab.html` | Physics Lab: motion grapher, forces & momentum, energy & Sankey, specific heat capacity, waves & oscilloscope, refraction & critical angle, lens ray diagram, circuit solver, half-life simulator, 46-question MCQ drill, flashcards (laws, terms, equations, units) |
| `portal.html` | Student portal demo. Sample student: ID `YA-1001`, code `DEMO-2026` |
| `admin.html` | Admin panel demo: issue IDs, add lectures, post announcements, record marks, see enrolments from the contact form |
| `about.html` | His profile, how he teaches, where he teaches, the levels he covers |
| `contact.html` | Enrolment form that opens a ready-written WhatsApp message, places, FAQ |
| `404.html` | Not-found page |
| `config.js` | **The only file you edit**: WhatsApp number, social links, campuses, real results and reviews |
| `og.jpg` | Share image for WhatsApp and social previews (1200 × 630) |
| `vercel.json`, `robots.txt`, `sitemap.xml` | Hosting and search files |

## Before showing it to Sir Yawar

1. **Name.** The site uses **Sir Yawar Abbas** (from the search results you shared). Confirm the spelling.
2. **WhatsApp number.** Not public, so `whatsapp` in `config.js` is blank. Until it is filled, WhatsApp buttons open WhatsApp and let the student pick the chat. Add digits only, e.g. `923001234567`, and `phoneDisplay`.
3. **Facts used, all from public posts:**
   - The Lyceum School, 2006 – present: instructor of A Level Physics and subject coordinator (his LinkedIn).
   - Prodigy Educations: O Level Physics, demo class on their YouTube; their description of him (simplifying tough logical concepts, mathematical modelling) is paraphrased on the About page.
   - Highbrow College: A Level Physics, podcast episode.
   - The Ambitions and The Classroom: academy announcements of his Physics classes.
   - "20+ years" = Lyceum from 2006.
   Remove any place he no longer teaches at from `campuses` in `config.js` and the matching card in `about.html`.
4. **Portrait.** The cut-out comes from the photo you supplied, with the background removed. It is embedded in the HTML (home hero, About page, preloader).
5. **Social links.** `instagram`, `facebook`, `youtube`, `linkedin` are blank, so they are hidden. Fill any he wants shown.
6. **Results and reviews.** `RESULTS` and `REVIEWS` are empty, so nothing invented appears.
7. **Domain.** Pages use `https://sir-yawar-abbas.nexlyr.solutions`. Find and replace if the address changes.

## Notes on content

- Syllabus outcomes are summarised in our own words from Cambridge's published syllabuses. Command-word definitions are paraphrased.
- The braking-car question, the MCQ bank and the Lab examples were written for this site; they are not Cambridge questions.
- Past papers open from PapaCambridge's public archive (© UCLES).
- Progress (ticked topics, paper scores, quiz results, flashcards, portal demo data) is saved in the visitor's own browser only.

## Sources

- Cambridge O Level Physics 5054 syllabus 2026–2028: https://www.cambridgeinternational.org/Images/697324-2026-2028-syllabus.pdf
- Cambridge IGCSE Physics 0625 syllabus 2026–2028: https://www.cambridgeinternational.org/Images/697209-2026-2028-syllabus.pdf
- Cambridge International AS & A Level Physics 9702 syllabus 2025–2027: https://www.cambridgeinternational.org/Images/664565-2025-2027-syllabus.pdf
