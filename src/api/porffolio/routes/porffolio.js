"use strict";

/**
 * porffolio router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::porffolio.porffolio", {
  config: {
    find: {
      auth: false,
    },
  },
});
