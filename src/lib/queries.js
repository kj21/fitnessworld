// ─── Phase 1 GROQ queries ─────────────────────────────────────────────────────
// All field names match the existing JSX access patterns exactly.
// Changing a query here never requires a JSX change.

// Every studio, with everything the site needs: cards (Home), nav/footer/form
// lists, and the studio detail page. One query, deduped by useSanityData.
export const STUDIOS_QUERY = `
  *[_type == "studioLocation"] | order(sortOrder asc, _createdAt asc) {
    _id,
    "slug": slug.current,
    eyebrow, title, sub, comingSoon, sortOrder,
    bestFor, accessNote, trainerHours,
    "img": heroImage.asset->url,
    cardFeatures, keyFacts,
    seoTitle, metaDesc,
    intro { headline, text },
    ausstattung,
    kurse[] { title, text },
    ctaHeadline, ctaText
  }
`

export const PRICING_PLANS_QUERY = `
  *[_type == "pricingPlan"] | order(sortOrder asc) {
    name, price, period, desc, features, cta, highlight, badge
  }
`

export const TEAM_MEMBERS_QUERY = `
  *[_type == "teamMember"] | order(sortOrder asc) {
    initial, name, role, loc, text,
    "photo": photo.asset->url
  }
`

export const JOB_LISTINGS_QUERY = `
  *[_type == "jobListing" && active == true] | order(sortOrder asc) {
    title, type, loc, text, tasks
  }
`

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(sortOrder asc) {
    initial, name, loc, quote
  }
`

export const STUDIO_CONTACTS_QUERY = `
  *[_type == "studioContact"] | order(sortOrder asc) {
    name, addr, tel, email, hours
  }
`

// Homepage copy (singleton). Every field is optional — see mergeHomePage().
export const HOME_PAGE_QUERY = `
  *[_type == "homePage"][0] {
    seoTitle, metaDesc,
    heroEyebrow, heroHeadline, heroLede, heroPrimaryCta, heroSecondaryCta, heroStats,
    accessBar[]{ icon, label, meta },
    decisionEyebrow, decisionHeadline, decisionText,
    decisionCards[]{ icon, goal, title, text, to, linkLabel },
    studiosEyebrow, studiosHeadline, studiosText,
    access247Eyebrow, access247Headline, access247Text,
    access247Points[]{ title, text }, access247Note{ title, text }, access247Cta,
    rehaEyebrow, rehaHeadline, rehaText, rehaSteps[]{ title, text }, rehaCta,
    fighterEyebrow, fighterHeadline, fighterText, fighterPoints[]{ title, text }, fighterCta,
    membershipEyebrow, membershipHeadline, membershipText, membershipCta,
    ctaEyebrow, ctaHeadline, ctaText, ctaSteps, ctaButton
  }
`

// Kurse (cards on /kurse, nav dropdown, footer column)
export const COURSES_QUERY = `
  *[_type == "course" && active != false] | order(sortOrder asc, _createdAt asc) {
    _id, title, category, text, link, featured, navLabel
  }
`

// Wochenplan on /kurse
export const SCHEDULE_QUERY = `
  *[_type == "scheduleEntry" && active != false] {
    _id, day, time, course, studio, level, trainer
  }
`

// Mitgliedschaft page copy (singleton)
export const MEMBERSHIP_PAGE_QUERY = `
  *[_type == "membershipPage"][0] { heroSub, pricingNote, benefits[]{ title, text }, faq[]{ q, a } }
`

// Unternehmen & Impressum (singleton)
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    companyName, managingDirector, street, zipCity, country, phone, email,
    registerCourt, registerNumber, taxNumber, vatId, responsible
  }
`

// Rechtstexte (Impressum-Zusatz, Datenschutz, AGB, Hausordnung)
export const LEGAL_PAGES_QUERY = `
  *[_type == "legalPage"] { page, title, body }
`

// Leistungs-Seiten (/kurse/reha-sport, /kurse/boxen, /kurse/personal-training)
export const SERVICE_PAGES_QUERY = `
  *[_type == "servicePage"] {
    slug, eyebrow, title, sub, primaryCta, secondaryCta,
    "heroImage": heroImage.asset->url,
    seoTitle, metaDesc,
    sections[] {
      _type, _key, tone, eyebrow, headline, text, items, numbered,
      "image": image.asset->url,
      imagePlaceholder,
      leftEyebrow, leftTitle, leftItems, rightEyebrow, rightTitle, rightItems,
      button
    }
  }
`

// Kopf-/Einleitungs-/Abschlusstexte der übrigen Seiten
export const PAGE_COPY_QUERY = `
  *[_type == "pageCopy"] {
    page, eyebrow, title, sub, primaryCta, secondaryCta,
    introEyebrow, introHeadline, introText, introCta,
    faq[]{ q, a },
    ctaEyebrow, ctaHeadline, ctaText, ctaButton,
    seoTitle, metaDesc
  }
`

// Magazin
export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(featured desc, publishedAt desc) {
    _id, title, "slug": slug.current, category, excerpt, publishedAt, featured,
    "image": image.asset->url, body
  }
`

// ─── Phase 2 (add later) ──────────────────────────────────────────────────────
