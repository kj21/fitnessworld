// CommonJS — CLI reads this before Vite takes over, so no "type":"module" needed
const { defineCliConfig } = require('sanity/cli')

module.exports = defineCliConfig({
  api: {
    projectId: 'u4s4v1t1',
    dataset: 'production',
  },
})
