const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com',
    defaultCommandTimeout: 30000,
    "reporter": "mochawesome",
    "reporterOptions": {
       "reportDir": "cypress/results",
       "overwrite": false,
       "html": true,
       "json": false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});