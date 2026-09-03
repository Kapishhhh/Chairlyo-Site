const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({

  e2e: {

    baseUrl: process.env.CYPRESS_BASE_URL,

    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,

      branchUsername: process.env.CYPRESS_BRANCH_USERNAME,
      branchPassword: process.env.CYPRESS_BRANCH_PASSWORD,
    },

    setupNodeEvents(on, config) {
      return config;
    },

  },

});