"use strict";

/**
 *  category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      const populateList = ["Thumbnail"];
      // Push any additional query params to the array
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");
      const content = await super.find(ctx);
      return content;
    },

    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const populateList = [
        "Thumbnail",
        "background",
        "porffolio",
        "porffolio.zone",
        "porffolio.zone.Pictures",
        "porffolio.zone.subcategory",
      ];
      // Push any additional query params to the array
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");
      const entity = await strapi.service("api::category.category").find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
