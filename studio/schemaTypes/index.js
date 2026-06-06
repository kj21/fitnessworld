// Phase 1 — core content types
import studioLocation from './studioLocation.js'
import pricingPlan    from './pricingPlan.js'
import teamMember     from './teamMember.js'
import jobListing     from './jobListing.js'
import testimonial    from './testimonial.js'
import studioContact  from './studioContact.js'

// Phase 2 (import and add to array when ready)
// import course         from './course.js'
// import scheduleEntry  from './scheduleEntry.js'
// import siteSettings   from './siteSettings.js'

// Phase 3
// import blogPost       from './blogPost.js'
// import legalPage      from './legalPage.js'
// import servicePage    from './servicePage.js'

export const schemaTypes = [
  studioLocation,
  pricingPlan,
  teamMember,
  jobListing,
  testimonial,
  studioContact,
]
