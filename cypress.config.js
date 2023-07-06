const {defineConfig} = require('cypress')

module.exports = defineConfig({
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    viewportWidth: 1450,
    viewportHeight: 1000,
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        hideXHRInCommandLog: true,
        experimentalSessionAndOrigin: false,
    },
})
