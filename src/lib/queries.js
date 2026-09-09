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
    marqueeItems,
    whyEyebrow, whyHeadline, whyLede, whyText, whyLink,
    studiosEyebrow, studiosHeadline, studiosText,
    servicesEyebrow, servicesHeadline, servicesText, services,
    communityEyebrow, communityHeadline, communityText, communityCta,
    numbers,
    testimonialsEyebrow, testimonialsHeadline,
    ctaEyebrow, ctaHeadline, ctaText, ctaButton
  }
`

// ─── Phase 2 (add later) ──────────────────────────────────────────────────────
// export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ ... }`
// export const COURSES_QUERY        = `*[_type == "course"] | order(sortOrder asc){ ... }`
// export const SCHEDULE_QUERY       = `*[_type == "scheduleEntry"] | order(sortOrder asc){ ... }`
