/* ============================================================================
   SIR YAWAR ABBAS · Physics · website settings
   THE ONLY FILE YOU EDIT. Every page reads it, so keep one copy beside them.
   Built by Nexlyr Solutions.

   Rule: a blank value hides that thing on the site. Nothing invented ever
   shows: no placeholder number, no made-up review, no fake result.
   ============================================================================ */

window.RA_CONFIG = {

  /* 1. WHO HE IS ------------------------------------------------------------ */
  name:      'Sir Yawar Abbas',
  shortName: 'Yawar Abbas',
  subject:   'Physics',
  city:      'Karachi',
  yearsTeaching: 20,             // LinkedIn: The Lyceum School, 2006 – present

  /* 2. CONTACT -------------------------------------------------------------- */
  // WhatsApp: digits only, country code first, e.g. '923001234567'.
  // Blank = WhatsApp buttons open WhatsApp and let the student pick the chat.
  whatsapp:     '',
  phoneDisplay: '',                // e.g. '0300 1234567' — blank = hidden
  email:        '',                // blank = hidden

  instagram: '',                   // blank = hidden
  facebook:  '',
  youtube:   '',
  linkedin:  '',                   // his LinkedIn profile URL, if he wants it shown

  /* Places he teaches. Remove a line to hide it. All from public posts. */
  campuses: [
    { name: 'The Lyceum School', note: 'A Level Physics instructor and subject coordinator · since 2006', text: 'Teaches A Level Physics and coordinates the subject.' },
    { name: 'Prodigy Educations', note: 'O Level Physics', text: 'O Level Physics classes; a demo class is on their YouTube channel.' },
    { name: 'Highbrow College', note: 'A Level Physics', text: 'A Level Physics, featured in the college’s own podcast episode.' },
    { name: 'The Ambitions', note: 'Physics', text: 'Physics classes with Sir Yawar, announced by the academy.' },
    { name: 'The Classroom', note: 'Physics', text: 'Physics registrations with Sir Yawar, announced by the academy.' }
  ],
  online: true,

  /* 3. STUDENT PORTAL --------------------------------------------------------
     Static demo: the portal and admin panel run on sample data kept only in
     the visitor's own browser. Nothing is sent anywhere. */
  PORTAL_PREVIEW: true,
  MAX_DEVICES: 2,

  /* 4. REAL MATERIAL ONLY — empty lists hide their sections ---------------- */
  /* { value: 'A*', label: '9702 Physics', note: 'May/June 2026', name: 'Student name' } */
  RESULTS: [],
  /* { name: 'Ayesha K.', meta: 'AS 9702 · 2026', text: 'What they actually said.' } */
  REVIEWS: [],

  /* 5. SITE ----------------------------------------------------------------- */
  siteUrl:   'https://sir-yawar-abbas.nexlyr.solutions',
  agency:    'Nexlyr Solutions',
  agencyUrl: 'https://nexlyr.solutions'
};

/* ============================================================================
   Plumbing. Nothing to edit below.
   ============================================================================ */
(function () {
  var C = window.RA_CONFIG;
  C.live = false;
  C.waUrl = function (text) {
    return 'https://wa.me/' + (C.whatsapp || '') + (text ? '?text=' + encodeURIComponent(text) : '');
  };
  C.waLabel = 'WhatsApp';
})();
