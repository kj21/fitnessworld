// ─── Phase 1 GROQ queries ─────────────────────────────────────────────────────
// All field names match the existing JSX access patterns exactly.
// Changing a query here never requires a JSX change.

export const STUDIO_LOCATIONS_QUERY = `
  *[_type == "studioLocation"] | order(slug.current asc) {
    "slug": slug.current,
    title, eyebrow, sub,
    "img": heroImage.asset->url,
    seoTitle, metaDesc, keyFacts,
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

// ─── Phase 2 (add later) ──────────────────────────────────────────────────────
// export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{ ... }`
// export const COURSES_QUERY        = `*[_type == "course"] | order(sortOrder asc){ ... }`
// export const SCHEDULE_QUERY       = `*[_type == "scheduleEntry"] | order(sortOrder asc){ ... }`
