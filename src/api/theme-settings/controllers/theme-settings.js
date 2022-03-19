"use strict";

/**
 *  theme-settings controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::theme-settings.theme-settings",
  ({ strapi }) => ({
    async find(ctx) {
      const populateList = ["Settings", "SocialMedia", "SocialMedia.Icon"];
      // Push any additional query params to the array
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");
      const content = await super.find(ctx);
      return {
        socialMedia: content.data.attributes.SocialMedia,
        copyrights: content.data.attributes.Settings.CopyrightsText,
        settings: content.data.attributes.Settings,
      };
    },
  })
);
