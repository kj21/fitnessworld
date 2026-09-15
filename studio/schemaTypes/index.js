// Phase 1 — core content types
import studioLocation from './studioLocation.js'
import pricingPlan    from './pricingPlan.js'
import teamMember     from './teamMember.js'
import jobListing     from './jobListing.js'
import testimonial    from './testimonial.js'
import studioContact  from './studioContact.js'
import homePage       from './homePage.js'
import course         from './course.js'
import scheduleEntry  from './scheduleEntry.js'
import membershipPage from './membershipPage.js'
import siteSettings   from './siteSettings.js'
import legalPage      from './legalPage.js'

// Phase 2 (import and add to array when ready)

// Phase 3
// import blogPost       from './blogPost.js'
// import servicePage    from './servicePage.js'

export const schemaTypes = [
  studioLocation,
  pricingPlan,
  teamMember,
  jobListing,
  testimonial,
  studioContact,
  homePage,
  membershipPage,
  siteSettings,
  course,
  scheduleEntry,
  legalPage,
]
